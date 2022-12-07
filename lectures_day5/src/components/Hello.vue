<template>
  <h1 ref="hello">Hello</h1>
  <h1>World</h1>
</template>

<script>
export default {
  mounted() {
    // const $h1 = document.querySelector('h1')
    // cannot use $refs to find element in created() of lifecycle because at that point, only js is initialized and not yet connected with html (template)
    const $h1 = this.$refs.hello
    console.log($h1)
  }
}
</script>

<style scoped lang="scss">
$color: red;
h1 {
  color: $color;
}
</style>