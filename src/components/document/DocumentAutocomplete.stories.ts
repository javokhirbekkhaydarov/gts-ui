import type { Meta, StoryObj } from '@storybook/vue3'
import DocumentAutocomplete from './DocumentAutocomplete.vue'

const meta = {
  title: 'Components/Autocomplete/DocumentAutocomplete',
  component: DocumentAutocomplete,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'large'],
    },
  }
} satisfies Meta<typeof DocumentAutocomplete>

export default meta
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Документ',
  }
}
