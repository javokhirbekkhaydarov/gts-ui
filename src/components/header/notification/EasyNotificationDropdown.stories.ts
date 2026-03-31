import type {StoryObj} from '@storybook/vue3';
import EasyNotificationDropdown from "./EasyNotificationDropdown.vue";

const meta = {
  title: 'Components/Header/EasyNotificationDropdown',
  component: EasyNotificationDropdown,
  tags: ['autodocs']
}

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {}
