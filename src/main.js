import { createApp, h } from 'vue'
import Cusdis from './VueCusdis'

createApp({
  render: () => {
    return h(Cusdis, {
      attrs: {
        host: 'https://cusdis.com',
        appId: '89c97d5a-a7b8-4263-84d0-345a637e9132',
        pageId: 'test',
      },
    })
  },
}).mount('#app')
