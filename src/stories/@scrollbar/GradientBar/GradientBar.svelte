<script>
  import { RandomText } from '../../../constant'
  import "./index.scss";
  /**
   * @type {boolean} Is Horizontal
   */
  export let isHorizontal = false;
  /**
   * @type {boolean} Direction Reverse
   */
  export let isReverse = false;

  /**
   * @type {number} Repeat count
   */
  export let repeat = 10;

  /**
   * @type {string} Text Content
   */
  export let content = RandomText;

  let percent = 0;

  const handleCroll = (event) => {
    let { scrollTop, scrollHeight, clientHeight } = event.target;
    percent = (100 * scrollTop) / (scrollHeight - clientHeight);
  };

  $: paragraphs = new Array(repeat || 1);
  $: dirCls = isHorizontal? (isReverse ? 'top' : 'bottom') : (isReverse ? 'left' : 'right')
  $: scrollStyle = isHorizontal ? `width:${percent}%` : `height:${percent}%`;
</script>

<div class="relative">
  <div id="scrollTrack" class={`scroll__${dirCls}`}>
    <div class="bar" style={scrollStyle} />
  </div>
  <section class="content" on:scroll={handleCroll}>
    {#each paragraphs as n}
      <p key={n}>{content}</p>
    {/each}
  </section>
</div>
