<template>
  <h1>Hello</h1>
  <!-- <slot :hello="123"></slot>
  <slot name="abc" :goodbye="456"></slot>
  <slot name="xyz"></slot> -->
</template>

<script>
export default {
  created() {
    console.log('Hello Created')
  },
  unmounted() {
    console.log('Hello Unmounted')
  }
}
</script>

<style scoped lang="scss">
$color: red;
h1 {
  color: $color;
}
</style>