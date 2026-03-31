// src/stories/PrimeTooltip.stories.ts
import type {Meta, StoryObj} from '@storybook/vue3';
import Tooltip from 'primevue/tooltip';
import Button from 'primevue/button';

const meta: Meta = {
  title: 'PrimeVue/Tooltip',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
<h1 style="color: var(--text-brand-default); font-size: 18px;">
 The **EasyTooltip** directive provides advisory information for a component. You can use it with different positions like **\`top\`**, **\`bottom\`**, **\`left\`**, and **\`right\`**.
 </h1>
        `,
      },
    },
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => ({
    directives: {tooltip: Tooltip},
    components: {Button},
    setup() {
      return {};
    },
    template: `
      <div style="padding: 20px;display: flex; justify-content: center;">
        <Button
          v-tooltip="{value : 'dddd'}"
          severity="contrast"
        >
          Hover me
        </Button>
      </div>
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: `
<div style="padding: 20px;" >
  <Button
    v-tooltip="'Default Tooltip'"
    severity="contrast">
    Hover me
  </Button>
</div>
        `,
      },
    },
  },
};


export const AutoHide: Story = {
  render: () => ({
    directives: {tooltip: Tooltip},
    components: {Button},
    setup() {
      return {};
    },
    template: `
      <div style="padding: 20px; display: flex; justify-content: center;">
        <Button
          v-tooltip="{value: 'autoHide false', autoHide: false}"
          severity="contrast">
          Hover me
        </Button>
      </div>
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: `
<div style="padding: 20px;">
  <Button
    v-tooltip="'autoHide false'"
    severity="contrast"
    >
    Hover me
  </Button>

</div>
        `,
      },
    },
  },
};


export const Positioning: Story = {
  render: () => ({
    directives: {tooltip: Tooltip},
    components: {Button},
    setup() {
      return {};
    },
    template: `
      <div style="padding: 20px; display: flex; gap: 20px; justify-content: center">

        <Button
          severity="contrast"
          v-tooltip.bottom="'Bottom Tooltip'">
          Hover me (Bottom)
        </Button>

        <Button
          severity="contrast"
          v-tooltip.left="'Left Tooltip'">
          Hover me (Left)
        </Button>

        <Button
          severity="contrast"
          v-tooltip.top="'Top Tooltip'">
          Hover me (Top)
        </Button>

        <Button
          severity="contrast"
          v-tooltip.right="'Right Tooltip'">
          Hover me (Right)
        </Button>
      </div>
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: `
    <div style="padding: 20px; display: flex; gap: 20px;">

      <Button
        v-tooltip.bottom="'Bottom Tooltip'"
        severity="contrast">
        Hover me (Bottom)
      </Button>

      <Button
        v-tooltip.left="'Left Tooltip'"
        severity="contrast">
        Hover me (Left)
      </Button>

      <Button
        v-tooltip.right="'Right Tooltip'"
        severity="contrast">
        Hover me (Right)
      </Button>

    </div>
        `,
      },
    },
  },
};

export const Event: Story = {
  render: () => ({
    directives: {tooltip: Tooltip},
    components: {Button},
    setup() {
      return {};
    },
    template: `
      <div class="container">
        <Button
          v-tooltip.focus.top="'your text here'"
          severity="contrast">
          Hover me
        </Button>
      </div>
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: `
    <div style="padding: 20px; display:flex; justify-content:center;">
      <Button
        v-tooltip="'autoHide false'"
        severity="contrast">
        Hover me
      </Button>
    </div>
        `,
      },
    },
  },
};



export const Custom: Story = {
  render: () => ({
    directives: {tooltip: Tooltip},
    components: {Button},
    setup() {
      return {};
    },
    template: `
  <div class="container">
    <Button
      v-tooltip.bottom="{
                value: 'PrimeVue Rocks',
                pt: {
                    arrow: {
                        style: {
                            borderBottomColor: 'var(--background-selected-pressed)'
                        }
                    },
                    text: {
                      style : {backgroundColor: 'var(--background-selected-pressed)'}
                    }
                }
            }"
      severity="contrast"
      label="Button"
    />
  </div>
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: `
    <div style="padding: 20px; display:flex; justify-content:center;">
      <Button
            v-tooltip.bottom="{
                value: 'PrimeVue Rocks',
                pt: {
                    arrow: {
                        style: {
                            borderBottomColor: 'var(--background-selected-pressed)'
                        }
                    },
                    text: 'bg-primary font-medium'
                }
            }"
            severity="secondary"
            label="Button"
        />
    </div>
        `,
      },
    },
  },
};


