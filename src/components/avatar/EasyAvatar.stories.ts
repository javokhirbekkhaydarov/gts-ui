import type {Meta, StoryObj} from '@storybook/vue3';
import EasyAvatar from "./EasyAvatar.vue";
const meta = {
  title: 'Components/EasyAvatar',
  component: EasyAvatar,
  tags: ['autodocs'],
  argTypes: {

  },
  args: {

  }
} satisfies Meta<typeof EasyAvatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    initials: 'VA',
    bgColor: 'var(--navy-100)',
    borderColor: 'var(--navy-50)',
    textColor: 'var(--navy-800)',
    bordered: false
  },
};

export const Online: Story = {
  args: {
    online: true,
    bgColor: 'var(--navy-100)',
    borderColor: 'var(--navy-50)',
    textColor: 'var(--navy-800)',
    bordered: false
  },
};

export const Initials: Story = {
  args: {
    initials: 'VA',
    bordered: true,
    borderColor: '#F4EBFF',
    bgColor: '#F9F5FF',
    textColor: '#7F56D9'
  },
};
