<template>
  <Hello
    v-bind="post"
    long-prop-name="this is using kebab-case" />
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
