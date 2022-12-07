<template>
  <h1>{{ msg }}</h1>
  <h1>{{ count }}</h1>
  <Hello />
</template>

<script>
import Hello from '~/components/Hello'
import sampleMixin from '~/mixins/sample'

export default {
  components: {
    Hello
  },
  mixins: [sampleMixin],
  data() {
    return {
      isEdit: false,
      msg: 'Hello Vue!'
    }
  }
}
</script>
