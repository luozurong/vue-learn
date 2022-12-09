import { createStore } from "vuex"

import { SET_USER_INFO } from './mutations-types'

import test from './modules/test'

const store = createStore({
  state: {
    userInfo: {}
  },
  getters: {},
  mutations: {
    [SET_USER_INFO]: (state, data) => {
      state.userInfo = Object.assign(state.userInfo, data)
    }
  },
  actions: {

  },
  modules: {
    test: test
  }
})