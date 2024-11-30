import {resolve} from 'path'
import {defineConfig} from 'vite'
export default defineConfig({
  base: '/landing1/',
  build: {
    outDir: resolve(__dirname, 'dist'),
  },
  css: {
    preprocessorOptions: {

      scss: {
        api: 'modern-compiler', // or "modern", "legacy"
        importers: [
          // ...
        ],
      },
    },
  },
})
