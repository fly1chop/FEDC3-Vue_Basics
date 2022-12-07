<template>
  <div>
    <h1 @click="$emit('please', 9)">
      Please
    </h1>
    <h1 @click="$emit('click')">
      Click
    </h1>
  </div>
</template>

<script>
export default {
  emits: {
    click: null,
    please: (num) => {
      if(num > 10) {
        return true
      } else {
        console.log('num is not >10')
        return false
      }
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
