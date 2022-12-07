<template>
  <h1>{{ msg }}</h1>
  <Hello
    @click="msg += '?!'"
    @please="msg += '~~'" />
</template>

<script>
import Hello from '~/components/Hello.vue'

export default {
  components: {
    Hello
  },
  data() {
    return {
      msg: 'Hello Vue!'
    }
  }
}
</script>
