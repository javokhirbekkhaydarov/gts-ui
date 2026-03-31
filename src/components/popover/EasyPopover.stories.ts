import type { Meta, StoryObj } from '@storybook/vue3'
import EasyPopover from './EasyPopover.vue'
import EasyButton from '../button/EasyButton.vue'

const meta = {
  title: 'Components/EasyPopover',
  component: EasyPopover,
  tags: ['autodocs'],
} satisfies Meta<typeof EasyPopover>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => ({
    components: { EasyButton, EasyPopover },
    setup() {
      return { args }
    },
    template: `
      <div style="padding: 100px; display: flex; justify-content: center;">
        <EasyPopover>
          <template #trigger>
            <EasyButton label="Наведите на меня" severity="primary" />
          </template>

          <div style="padding: 8px;">
            Это содержимое всплывающего окна
          </div>
        </EasyPopover>
      </div>
    `,
  }),
  args: {},
  parameters: {
    docs: {
      source: {
        code: `
<template>
  <EasyPopover>
    <template #trigger>
      <EasyButton label="Наведите на меня" severity="primary" />
    </template>

    <div style="padding: 8px;">
      Это содержимое всплывающего окна
    </div>
  </EasyPopover>
</template>
        `,
      },
    },
  },
}

export const WithCustomContent: Story = {
  render: (args) => ({
    components: { EasyButton, EasyPopover },
    setup() {
      return { args }
    },
    template: `
      <div style="padding: 100px; display: flex; justify-content: center;">
        <EasyPopover>
          <template #trigger>
            <EasyButton label="Информация" severity="secondary" outlined />
          </template>

          <div style="max-width: 250px;">
            <h3 style="margin-top: 0; margin-bottom: 8px;">Заголовок</h3>
            <p style="margin: 0;">Здесь может быть размещена дополнительная информация, подсказки или инструкции для пользователя.</p>
          </div>
        </EasyPopover>
      </div>
    `,
  }),
  args: {},
  parameters: {
    docs: {
      source: {
        code: `
<template>
  <EasyPopover>
    <template #trigger>
      <EasyButton label="Информация" severity="secondary" outlined />
    </template>

    <div style="max-width: 250px;">
      <h3 style="margin-top: 0; margin-bottom: 8px;">Заголовок</h3>
      <p style="margin: 0;">Здесь может быть размещена дополнительная информация, подсказки или инструкции для пользователя.</p>
    </div>
  </EasyPopover>
</template>
        `,
      },
    },
  },
}

export const WithIcon: Story = {
  render: (args) => ({
    components: { EasyButton, EasyPopover },
    setup() {
      return { args }
    },
    template: `
      <div style="padding: 100px; display: flex; justify-content: center;">
        <EasyPopover>
          <template #trigger>
            <span style="cursor: pointer; display: inline-flex; align-items: center;">
              Текст с подсказкой
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-left: 4px;">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="16" x2="12" y2="12"></line>
                <line x1="12" y1="8" x2="12.01" y2="8"></line>
              </svg>
            </span>
          </template>

          <div style="padding: 8px;">
            Дополнительная информация
          </div>
        </EasyPopover>
      </div>
    `,
  }),
  args: {},
  parameters: {
    docs: {
      source: {
        code: `
<template>
  <EasyPopover>
    <template #trigger>
      <span style="cursor: pointer; display: inline-flex; align-items: center;">
        Текст с подсказкой
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-left: 4px;">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="16" x2="12" y2="12"></line>
          <line x1="12" y1="8" x2="12.01" y2="8"></line>
        </svg>
      </span>
    </template>

    <div style="padding: 8px;">
      Дополнительная информация
    </div>
  </EasyPopover>
</template>
        `,
      },
    },
  },
}
