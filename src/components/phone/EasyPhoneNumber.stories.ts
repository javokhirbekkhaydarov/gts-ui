import { ref, watch } from 'vue';
import EasyPhoneNumber from './EasyPhoneNumber.vue';
import type { Meta } from '@storybook/vue3';

const meta: Meta = {
  title: 'Components/Form/EasyPhoneNumber',
  component: EasyPhoneNumber,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'large'],
    },
    locale: {
      control: { type: 'select' },
      options: ['ru', 'uz', 'en'],
    },
  }
};

export default meta;

const Template = (args) => ({
  components: { EasyPhoneNumber },

  setup() {
    const model = ref()

    watch(model, (val) => {
      console.log(val)
    })
    return { model, args };
  },
  template: `
  {{model}}
    <EasyPhoneNumber v-bind="args" v-model="model"/>
  `,
});

export const Default = Template.bind({});
Default.args = {
  // Add default args here if needed
};
