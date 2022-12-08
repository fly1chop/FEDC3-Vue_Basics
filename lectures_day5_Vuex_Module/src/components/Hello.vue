<template>
  <h1>Hello.vue</h1>
  <div>{{ count }}</div>
  <button @click="increaseCount">
    +
  </button>
  <button @click="decreaseCount">
    -
  </button>
  <div>{{ message }} / {{ reversedMessage }}</div>
  <button @click="fetchTodo">
    Get Todo
  </button>
  <div>{{ msg }}</div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState(['msg']),
    ...mapState('count', [
      'count'
    ]),
    ...mapState('message', [
      'message'
    ]),
    ...mapGetters('reversedMessage', [
      'reversedMessage'
    ])
  },
  methods: {
    ...mapMutations('count', [
      'increaseCount',
      'decreaseCount'
    ]),
    ...mapActions('message', [ 
      'fetchTodo'
    ])
  }
}
</script>

<style scoped lang="scss">
$color: red;
h1 {
  color: $color;
}
</style>
