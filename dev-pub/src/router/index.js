import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: require('../components/Hello.vue')
    },
    {
      path: '/pub',
      name: 'Pub',
      component: require('../components/Publication.vue')
    },
    {
      path: '/ithappened',
      name: 'ItHappened',
      component: require('../components/ItHappened.vue')
    },
    {
      path: '/wesolved',
      name: 'WeSolved',
      component: require('../components/WeSolved.vue')
    },
    {
      path: '/webuilt',
      name: 'WeBuilt',
      component: require('../components/WeBuilt.vue')
    },
    {
      path: '/faq',
      name: 'Faq',
      component: require('../components/Faq.vue')
    },
    {
      path: '/subscribe',
      name: 'Subscribe',
      component: require('../components/Subscribe.vue')
    }
  ]
})
