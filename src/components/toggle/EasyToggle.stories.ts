import type {Meta, StoryObj} from '@storybook/vue3';
import InputSwitch from 'primevue/inputswitch';
import { ref } from 'vue';

const meta = {
  title: 'Primevue/InputSwitch',
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof InputSwitch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {},
  render: (args) => ({
    components: { InputSwitch },
    setup() {
      const bool = ref(false);
      return { bool, args };
    },
    template: '<InputSwitch v-bind="args" v-model="bool" />'
  })
};
