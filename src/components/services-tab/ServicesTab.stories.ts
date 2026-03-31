import type { Meta, StoryObj } from '@storybook/vue3'
import ServicesTab from './ServicesTab.vue'

const meta = {
  title: 'Components/Tabs/ServicesTab',
  component: ServicesTab,
  tags: ['autodocs'],
  argTypes: {
    locale: {
      options: ['ru', 'uz', 'en'],
    },
    modelValue: {
      control: 'select',
      options: ['insurance', 'esim', 'flight'],
    },
  },
} satisfies Meta<typeof ServicesTab>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    locale: 'ru',
    modelValue: 'insurance',
  },
}
