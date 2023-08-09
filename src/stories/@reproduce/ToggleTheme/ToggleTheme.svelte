<script>
  import { RandomText } from "../../../constant";
  import "./index.scss";

  let isDark
  
  const getDark = () => /dark/i.test(document.documentElement?.className);
  const toggleTheme = () => {
    isDark = getDark();
    console.log('isDark', isDark)
    if (isDark) {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
    }
  };

  const handleToggle = (event) => {
    // Fallback for browsers that don’t support this API:
    if (!document?.startViewTransition) {
      toggleTheme();
      return;
    }

    const x = event.clientX;
    const y = event.clientY;
    
    const endRadius = Math.hypot(
      Math.max(x, document.querySelector("#box").clientWidth - x),
      Math.max(y, document.querySelector("#box").clientHeight - y)
    );

    console.log('sda', endRadius)

    const transition = document.startViewTransition(toggleTheme);

    transition.ready.then(() => {
      console.log('issss', isDark)
      const clipPath = [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${endRadius}px at ${x}px ${y}px)`,
      ];
      document.documentElement.animate(
        {
          clipPath: isDark ? [...clipPath].reverse() : clipPath,
        },
        {
          duration: 500,
          easing: "ease-in",
          pseudoElement: isDark
            ? "::view-transition-old(root)"
            : "::view-transition-new(root)",
        }
      );
    });
  };
</script>

<div id="box" on:click={handleToggle} role="presentation">
  <div class="p-10 border-2 bg-white text-black dark:text-white dark:bg-black">
    <p>{RandomText}</p>
  </div>
</div>
