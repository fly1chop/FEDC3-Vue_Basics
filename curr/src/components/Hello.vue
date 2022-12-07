<template>
  <!-- <h1
    :class="$attrs.class"
    :style="$attrs.style">
    Hello
  </h1>
  <h2 @click="$attrs.onClick">
    Haha?!
  </h2> -->
  <h1 v-bind="$attrs">
    Hello
  </h1>
  <h2>
    Haha?!
  </h2>
</template>

<script>
export default {
  // inheritAttrs: false,
  props: {
    // style: Object
  },
  mounted() {
    // $attrs contains non-prop attributes. therefore, style prop is not included
    console.log(this.$attrs)
  }
}
</script>

<style scoped lang="scss">
$color: red;
h1 {
  color: $color;
}
</style>
