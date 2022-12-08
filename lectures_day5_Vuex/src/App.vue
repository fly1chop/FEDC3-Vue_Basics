<template>
  <h1>{{ msg }}</h1>
  <Hello />
  <button @click="increaseCount">
    Increase (from App.vue)
  </button>
  <World />
  <button @click="fetchTodo">
    Update Msg!!!
  </button>
</template>

<script>
import Hello from '~/components/Hello'
import World from '~/components/World'

export default {
  components: {
    Hello,
    World
  },
  data() {
    return {
      msg: 'Hello vue! & webpack?',
    }
  },
  methods: {
    increaseCount() {
      this.$store.commit('increaseCount')
    },
    fetchTodo() {
      this.$store.dispatch('fetchTodo')
    }
  }
}
</script>
