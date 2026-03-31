import type {Meta, StoryObj} from '@storybook/vue3';
import EasyMultiSelect from "./EasyMultiSelect.vue";

const meta = {
  title: 'Components/Form/EasyMultiSelect',
  component: EasyMultiSelect,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: {type: 'select'},
      options: ['small', 'large'],
    },
    display: {
      control: {type: 'select'},
      options: ['comma', 'chip'],
    },
  },
} satisfies Meta<typeof EasyMultiSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: "large",
    label: "Select label",
    options: [
      {label: 'Item 1', value: 'item1'},
      {label: 'Item 2', value: 'item2'},
      {label: 'Item 3', value: 'item3'},
      {label: 'Item 4', value: 'item4'},
      {label: 'Item 5', value: 'item5'}
    ]
  },
};
export const Filter: Story = {
  args: {
    size: "large",
    filter: true,
    options: [
      {label: 'Item 1', value: 'item1'},
      {label: 'Item 2', value: 'item2'},
      {label: 'Item 3', value: 'item3'},
      {label: 'Item 4', value: 'item4'},
      {label: 'Item 5', value: 'item5'}
    ]
  },
};
