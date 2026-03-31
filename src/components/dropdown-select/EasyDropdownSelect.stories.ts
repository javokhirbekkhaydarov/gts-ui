import type {Meta, StoryObj} from '@storybook/vue3';
import EasyDropdownSelect from "./EasyDropdownSelect.vue";
import EasyButton from "../button/EasyButton.vue";
import { computed, ref } from 'vue';

const meta = {
  title: 'Components/EasyDropdownSelect',
  component: EasyDropdownSelect,
  tags: ['autodocs'],
  argTypes: {
    options: {
      description: 'Массив опций для выбора',
      control: 'object',
    },
  },
} satisfies Meta<typeof EasyDropdownSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { EasyButton, EasyDropdownSelect },
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
      
      return { args, options };
    },
    template: `
      <EasyDropdownSelect :options="options" class="mb-30">
        <template #trigger>
          <EasyButton label="Выберите период" size="mini" severity="secondary" outlined />
        </template>
      </EasyDropdownSelect>
      <br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br />
    `,
  }),
  args: {
    options: [
      { label: 'Не выбрано', value: null },
      { label: '15 дней', value: 15 },
      { label: '30 дней', value: 30 },
      { label: '60 дней', value: 60 },
      { label: '90 дней', value: 90 },
      { label: '180 дней', value: 180 },
      { label: '360 дней', value: 360 },
    ],
  },
};
