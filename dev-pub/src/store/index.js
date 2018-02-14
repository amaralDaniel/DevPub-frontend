import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const state = new Vuex.Store({
  plugins: [createPersistedState()]
})

export default ({
  state
})
