import type { Meta, StoryObj } from '@storybook/vue3';
import EasyBackground from './EasyBackground.vue';

const meta = {
  title: 'Components/EasyBackground',
  component: EasyBackground,
  tags: ['autodocs'],
  argTypes: {
    routePath: {
      control: 'text',
      description: 'Путь маршрута для отслеживания изменений и перегенерации фона',
    }
  },
} satisfies Meta<typeof EasyBackground>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    routePath: '/home'
  },
  render: (args) => ({
    components: { EasyBackground },
    setup() {
      return { args };
    },
    template: `
      <div style="width: 100%; height: 100vh; position: relative;">
        <EasyBackground v-bind="args" />
        <div style="position: relative; z-index: 1; padding: 20px;">
          <h1>Контент поверх фона</h1>
          <p>Этот текст находится поверх динамического фона</p>
        </div>
      </div>
    `,
  }),
};
