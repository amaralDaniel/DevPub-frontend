import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Publication from '@/components/Publication'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/pub',
      name: 'Pub',
      component: Publication
    }
  ]
})
