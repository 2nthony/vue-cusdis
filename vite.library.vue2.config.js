import { defineConfig } from 'vite'
import path from 'path'
import { buildOptions } from './vite.library.config'

buildOptions.build.lib.entry = path.resolve(__dirname, 'src', 'VueCusdisVue2')
buildOptions.build.lib.fileName = 'vue2'

export default defineConfig(buildOptions)
