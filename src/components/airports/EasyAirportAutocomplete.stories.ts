import type { Meta, StoryObj } from '@storybook/vue3'
import EasyAirportAutocomplete from './EasyAirportAutocomplete.vue'

const meta = {
  title: 'Components/Autocomplete/EasyAirportAutocomplete',
  component: EasyAirportAutocomplete,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'large'],
    },
  }
} satisfies Meta<typeof EasyAirportAutocomplete>

export default meta
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Аэропорты'
  }
}
