import type {Meta, StoryObj} from '@storybook/vue3';
import EasyTextarea from './EasyTextarea.vue';

const meta: Meta = {
  title: "Components/Form/EasyTextarea",
  component: EasyTextarea,
  tags: ["autodocs"],
  argTypes: {
    invalid: {
      control: "boolean",
      description: "Determines if the textarea is in an error state.",
      table: {
        defaultValue: {summary: 'false'},
      },
    },
    placeholder: {
      control: "text",
      description: "Displays a placeholder inside the textarea.",
      table: {
        defaultValue: {
          summary: "Enter ...",
          detail: "Enter your text ...",
        },
      },
    },
    disabled: {
      control: "boolean",
      description: "Disables the textarea, preventing user interaction.",
      table: {
        defaultValue: {
          summary: "false"
        }
      }
    },
    rows: {
      control: "number",
      description: "Sets the number of visible rows in the textarea.",
      table: {
        defaultValue: {
          summary: "20"
        }
      },
    },
    readonly: {
      control: "boolean",
      description: "Change field to read-only",
      table: {
        defaultValue: {
          summary: "false"
        }
      }
    }
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    placeholder: "Enter long form text here",
  }
};

export const Invalid: Story = {
  args: {
    placeholder: 'Enter long form text here',
    invalid: true,
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Enter long form text here',
    disabled: true,
  },
};

export const Rows: Story = {
  args: {
    placeholder: "Enter long form text here",
    rows: 10,
  },
};

export const Readonly: Story = {
  args: {
    placeholder: "Enter long form text here",
    readonly: true
  },
};
