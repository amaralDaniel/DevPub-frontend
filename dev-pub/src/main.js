// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store'
import Vuetify from 'vuetify'
import './styles/variables.scss'
import VeeValidate from 'vee-validate'

Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.use(Vuetify, {
  theme: {
    primary: '#8AEA92',
    secondary: '#33202A'
  }
})
Vue.use(VeeValidate)

import('../node_modules/vuetify/dist/vuetify.min.css')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  axios,
  template: '<App/>',
  components: { App }
})
