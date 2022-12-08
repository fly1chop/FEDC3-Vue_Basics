import { createStore } from 'vuex'

export default createStore({
  state() {
    return {
      msg: 'Hello Vue?!',
      count: 1
    }
  },
  getters: {
    reversedMsg(state) {
      return state.msg.split('').reverse().join('')
    }
  },
  mutations: {
    increaseCount(state) {
      state.count++
    },
    updateMsg(state, newMsg) {
      state.msg = newMsg
    }
  },
  actions: {
    // context object contains => state, getters, commit, dispatch()
    async fetchTodo({commit, state}) {
      const todo = await fetch(`https://jsonplaceholder.typicode.com/todos/${state.count}`).then(res => res.json())
      console.log(todo)
      commit('updateMsg', todo.title)
    }
  }
})
