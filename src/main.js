import { createApp, h } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import Home from './views/index.vue'
import Foo from './views/foo.vue'

const app = createApp({
  render: () => h(App),
})

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/foo',
      component: Foo,
    },
  ],
})

app.use(router)

app.mount('#app')
