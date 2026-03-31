import type { StorybookConfig } from '@storybook/vue3-vite'

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    {
      name: '@storybook/addon-themes',
      options: {
        default: 'light'
      }
    }
  ],
  framework: {
    name: '@storybook/vue3-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  viteFinal: (config) => {
    config.optimizeDeps = {
      include: ['primevue/tooltip', 'primevue/button'],
    };
    config.base = process.env.NODE_ENV === 'production' ? '/gts-ui/' : '/'
    return config
  },
}

export default config
