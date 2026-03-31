import type { Preview } from '@storybook/vue3'
import { setup } from '@storybook/vue3'
import PrimeVue from 'primevue/config'
import Tooltip from 'primevue/tooltip';
import { withThemeByDataAttribute } from '@storybook/addon-themes'
import '../src/assets/main.scss'
import '../src/assets/icomoon/style.css'
import '../src/assets/preview.scss'

setup((app) => {
  app.use(PrimeVue, {
    ripple: true,
    inputStyle: 'filled',
  })

  app.directive('tooltip', Tooltip);
})

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    withThemeByDataAttribute({
      themes: {
        light: 'light-mode',
        dark: 'dark-mode',
      },
      defaultTheme: 'light',
      attributeName: 'class',
      parentSelector: 'html',
    }),
  ],
}

export default preview
