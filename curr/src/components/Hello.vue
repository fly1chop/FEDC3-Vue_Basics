<template>
  <label>
    <input
      :value="message"
      @input="$emit('update', $event.target.value)" />
  </label>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped lang="scss">
$color: red;
h1 {
  color: $color;
}
</style>
