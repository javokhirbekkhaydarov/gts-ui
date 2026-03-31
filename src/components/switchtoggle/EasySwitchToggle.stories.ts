import type {Meta, StoryObj} from '@storybook/vue3';
import EasySwitchToggle from './EasySwitchToggle.vue';

const meta = {
  title: 'Components/Tabs/EasySwitchToggle',
  component: EasySwitchToggle,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof EasySwitchToggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    options: [
      {label: 'Мои заказы', value: 'item1', constant: false},
      {label: 'Заказы контрагентов', value: 'item2', constant: false},
      {label: 'Заказы ', value: 'item3', constant: false},
    ]
  },
};

export const Disabled: Story = {
  args: {
    options: [
      {label: 'Item 1', value: 'item1', constant: false},
      {label: 'Item 2', value: 'item2', constant: true},
      {label: 'Item 3', value: 'item3', constant: true}
    ]
  },
};
