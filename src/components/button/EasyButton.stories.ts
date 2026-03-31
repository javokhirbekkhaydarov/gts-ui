import type { Meta, StoryObj } from '@storybook/vue3';
import EasyButton from './EasyButton.vue';

const meta = {
  title: 'Components/EasyButton',
  component: EasyButton,
  tags: ['autodocs'],
  argTypes: {
    severity: {
      control: { type: 'select' },
      options: ['default', 'secondary', 'info', 'help', 'danger']
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'xl', 'xxl']
    },
    outlined: {
      control: 'boolean'
    },
    raised: {
      control: 'boolean'
    }
  }
} satisfies Meta<typeof EasyButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Button',
  }
};

export const AllSizes: Story = {
  render: () => ({
    components: { EasyButton },
    template: `
      <div class="flex" style="gap: 16px;">
        <EasyButton label="Small" size="sm" />
        <EasyButton label="Medium" size="md" />
        <EasyButton label="Large" size="lg" />
        <EasyButton label="Extra Large" size="xl" />
        <EasyButton label="Double Extra Large" size="xxl" />
      </div>
    `
  })
};

export const AllSeverities: Story = {
  render: () => ({
    components: { EasyButton },
    template: `
      <div class="flex" style="gap: 16px; flex-wrap: wrap">
        <EasyButton label="Default" />
        <EasyButton label="Secondary" severity="secondary" />
        <EasyButton label="Info Button" severity="info" />
        <EasyButton label="Help" severity="help" />
        <EasyButton label="Danger" severity="danger" />
      </div>
    `
  })
};

export const AllStates: Story = {
  render: () => ({
    components: { EasyButton },
    template: `
      <div class="flex" style="gap: 16px; flex-wrap: wrap">
        <EasyButton label="Outlined" outlined />
        <EasyButton label="Disabled" disabled />
        <EasyButton label="Plain button" plain />
      </div>
    `
  })
};

export const WithIcon: Story = {
  render: () => ({
    components: { EasyButton },
    template: `
      <div class="flex" style="gap: 16px; flex-wrap: wrap">
        <EasyButton label="Add user" icon="icon-Bold-AddUser" />
        <EasyButton label="Left icon" outlined icon="icon-Outline-Arrow-Left2" />
        <EasyButton label="Right icon" outlined icon="icon-Outline-Arrow-Right2" icon-pos="right" />
      </div>
    `
  })
};
