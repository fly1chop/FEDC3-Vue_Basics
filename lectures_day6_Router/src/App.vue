<template>
  <RouterLink to="/">
    Home
  </RouterLink>
  <RouterLink to="/about">
    About
  </RouterLink>
  <button @click="$router.push('/')">
    Home
  </button>
  <button @click="$router.push('/about')">
    About
  </button>
  <RouterView />
</template>

<script>


export default {
  data() {
    return {
      msg: 'Hello vue! & webpack?',
    }
  },
}
</script>
