import type {StoryObj} from '@storybook/vue3';
import EasyLanguageCurrencyDropdown from "./EasyLanguageCurrencyDropdown.vue";

const meta = {
  title: 'Components/Header/EasyLanguageCurrencyDropdown',
  component: EasyLanguageCurrencyDropdown,
  tags: ['autodocs'],
  argTypes: {
    currencies: {
      control: 'object',
      description: 'Currencies',
    }
  }
}

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    currencies: [
      {
        base: 'EUR',
        ru: 'Евро',
        bool: true,
      },
      {
        base: 'UAH',
        ru: 'Гривны',
        bool: true,
      },
      {
        base: 'KZT',
        ru: 'Тенге',
        bool: true,
      },
      {
        base: 'AZN',
        ru: 'Манат',
        bool: true,
      },
      {
        base: 'HKD',
        ru: 'Гонконгские доллары',
        bool: false,
      },
      {
        base: 'UZS',
        ru: 'Узбекские сумы',
        bool: true,
      },
    ]
  }
}
