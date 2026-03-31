import type { Meta, StoryObj } from '@storybook/vue3';
import EasyInputNumber from './EasyInputNumber.vue';

const meta = {
  title: 'Components/Form/EasyInputNumber',
  component: EasyInputNumber,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'large'],
    },
  },
} satisfies Meta<typeof EasyInputNumber>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Введите число',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Числовое поле',
    placeholder: 'Введите число',
  },
};

export const WithPrefixIcon: Story = {
  args: {
    label: 'Числовое поле с иконкой',
    prefixIcon: 'icon-Bold-AddUser',
    placeholder: 'Введите число',
  },
};

export const Invalid: Story = {
  args: {
    label: 'Некорректное поле',
    invalid: true,
    placeholder: 'Это поле некорректно',
  },
};

export const Small: Story = {
  args: {
    label: 'Маленькое поле',
    size: 'small',
    placeholder: 'Маленький размер',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Неактивное поле',
    disabled: true,
    placeholder: 'Неактивное поле',
  },
};

export const ReadOnly: Story = {
  args: {
    label: 'Только для чтения',
    readonly: true,
    placeholder: 'Только для чтения',
    modelValue: 42,
  },
};
