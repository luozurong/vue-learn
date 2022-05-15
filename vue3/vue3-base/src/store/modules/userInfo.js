export default {
  state: () => ({ 
    userInfo: {
      id: 0
    }
  }),
  getters: {
    userInfoGetter (state) {
      return state
    }
  },
  mutations: {
    changeUserInfo (state, data) {
      let userInfo = Object.assign(state, data)
      state.userInfo = userInfo
    }
  },
  actions: {
    userInfoAction ({commit}, data) {
      setTimeout(() => {
        commit('changeUserInfo', data)
      }, 1000)
    }
  }
}