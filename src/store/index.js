import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    status: '',
    token: localStorage.getItem('token') || '',
    drawer: null,
    user: {}
  },
  mutations: {
    auth_request (state) {
      state.status = 'loading'
    },
    auth_success (state, token, user) {
      state.status = 'success'
      state.token = token
      state.user = user
    },
    auth_error (state) {
      state.status = 'error'
    },
    logout (state) {
      state.status = ''
      state.token = ''
    },
    toggle_drawer (state) {
      state.drawer = !state.drawer
    }
  },
  actions: {
    login ({ commit }, user) {
      return new Promise((resolve, reject) => {
        commit('auth_request')
        axios({
          url: 'http://localhost:3000/login',
          data: user,
          method: 'POST'
        })
          .then(resp => {
            const token = resp.data.token
            const user = resp.data.user
            localStorage.setItem('token', token)
            axios.defaults.headers.common['Authorization'] = token
            commit('auth_success', token, user)
            resolve(resp)
          })
          .catch(err => {
            commit('auth_error')
            localStorage.removeItem('token')
            reject(err)
          })
      })
    },
    register ({ commit }, user) {
      return new Promise((resolve, reject) => {
        // commit('auth_request')
        //  user is?
        // name: this.name,
        // email: this.email,
        // password: this.password,
        // is_admin: this.is_admin
        axios({
          url: 'http://localhost:3000/auth/register',
          data: user,
          method: 'POST'
        })
          .then(resp => {
            console.log('register')
            console.log(resp)
            // const token = resp.data.token
            // const user = resp.data.user
            // localStorage.setItem('token', token)
            // axios.defaults.headers.common['Authorization'] = token
            // commit('auth_success', token, user)
            // resolve(resp)
          })
          .catch(err => {
            commit('auth_error', err)
            // localStorage.removeItem('token')
            reject(err)
          })
      })
    },
    logout ({ commit }) {
      return new Promise((resolve, reject) => {
        commit('logout')
        localStorage.removeItem('token')
        delete axios.defaults.headers.common['Authorization']
        resolve()
      })
    },
    toggleDrawer ({ commit }) {
      return commit('toggle_drawer')
    }
  },
  getters: {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status,
    drawer: state => state.drawer
  }
})
