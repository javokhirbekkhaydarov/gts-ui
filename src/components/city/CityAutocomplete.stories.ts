import type { Meta, StoryObj } from '@storybook/vue3'
import CityAutocomplete from './CityAutocomplete.vue'

const meta = {
  title: 'Components/Autocomplete/CityAutocomplete',
  component: CityAutocomplete,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'large'],
    },
  }
} satisfies Meta<typeof CityAutocomplete>

export default meta
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Город',
  }
}
