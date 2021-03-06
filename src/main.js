// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import router from './router'
import VueChartkick from 'vue-chartkick'
import Chart from 'chart.js'
import axios from 'axios'

// vuex store
import store from './store'

Vue.config.productionTip = false

Vue.use(Vuetify)
Vue.use(VueChartkick, {adapter: Chart})

Vue.axios = Vue.prototype.$http = axios.create({
  baseURL: 'https://peaceful-anchorage-63008.herokuapp.com:8081/api'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
