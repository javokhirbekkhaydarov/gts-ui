import type { Meta, StoryObj } from '@storybook/vue3';
import ProfileDropdown from './ProfileDropdown.vue';
import { links, user } from '../../../constants';

const meta = {
  title: 'Components/Header/EasyProfileDropdown',
  component: ProfileDropdown,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof ProfileDropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    user,
    links
  },
};
