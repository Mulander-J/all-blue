<script>
  import { onMount } from "svelte";
  import {
    initElementCoords,
    initEvtCoords,
    convertCoords,
    parseChannelMessage,
  } from "./utils";
  import "./index.css";

  let btnElement;
  let blockElement;

  let channel = new BroadcastChannel("DataTransfer");

  let offsetX = 0;
  let offsetY = 0;

  function handleAdjustOffset(data) {
    console.log("[AdjustOffset]", data);

    offsetX = data.x;
    offsetY = data.y;

    if (btnElement) {
      btnElement.remove();
    }
  }
  function handleSetDomCoords(data) {
    let { x, y } = data;
    blockElement.style.left = x + "px";
    blockElement.style.top = y + "px";
  }
  function handleUpdateCoords(data) {
    let _data = convertCoords("s2p", data, [offsetX, offsetY]);
    handleSetDomCoords(_data);
  }

  function onMouseDown(downEvent) {
    /** 元素相对于屏幕的坐标 */
    let elementCoords = convertCoords(
      "p2s",
      {
        x: parseInt(blockElement.style.left),
        y: parseInt(blockElement.style.top),
      },
      [offsetX, offsetY]
    );

    /** 元素起始水平坐标 */
    let elementX = elementCoords.x;

    /** 元素起始垂直坐标 */
    let elementY = elementCoords.y;

    /** 鼠标起始水平坐标 */
    let cursorX = downEvent.screenX;

    /** 鼠标起始垂直坐标 */
    let cursorY = downEvent.screenY;

    /**
     * @description 处理鼠标移动
     * @param {MouseEvent} moveEvent
     */
    let handleMove = function (moveEvent) {
      let newX = elementX + (moveEvent.screenX - cursorX);
      let newY = elementY + (moveEvent.screenY - cursorY);

      let coords = { x: newX, y: newY };

      // 更新当前页面元素坐标
      handleUpdateCoords(coords);

      // 通知其他页面
      channel.postMessage({
        type: "UpdateCoords",
        data: coords,
      });
    };

    let handleUp = function () {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseup", handleUp);
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseup", handleUp);
  }

  const handleInit = function (ev) {
    const [offsetX, offsetY] = initEvtCoords(ev);
    // 更新当前页面数据
    handleAdjustOffset({
      x: offsetX,
      y: offsetY,
    });

    // 通知其他页面更新数据
    channel.postMessage({
      type: "AdjustOffset",
      data: { x: offsetX, y: offsetY },
    });

    // 获取元素相对于屏幕的坐标，用于同步其他页面
    let coords = convertCoords(
      "p2s",
      {
        x: parseInt(blockElement.style.left),
        y: parseInt(blockElement.style.top),
      },
      [offsetX, offsetY]
    );

    // 更新当前页面元素的坐标
    handleUpdateCoords(coords);

    // 通知其他页面更新元素坐标
    channel.postMessage({
      type: "UpdateCoords",
      data: coords,
    });
  };

  onMount(() => {
    // focus dom elements
    btnElement.focus();
    blockElement.focus();

    // init coords
    const coords = initElementCoords();
    handleSetDomCoords(coords);

    // channel broadcast
    channel.addEventListener("message", function (ev) {
      let { data, type } = parseChannelMessage(ev);

      switch (type) {
        case "AdjustOffset":
          handleAdjustOffset(data);
          break;
        case "UpdateCoords":
          handleUpdateCoords(data);
          break;
        default:
          break;
      }
    });
  });
</script>

<div style="min-height: 500px; width:100%;">
  <div
    id="block"
    class="block"
    role="none"
    bind:this={blockElement}
    on:mousedown={onMouseDown}
    style="left: 0px; top: 0px;"
  />
  <div
    id="init-btn"
    class="init-btn"
    role="none"
    bind:this={btnElement}
    on:click={handleInit}
  >
    <span>Initial</span>
  </div>
</div>
