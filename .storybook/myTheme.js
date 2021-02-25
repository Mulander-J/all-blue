import { create } from '@storybook/theming/create'
export default create({
    base: 'light',

    colorPrimary: '#7436E6',
    colorSecondary: '#F6C917',

    // UI
    appBg: 'white',
    appContentBg: '#f3f3f3',
    appBorderColor: 'grey',
    appBorderRadius: 4,

    // Typography
    fontBase: '"Open Sans", sans-serif',
    fontCode: 'monospace',

    // Text colors
    textColor: 'black',
    textInverseColor: 'rgba(255,255,255,0.9)',

    // Toolbar default and active colors
    barTextColor: 'white',
    barSelectedColor: '#F6C917',
    barBg: '#7436E6',

    // Form colors
    inputBg: 'white',
    inputBorder: 'silver',
    inputTextColor: 'black',
    inputBorderRadius: 4,

    brandTitle: 'StoryBook',
    brandUrl: 'https://storybook.js.org/'
});
