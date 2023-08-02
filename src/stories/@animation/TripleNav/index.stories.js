import TripleNav from './TripleNav.svelte';
// import GradientBar from '../../@scrollbar/GradientBar/GradientBar.svelte';

/**
 * [Refrence:Magic Navigation Menu Indicator using CSS & Javascript](https://www.youtube.com/watch?v=k26kBQP2XH0)
 * 
 * Reproduce via svelte
 */
export default {
  component: TripleNav,
  argTypes: {
    animation: {
      description: 'Animation Type',
      control: { 
        type: 'select',
      },
      options: ['static', 'slide', 'shadow']
    },
    count: { 
      description: 'Menu Count',
      control: {
        type: 'number',
        min: 1,
        max: 6,
        step: 1,
      }
    },
  },
  tags: ['autodocs']
};

/**
 * None animation, only affect with active.
 */
export const Static = {
  args: {
    animation: 'static',
    count: 4
  }
};
/**
 * Slide animation, slide between actived targets.
 */
export const Slide = {
  args: {
    animation: 'slide',
    count: 4
  }
};
/**
 * Shadow animation, slide with a shadow between actived targets.
 */
export const Shadow = {
  args:{
    animation: 'shadow',
    count: 4
  }
};