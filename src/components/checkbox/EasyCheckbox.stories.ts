import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import EasyCheckbox from './EasyCheckbox.vue';

const meta: Meta = {
  title: 'Components/Form/EasyCheckbox',
  component: EasyCheckbox,
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Input label',
    name: 'foo'
  }
}

export const Binary: Story = {
  args: {
    label: 'Input label',
    binary: true,
  }
}

export const WithText: Story = {
  args: {
    label: 'Input label',
    text: 'Lorem ipsum dolor sit amet',
  }
}

export const Group: Story = {
  render: () => ({
    components: { EasyCheckbox },
    setup() {
      const selectedCities = ref(['Paris'])
      const cities = [
        { name: 'Paris', value: 'Paris' },
        { name: 'London', value: 'London' },
        { name: 'New York', value: 'New York' },
        { name: 'Tokyo', value: 'Tokyo' }
      ]
      return { selectedCities, cities }
    },
    template: `
      <div>
        <div style="margin-bottom: 10px;">Selected Cities: {{ selectedCities }}</div>
        <div class="flex items-center" style="gap: 20px">
          <EasyCheckbox
            v-for="city in cities"
            :key="city.value"
            v-model="selectedCities"
            :value="city.value"
            :label="city.name"
          />
        </div>
      </div>
    `
  })
}
