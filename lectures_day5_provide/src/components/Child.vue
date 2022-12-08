<template>
  <h2>Child! / {{ msg.value }}</h2>
</template>

<script>
export default {
  inject: ['msg'],
  mounted() {
    console.log(this.msg) //when using computed value from inject, the value is passed as computed object. therefore, need to retrieve actual value from .value property
  }
}
</script>
