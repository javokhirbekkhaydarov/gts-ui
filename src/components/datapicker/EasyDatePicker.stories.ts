import type {Meta, StoryObj} from '@storybook/vue3';
import EasyDatePicker from "./EasyDatePicker.vue";

const meta = {
  title: 'Components/Form/EasyDatePicker',
  component: EasyDatePicker,
  tags: ['autodocs'],
  argTypes: {
    selectionMode: {
      options: ['multiple', 'range', 'single'],
    },
    size: {
      control: {type: 'select'},
      options: ['small', 'large'],
    },
  },
} satisfies Meta<typeof EasyDatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    selectionMode: 'single',
    placeholder: 'Select date',
  },
};
export const Range: Story = {
  args: {
    selectionMode: 'range'
  },
};
export const Multiple: Story = {
  args: {
    selectionMode: 'multiple'
  },
};

