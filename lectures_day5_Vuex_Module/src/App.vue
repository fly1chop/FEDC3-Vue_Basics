<template>
  <h1>{{ msg }}</h1>
  <h2>{{ storeMsg }} / {{ storeMessage }}</h2>
  <Hello />
</template>

<script>
import Hello from '~/components/Hello'

export default {
  components: {
    Hello,
  },
  data() {
    return {
      msg: 'Hello from App.vue',
    }
  },
  computed: {
    storeMsg() {
      return this.$store.state.msg
    },
    storeMessage() {
      return this.$store.state.message.message //get value 'message' from module 'message' in state
    }
  }
}
</script>
