import { createStore } from 'vuex'
import message from './message'
import count from './count'

export default createStore({
  state() {
    return {
      msg: 'Hello from Store'
    }
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    message,
    count
  }
})
