import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'
import type { PreRenderedAsset } from 'rollup'

export default defineConfig({
  plugins: [
    vue(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "@/assets/colors" as *;'
      }
    }
  },
  build: {
    lib: {
      entry: './src/index.ts',
      name: 'GTSUI',
      fileName: (format) => `gts-ui.${format}.js`,
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
        exports: "named",
        assetFileNames: (assetInfo: PreRenderedAsset): string => {
          if (assetInfo.name && /style\.css$/.test(assetInfo.name)) {
            return 'gts-ui.css'
          }
          return assetInfo.name || 'assets/[name][extname]'
        },
      },
    },
    cssCodeSplit: false,
    cssMinify: true,
    emptyOutDir: true,
    assetsInlineLimit: 4096, // Only inline files smaller than 4kb
  },
  optimizeDeps: {
    include: ['vue']
  }
})
