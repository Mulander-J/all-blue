import Iphone2d from "./Iphone2d.svelte";

export default {
  // title: "WebGL/Iphone2d",
  isTemplate: true,
  component: Iphone2d,
  argTypes: {
    main: { control: "color" },
    side: { control: "color" },
    cam: { control: "color" },
    camRing: { control: "color" },
    logo: { control: "color" },
    animateSpeed: { control: { type: "range", min: 6, max: 24 } },
  },
};

export const Preview = {};
