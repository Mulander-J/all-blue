/** @type { import('@storybook/svelte').Preview } */
import { withThemeByClassName } from '@storybook/addon-styling';
import '../src/style/tailwind.css';

const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },

  decorators: [
    withThemeByClassName({
      themes: {
        light: 'light',
        dark: 'dark',
      },
      defaultTheme: 'light'
    }),
  ],
};

export default preview;
