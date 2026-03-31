import type { Meta, StoryObj } from '@storybook/vue3'
import CurrencyAutocomplete from './CurrencyAutocomplete.vue'

const meta = {
  title: 'Components/Autocomplete/CurrencyAutocomplete',
  component: CurrencyAutocomplete,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'large'],
    },
  }
} satisfies Meta<typeof CurrencyAutocomplete>

export default meta
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Валюта',
  }
}
