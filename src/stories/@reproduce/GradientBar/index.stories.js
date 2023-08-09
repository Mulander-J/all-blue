import GradientBar from './GradientBar.svelte';

export default {
  // title: 'ScrollBar/GradientBar',
  component: GradientBar,
  // tags: ['autodocs'],
  argTypes: {
    isReverse: {
      control: { 
        type: 'boolean',
      },
    },
    isHorizontal: { 
      control: { 
        type: 'boolean',
      },
    },
    repeat: { 
      control: { 
        type: 'number',
        min: 0,
        max: 100,
        step: 10,
      }
    },
  },
};


export const Preview = {
  args: {
    repeat: 20,
    isHorizontal: false,
    isReverse: true
  },
};