<template>
  <h1>{{ msg }}</h1>
  <Hello ref="hola" />
</template>

<script>
import Hello from '~/components/Hello'

export default {
  components: {
    Hello
  },
  data() {
    return {
      msg: 'Hello Vue!'
    }
  },
  mounted() {
    // To select actual DOM element from Vue component, you need to look into $el property
    // console.log(this.$refs.hola.$el)

    // When there are multiple refs in component
    console.log(this.$refs.hola.$refs.hello)
  }
}
</script>
