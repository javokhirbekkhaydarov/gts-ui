import type { Meta, StoryObj } from '@storybook/vue3';
import EasyInput from './EasyInput.vue';

const meta = {
  title: 'Components/Form/EasyInput',
  component: EasyInput,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'large'],
    },
    type: {
      control: { type: 'select' },
      options: ['text', 'password', 'mask'],
    }
  },
} satisfies Meta<typeof EasyInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Enter text',
    label: 'Input label',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Input label',
    placeholder: 'Enter text',
  },
};

export const Password: Story = {
  args: {
    label: 'Password',
    type: 'password',
    placeholder: 'Enter password',
  },
};

export const WithMask: Story = {
  args: {
    label: 'Phone',
    type: 'mask',
    mask: '(999) 999-9999',
    placeholder: 'Enter phone number',
  },
};

export const Invalid: Story = {
  args: {
    label: 'Invalid input',
    invalid: true,
    placeholder: 'This input is invalid',
  },
};

export const Small: Story = {
  args: {
    label: 'Small input',
    size: 'small',
    placeholder: 'Small size',
  },
};
