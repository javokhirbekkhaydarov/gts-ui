import type {Meta, StoryObj} from '@storybook/vue3';
import Badge from 'primevue/badge/Badge.vue';
import "@/assets/components/_badge.scss";

const meta: Meta = {
  title: 'Components/EasyBadge',
  component: Badge,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {
  argTypes: {

    value: {
      table: {
        defaultValue: {summary: 'severity example'},
        type: {summary: "string"}
      }
    },
    severity: {
      control: 'select',
      options: ['success', 'secondary', 'info', 'warning', 'danger', 'contrast'],
      description: 'To determine the state.',
      table: {
        type: {summary: 'string'},
        defaultValue: {summary: 'success'},
      },
    },
    size: {
      control: 'select',
      options: ['large', 'xlarge', null],
      description: 'To resize',
      table: {
        type: {summary: 'string'},
        defaultValue: {summary: 'null'},
      },
    },
  },
  args: {
    value: 'Severity Example',
    severity: 'success',
    size: null
  },
  render: (args) => ({
    components: {Badge},
    setup() {
      return {args};
    },
    template: `
      <h1 style="color:var(--text-default)">It can be controlled <br> through the Prime Vue badge component </h1>
      <Badge :size="args.size" :value="args.value" :severity="args.severity"/>
    `,
  }),
};

export const Severity: Story = {
  argTypes: {
    severity: {
      control: 'select',
      options: ['success', 'secondary', 'info', 'warning', 'danger', 'contrast'],
      description: 'To determine the state.',
      table: {
        type: {summary: 'string'},
        defaultValue: {summary: 'info'},
      },
    },
  },
  args: {
    value: 'Severity Example',
    severity: 'info',
  },
  render: (args) => ({
    components: {Badge},
    setup() {
      return {args};
    },
    template: `
      <div style="display: flex; justify-content: center; gap:10px;">
        <Badge :value="'Success'" severity="success"/>
        <Badge :value="'Secondary'" severity="secondary"/>
        <Badge :value="'Info'" severity="info"/>
        <Badge :value="'Warning'" severity="warning"/>
        <Badge :value="'Danger'" severity="danger"/>
        <Badge :value="'Contrast'" severity="contrast"/>
      </div>
    `,
  }),
};


export const Sized: Story = {
  argTypes: {
    severity: {
      control: 'select',
      options: ['success', 'secondary', 'info', 'warning', 'danger', 'contrast'],
      description: 'To determine the state.',
      table: {
        type: {summary: 'string'},
        defaultValue: {summary: 'info'},
      },
    },
  },
  args: {
    value: 'size:large',
    severity: 'contrast',
    size: 'large'
  },
  render: (args) => ({
    components: {Badge},
    setup() {
      return {args};
    },
    template: `
      <Badge :value="args.value" :severity="args.severity" :size="args.size"/>
    `,
  }),
};

