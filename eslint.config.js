import pluginVue from 'eslint-plugin-vue'
import vueTsEslintConfig from '@vue/eslint-config-typescript'

export default [
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}'],
  },

  {
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'],
  },

  {
    name: 'app/style',
    rules: {
      // quotes: ['error', 'single'],
      'vue/html-quotes': ['error', 'double'],
      // semi: ['error', 'never']
    }
  },

  ...pluginVue.configs['flat/essential'],
  ...vueTsEslintConfig(),
]
