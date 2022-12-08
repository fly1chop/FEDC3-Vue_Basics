import { reactive } from 'vue'

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

export const actions = {
  async fetchTodo(id) {
    const todo = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
                        .then(res => res.json())
    mutations.updateMsg(todo.title)
  }
}
