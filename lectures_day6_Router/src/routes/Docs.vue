<template>
  <h1 v-if="!$route.params.id">
    Docs.vue
  </h1>
  <!-- need to be explicit about where children routes go  -->
  <RouterView />
</template>

<script>
export default {
  created() {
    console.log(!this.$route.params.id)
  }
}
</script>
