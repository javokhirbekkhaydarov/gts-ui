import type { Meta, StoryObj } from '@storybook/vue3';
import EasyPagination from './EasyPagination.vue';

const meta: Meta = {
  title: 'Components/EasyPagination',
  component: EasyPagination,
  tags: ['autodocs'],
  args: {
    totalRecords: 120,
    perPageOptions: [10, 20, 30, 40, 50],
    selectPlaceholder: 'Показать по'
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  argTypes: {
    totalRecords: {
      control: 'number',
      description: 'Общее количество записей',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 120 },
      },
    },
    perPageOptions: {
      control: 'object',
      description: 'Массив значений для выпадающего списка количества записей на странице',
      table: {
        type: { summary: 'number[]' },
        defaultValue: { summary: '[10, 20, 30, 40, 50]' },
      },
    },
    selectPlaceholder: {
      control: 'text',
      description: 'Текст перед значением в селекте',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Показать по' },
      },
    },
    page: {
      control: 'number',
      description: 'Текущая страница',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 1 },
      },
    },
    perPage: {
      control: 'number',
      description: 'Количество записей на странице',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 10 },
      },
    }
  }
};

export const CustomPerPage: Story = {
  args: {
    totalRecords: 200,
    perPageOptions: [5, 15, 25, 50, 100],
    selectPlaceholder: 'Show'
  }
};

export const SmallDataset: Story = {
  args: {
    totalRecords: 25,
    perPageOptions: [5, 10, 15],
    selectPlaceholder: 'Display'
  }
};
