import { defineConfig } from 'vite'
import path from 'path'

export const buildOptions = {
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src', 'VueCusdis'),
      name: 'VueCusdis',
      fileName: 'VueCusdis',
    },
    outDir: path.resolve(__dirname, 'dist'),
    rollupOptions: {
      external: ['vue'],
    },
  },
}

export default defineConfig(buildOptions)
