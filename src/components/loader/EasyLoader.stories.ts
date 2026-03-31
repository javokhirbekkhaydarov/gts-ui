import type { Meta, StoryObj } from '@storybook/vue3';
import EasyLoader from "./EasyLoader.vue";

const meta = {
  title: 'Components/EasyLoader',
  component: EasyLoader,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof EasyLoader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 50
  },
};
