<template>
  <h1>Hello Vue!</h1>
  <Btn @click="reverseMsg" />
  <Hello
    :message="msg"
    :name="123" />
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
  },
  methods: {
    reverseMsg() {
      this.msg = this.msg.split('').reverse().join('')
    }
  }
}
</script>
