import type { Meta, StoryObj } from '@storybook/vue3';
import EasyConfirmModal from './EasyConfirmModal.vue';
import EasyButton from '../button/EasyButton.vue';

const meta: Meta = {
  title: 'Components/Modals/EasyConfirmModal',
  component: EasyConfirmModal,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'The title displayed in the modal header.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '""' },
      },
    },
    text: {
      control: 'text',
      description: 'The text displayed in the modal body.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '""' },
      },
    },
    confirmButtonText: {
      control: 'text',
      description: 'Text for the confirm button.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '"Confirm"' },
      },
    },
    type: {
      control: 'select',
      options: ['warning', 'success', 'danger'],
      description: 'The type of the modal (warning, success, danger).',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'warning' },
      },
    },
    cancelButtonText: {
      control: 'text',
      description: 'Text for the cancel button.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '"Cancel"' },
      },
    }
  },
} satisfies Meta<typeof EasyConfirmModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    title: 'Confirm Action',
    text: 'Are you sure you want to proceed with this action?',
    model: false,
    confirmButtonText: 'Confirm',
    cancelButtonText: 'Cancel',
    type: 'warning',
  },
  render: (args) => ({
    components: { EasyConfirmModal, EasyButton },
    setup() {
      return { args };
    },
    template: `
      <div>
        <EasyButton @click="args.model = true">Open Confirm Modal</EasyButton>
        <EasyConfirmModal v-bind="args" v-model="args.model" @confirm="onConfirm" @cancel="onCancel">
        </EasyConfirmModal>
      </div>
    `,
    methods: {
      onConfirm() {
        console.log('Confirmed!');
      },
      onCancel() {
        console.log('Cancelled!');
      },
    },
  }),
};

export const CustomButtons: Story = {
  args: {
    title: 'Delete Item',
    text: 'Are you sure you want to delete this item? This action cannot be undone.',
    model: false,
    confirmButtonText: 'Delete',
    cancelButtonText: 'Keep',
    type: 'danger',
  },
  render: (args) => ({
    components: { EasyConfirmModal, EasyButton },
    setup() {
      return { args };
    },
    template: `
      <div>
        <EasyButton @click="args.model = true">Delete Item</EasyButton>
        <EasyConfirmModal v-bind="args" v-model="args.model" @confirm="onConfirm" @cancel="onCancel">
        </EasyConfirmModal>
      </div>
    `,
    methods: {
      onConfirm() {
        console.log('Delete confirmed!');
      },
      onCancel() {
        console.log('Delete cancelled!');
      },
    },
  }),
};
