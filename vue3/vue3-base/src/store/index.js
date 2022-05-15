import { createStore } from 'vuex'
import userInfo from './modules/userInfo.js'
const store = createStore({
  modules: {
    userInfo
  },
  state () {
    return {
      count: 0
    }
  },
  getters: {
    countGetter (state, getter, rootState) {
      console.log(state, getter, rootState)
      return 'getter:' + state.count
    }
  },
  mutations: {
    changeCount(state, data) {
      console.log(data)
      state.count = data
    }
  },
  actions: {
    countActions ({commit}, data) {
     setTimeout(() => {
      commit('changeCount', data)
     }, 1000)
    }
  }
})

export default store