import Vue from 'vue'

const state = {
  email: '',
  userId: null,
  isLoggedIn: false,
  loginError: ''
}

const getters = {
  isLoggedIn: state => state.isLoggedIn,
  userId: state => state.userId,
  loginError: state => state.loginError
}

const actions = {
  async logInUser ({ commit }, payload) {
    await Vue.axios.get('/user/email/' + payload.email)
      .then((resp) => {
        let data = resp.data
        if (data && data.length) {
          if (data[0].password === payload.password) {
            payload.userId = data[0]._id
            commit('logInUser', payload)
          } else {
            commit('loginError')
          }
        }
      })
      .catch(() => {
        commit('loginError2')
      })
  }
}

const mutations = {
  logInUser (state, payload) {
    state.email = payload.email
    state.userId = payload.userId
    state.isLoggedIn = true
  },
  loginError (state) {
    state.isLoggedIn = false
    state.loginError = 'Email and/or Password is invalid. LoginFailed.'
  },
  loginError2 (state) {
    state.isLoggedIn = false
    state.loginError = 'CATCH: Email and/or Password is invalid. LoginFailed.'
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
