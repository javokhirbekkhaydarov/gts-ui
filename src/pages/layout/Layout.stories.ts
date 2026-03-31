// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from '@storybook/vue3';
import PageLayout from "./LayoutPage.vue";

const meta: Meta<typeof PageLayout> = {
  component: PageLayout,
};

export default meta;
type Story = StoryObj<typeof PageLayout>;

export const Simple: Story = {
  args: {},
};
