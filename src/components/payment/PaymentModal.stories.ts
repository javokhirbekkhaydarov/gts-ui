import type { Meta, StoryObj } from '@storybook/vue3'
import PaymentModal from './PaymentModal.vue'
import { ref } from 'vue'

const meta = {
  title: 'Components/Payment/PaymentModal',
  component: PaymentModal,
  tags: ['autodocs'],
  argTypes: {
    modelValue: {
      control: 'boolean',
      description: 'Значение для v-model, определяющее видимость модального окна'
    },
    loading: {
      control: 'boolean',
      description: 'Состояние загрузки'
    },
    id: {
      control: 'number',
      description: 'ID договора или поставщика'
    },
    type: {
      control: { type: 'radio' },
      options: ['own', 'contract'],
      description: 'Тип платежа'
    },
    index: {
      control: 'number',
      description: 'Индекс (опционально)'
    },
    name: {
      control: 'text',
      description: 'Название договора или поставщика'
    },
    description: {
      control: 'text',
      description: 'Описание'
    }
  },
  args: {
    modelValue: false,
    loading: false,
    id: '1',
    type: 'own',
    name: 'Easybooking',
    index: null,
    description: 'Билет будет выписан и вы можете его отменить или оформить возврат в станице заказов'
  },
  render: (args) => ({
    components: { PaymentModal },
    setup() {
      // Используем ref для v-model, инициализируем значением из args.modelValue
      const visible = ref(args.modelValue)
      return { args, visible }
    },
    template: `
      <div style="padding: 20px;">
        <button @click="visible = true">Открыть модальное окно</button>
        <PaymentModal
          v-model="visible"
          :loading="args.loading"
          :id="args.id"
          :type="args.type"
          :index="args.index"
          :name="args.name"
          :description="args.description"
          @ticketing="args.onTicketing"
        />
      </div>
    `
  })
} satisfies Meta<typeof PaymentModal>

export default meta
type Story = StoryObj<typeof meta>

export const Own: Story = {
  args: {
    type: 'own',
    name: 'Easybooking',
    id: '911f46c4ebfe48fda0df14d4430aaad1',
  }
}
