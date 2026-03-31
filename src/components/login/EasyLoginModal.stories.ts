import type { Meta, StoryObj } from '@storybook/vue3'
import EasyLoginModal from './EasyLoginModal.vue'

const meta = {
  title: 'Components/Login/EasyLoginModal',
  component: EasyLoginModal,
  tags: ['autodocs'],
  argTypes: {},
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof EasyLoginModal>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => ({
    components: { EasyLoginModal },
    setup() {
      return { args }
    },
    template: `<EasyLoginModal />`
  }),
}
