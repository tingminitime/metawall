import { createStore } from 'vuex'

const store = createStore({
  strict: process.env.NODE_ENV !== 'production',
  state() {
    return {

    }
  },
  getters: {},
  mutations: {},
  actions: {},
})

export default store