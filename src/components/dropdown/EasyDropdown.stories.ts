import type {Meta, StoryObj} from '@storybook/vue3';
import EasyDropdown from "./EasyDropdown.vue";
import EasyButton from "../button/EasyButton.vue";
import { computed, ref } from 'vue';
import Listbox from 'primevue/listbox';
const meta = {
  title: 'Components/EasyDropdown',
  component: EasyDropdown,
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof EasyDropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { EasyButton, EasyDropdown, Listbox },
    setup() {
      const options = computed(() => {
        return [
          { label: 'Не выбрано', value: null },
          { label: '15 дней', value: 15 },
          { label: '30 дней', value: 30 },
          { label: '60 дней', value: 60 },
          { label: '90 дней', value: 90 },
          { label: '180 дней', value: 180 },
          { label: '360 дней', value: 360 },
        ]
      })
      const selectedPolis = ref(null)
      return { args, options, selectedPolis };
    },
    template: `
      <EasyDropdown class="mb-30">
        <template #trigger>
          <EasyButton label="Dropdown" size="mini" severity="secondary" outlined />
        </template>

        <Listbox v-model="selectedPolis" :options="options" optionLabel="label" class="w-full" />
      </EasyDropdown>
      <br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br />
    `,
  }),
  args: {
  },
};
