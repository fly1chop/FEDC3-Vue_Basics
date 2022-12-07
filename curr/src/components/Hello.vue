<template>
  <h1>
    {{ id }} / {{ title }} / {{ email }}
  </h1>
</template>

<script>
export default {
  props: {
    id: Number,
    title: [String, Number],
    email: {
      type: String,
      default: 'jane@abc.com'
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
