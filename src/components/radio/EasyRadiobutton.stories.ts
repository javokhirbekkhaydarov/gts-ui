import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import EasyRadioButton from './EasyRadioButton.vue';

const meta: Meta = {
  title: 'Components/Form/EasyRadioButton',
  component: EasyRadioButton,
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Input label',
    name: 'food',
    value: 'bar'
  }
}


export const WithText: Story = {
  args: {
    label: 'Input label',
    text: 'Lorem ipsum dolor sit amet',
    name: 'food',
    value: 'bar'
  }
}

export const Group: Story = {
  render: () => ({
    components: { EasyRadioButton },
    setup() {
      const selectedCity = ref('Paris')
      const cities = [
        { name: 'Paris', value: 'Paris' },
        { name: 'London', value: 'London' },
        { name: 'New York', value: 'New York' },
        { name: 'Tokyo', value: 'Tokyo' }
      ]
      return { selectedCity, cities }
    },
    template: `
      <div>
        <div style="margin-bottom: 10px;">Selected City: {{ selectedCity }}</div>
        <div class="flex items-center" style="gap: 20px">
          <EasyRadioButton
            v-for="city in cities"
            :key="city.value"
            v-model="selectedCity"
            :value="city.value"
            :label="city.name"
            name="city"
          />
        </div>
      </div>
    `
  })
}
