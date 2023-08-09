<script>
  import { onMount } from "svelte";
  import "./index.scss";

  /**
   * @type {number} Menu Count
   */
  export let count = 3;
  /**
   * @type {string} Animation Type
   */
  export let animation = "static";

  let navName = 0;
  let isChanged = false;
  let markerElement;

  /**
   * The length of menu
   */
  $: menus = new Array(count || 1).fill(null).map((_, i) => `Nav_${i}`);
  /**
   * wheather show Indicator
   */
  $: showIndicator = animation !== "static";
  /**
   * wheather show Indicators
   */
  $: showIndicators = animation !== "slide";

  const changeNav = (event, name) => {
    navName = name;
    isChanged = !isChanged; // equals markerElement.classList.toggle('changing');
    showIndicator && animateNav(event.target);
  };

  const animateNav = (target) => {
    if (!target || !markerElement) return;
    markerElement.style.left = target.offsetLeft + "px";
    markerElement.style.width = target.offsetWidth + "px";
    markerElement.style.filter = "hue-rotate(" + Math.random() * 360 + "deg)";
  };

  onMount(() => {
    // init default offset
    showIndicator &&
      markerElement &&
      animateNav(markerElement.parentElement.children[navName]);
  });
</script>

<nav>
  {#each menus as m, i}
    <li
      class:active={i === navName}
      on:click={(e) => changeNav(e, i)}
      role="none"
    >
      {m}
      {#if showIndicators}
        <div class="indicators" class:isChanged class:hidden={i !== navName} />
      {/if}
    </li>
  {/each}
  {#if showIndicator}
    <div class="indicator" class:isChanged bind:this={markerElement} />
  {/if}
</nav>
