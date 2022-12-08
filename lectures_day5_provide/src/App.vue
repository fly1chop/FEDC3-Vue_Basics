<template>
  <h1 @click="msg += '!!'">
    {{ msg }}
  </h1>
  <Parent />
</template>

<script>
import Parent from '~/components/Parent'
import { computed } from 'vue'

export default {
  components: {
    Parent,
  },
  provide() {
    return {
      msg: computed(() => this.msg) //use computed method to return reactive ref object for the returned value from getter
    }
  },
  data() {
    return {
      msg: 'Hello vue!',
    }
  }
}
</script>
