import type { Meta, StoryObj } from '@storybook/vue3'
import EasyAirlineAutocomplete from './EasyAirlineAutocomplete.vue'

const meta = {
  title: 'Components/Autocomplete/EasyAirlineAutocomplete',
  component: EasyAirlineAutocomplete,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'large'],
    },
  }
} satisfies Meta<typeof EasyAirlineAutocomplete>

export default meta
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Авиакомпания'
  }
}
