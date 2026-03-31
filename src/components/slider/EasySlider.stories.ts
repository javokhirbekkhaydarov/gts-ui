import type { Meta, StoryObj } from '@storybook/vue3';
import Slider from 'primevue/slider/Slider.vue';
import "../../assets/components/_easy-slider.scss";

const meta: Meta = {
  title: 'Primevue/Slider',
  component: Slider,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  argTypes: {
    modelValue: {
      control: { type: 'number' },
      description: 'The current value of the slider.',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 50 },
      },
    },
    min: {
      control: { type: 'number' },
      description: 'The minimum value of the slider.',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 0 },
      },
    },
    max: {
      control: { type: 'number' },
      description: 'The maximum value of the slider.',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 100 },
      },
    },
  },
  args: {
    modelValue: 50,
    min: 0,
    max: 100,
  },
  render: (args) => ({
    components: { Slider },
    setup() {
      return { args };
    },
    template: `
      <div>
        <Slider v-model="args.modelValue" :min="args.min" :max="args.max" />
          <p style="color: var(--text-subtle)">Value: {{ args.modelValue }}</p>
      </div>
    `,
  }),
};

export const WithSteps: Story = {
  argTypes: {
    step: {
      control: { type: 'number' },
      description: 'The step size for the slider.',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 10 },
      },
    },
  },
  args: {
    modelValue: 20,
    min: 0,
    max: 100,
    step: 10,
  },
  render: (args) => ({
    components: { Slider },
    setup() {
      return { args };
    },
    template: `
      <div>
        <Slider v-model="args.modelValue" :min="args.min" :max="args.max" :step="args.step" />
        <p style="color: var(--text-subtle)">Value: {{ args.modelValue }}</p>
      </div>
    `,
  }),
};

export const Range: Story = {
  argTypes: {
    modelValue: {
      control: { type: 'array' },
      description: 'An array representing the range of values.',
      table: {
        type: { summary: 'array' },
        defaultValue: { summary: '[20, 80]' },
      },
    },
  },
  args: {
    modelValue: [20, 80],
    min: 0,
    max: 100,
  },
  render: (args) => ({
    components: { Slider },
    setup() {
      return { args };
    },
    template: `
      <div>
        <Slider v-model="args.modelValue" :min="args.min" :max="args.max" range />
        <p style="color: var(--text-subtle)">Range: {{ args.modelValue }}</p>
      </div>
    `,
  }),
};

export const CustomTemplate: Story = {
  args: {
    modelValue: 50,
    min: 0,
    max: 100,
  },
  render: (args) => ({
    components: { Slider },
    setup() {
      return { args };
    },
    template: `
      <div style="width: 300px; margin: 0 auto;">
        <Slider v-model="args.modelValue" :min="args.min" :max="args.max" />
        <p style="color: var(--text-subtle); text-align:center;">Custom Value: <strong>{{ args.modelValue }}</strong></p>
      </div>
    `,
  }),
};



export const Disabled: Story = {
  args: {
    modelValue: 50,
    min: 0,
    max: 100,
    disabled : true
  },
  render: (args) => ({
    components: { Slider },
    setup() {
      return { args };
    },
    template: `
      <Slider
        class="disabled-sli;der"
        :class="{'disabled-range': args.disabled}"
        :disabled="args.disabled"
        v-model="args.modelValue"
        :min="args.min"
        :max="args.max"
      />
    `,
  }),
};



export const Vertical: Story = {
  args: {
    modelValue: 50,
    min: 0,
    max: 100,
    orientation : 'vertical'
  },
  render: (args) => ({
    components: { Slider },
    setup() {
      return { args };
    },
    template: `
      <div style="width: 300px; margin: 0 auto; display:flex; justify-content:center; flex-direction: column; align-items: center">
        <Slider v-model="args.modelValue" :min="args.min" :max="args.max" :orientation="args.orientation" style="height: 14rem" />
        <p style="color: var(--text-subtle); text-align:center;">Custom Value: <strong>{{ args.modelValue }}</strong></p>
      </div>
    `,
  }),
};

