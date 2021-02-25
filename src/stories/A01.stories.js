import IconRepo from '../components/IconRepo.vue';

export default {
  title: 'Pieces/IconRepo',
  component: IconRepo,
  argTypes: {
    type: { control: { type: 'select', options: ['MDI-V5'] } }
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { IconRepo },
  template: '<IconRepo v-bind="$props" />',
});

export const MDI = Template.bind({});
MDI.args = {
  prefix: '.mdi-',
  placeStand:'mdi'
};

// export const Fontawesome = Template.bind({});
// Fontawesome.args = {
//   label: 'Fontawesome',
// };
