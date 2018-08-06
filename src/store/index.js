import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/user'
import college from './modules/college'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    college
  }
})
