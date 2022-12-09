const SET_COUNT = 'SET_COUNT'

const test = {
  state: () => ({
    count: 1
  }),
  mutations: {
    [SET_COUNT]: (state: any) => {
      state.count += 1
    }
  }
}

export default test