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
    // GitHub Pages'da sayt /gts-ui/ subpath'da turadi, Vercel'da esa root'da.
    // STORYBOOK_BASE bo'lsa – o'sha ishlatiladi (Vercel'da "/" qilib beriladi).
    config.base =
      process.env.STORYBOOK_BASE ||
      (process.env.VERCEL ? '/' : process.env.NODE_ENV === 'production' ? '/gts-ui/' : '/')
    return config
  },
}

export default config
