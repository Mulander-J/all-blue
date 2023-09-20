/** 初始化元素坐标 */
export function initElementCoords() {
    /** 元素宽度 */
    let elementW = block.clientWidth;

    /** 元素高度 */
    let elementH = block.clientHeight;

    /** 页面宽度 */
    let windowW = window.innerWidth;

    /** 页面高度 */
    let windowH = window.innerHeight;

    return {
        x: Math.round(windowW / 2 - elementW / 2),
        y: Math.round(windowH / 2 - elementH / 2)
    }
}

/* 当前位置重置 */
export function initEvtCoords(ev) {
    let { pageX, pageY, screenX, screenY } = ev;

    let offsetX = 0,
        offsetY = 0;
    let relativeX = screenX - window.screenLeft;
    let relativeY = screenY - window.screenTop;

    while (relativeX > pageX) {
        offsetX++;
        relativeX--;
    }

    while (relativeY > pageY) {
        offsetY++;
        relativeY--;
    }

    return [offsetX, offsetY]
}

/**
 * @description 转换坐标值
 * @param {'p2s'|'s2p'} type
 * @param {object} coords
 * @param {number} coords.x
 * @param {number} coords.y
 * @param {array} offsets
 */
export function convertCoords(type, coords, offsets) {
    let { x, y } = coords;
    let { screenLeft, screenTop } = window;
    let [offsetX, offsetY] = offsets

    switch (type) {
        // 页面坐标 -> 屏幕坐标
        case 'p2s':
            return {
                x: x + screenLeft + offsetX,
                y: y + screenTop + offsetY,
            };
        // 屏幕坐标 -> 页面坐标
        case 's2p':
            return {
                x: x - screenLeft - offsetX,
                y: y - screenTop - offsetY,
            };
        default:
            console.error('转换失败：类型错误');
            return { x: 0, y: 0 };
    }
}

/**
 * @description 解析广播消息
 * @param   {MessageEvent<ChannelMessage>} event
 * @returns {ChannelMessage}
 */
export function parseChannelMessage(event) {
    let data = event.data;

    if (data && data.type) {
        return data;
    } else {
        return {
            type: '',
            data: null,
        };
    }
}