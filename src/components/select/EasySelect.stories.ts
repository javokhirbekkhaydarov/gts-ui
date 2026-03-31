import type {Meta, StoryObj} from '@storybook/vue3';
import EasySelect from './EasySelect.vue';

const meta = {
  title: 'Components/Form/EasySelect',
  component: EasySelect,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: {type: 'select'},
      options: ['small', 'large'],
    },
  },
} satisfies Meta<typeof EasySelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: "large",
    label: "Select label",
    options: [
      {label: 'asdfsdsdferdfgedb efgefgefg', value: 'aassd'},
      {label: 'asdf', value: 'aas3sd'},
      {label: 'asdf', value: 'aas3sdf'},
      {label: 'asdf', value: 'aas3sdg'},
      {label: 'asdf', value: 'aassdfd'}
    ]
  },
};
export const Filter: Story = {
  args: {
    size: "small",
    filter: true,
    options: [
      {label: 'asdf', value: 'aassd'},
      {label: 'asdf', value: 'aas3sd'},
      {label: 'asdf', value: 'aas3sd2'},
      {label: 'asdf', value: 'aas3sde'},
      {label: 'asdf', value: 'aassdfd'}
    ]
  },
};
