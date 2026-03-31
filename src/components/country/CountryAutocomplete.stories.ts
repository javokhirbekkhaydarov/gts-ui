import type { Meta, StoryObj } from '@storybook/vue3'
import CountryAutocomplete from './CountryAutocomplete.vue'

const meta = {
  title: 'Components/Autocomplete/CountryAutocomplete',
  component: CountryAutocomplete,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'large'],
    },
  }
} satisfies Meta<typeof CountryAutocomplete>

export default meta
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Страна',
  }
}
