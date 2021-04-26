import { defineConfig } from 'vite'
import path from 'path'
import { buildOptions } from './vite.library.config'

buildOptions.build.lib.entry = path.resolve(__dirname, 'src', 'VueCusdisV2')
buildOptions.build.lib.fileName = 'V2'

export default defineConfig(buildOptions)
