<template>
  <Hello
    v-bind="post" />
</template>

<script>
import Hello from '~/components/Hello.vue'

export default {
  components: {
    Hello
  },
  data() {
    return {
      post: {
        id: 1,
        title: 'Hello Vue!',
        email: 'hello@gmail.com'
      }
    }
  }
}
</script>
