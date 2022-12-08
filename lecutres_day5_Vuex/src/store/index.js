import { reactive } from 'vue'

// vue components will render data from state
export const state = reactive({
  msg: 'Hello Vue?!',
  count: 1
})

// typically the return value of getter function is computed value
export const getters = {
  reversedMsg() {
    return state.msg.split('').reverse().join('')
  }
}

// simply mutate & manage state changes (incoming commits from actions)
export const mutations = {
  increaseCount() {
    state.count++
  },
  decreaseCount() {
    state.count--
  },
  updateMsg(newMsg) {
    state.msg = newMsg
  }
}

// vue components dispatch actions to call for state change
// communicate with async backend API and send commits for mutations
export const actions = {
  async fetchTodo(id) {
    const todo = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
                        .then(res => res.json())
    mutations.updateMsg(todo.title)
  }
}
