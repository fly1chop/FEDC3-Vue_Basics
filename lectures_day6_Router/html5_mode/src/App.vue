<template>
  <RouterLink to="/">
    Home
  </RouterLink>
  <RouterLink to="/about">
    About
  </RouterLink>
  <RouterLink
    :to="{
      name: 'docsId', 
      params: { id: '7777'}, 
      query: { name: 'Jane', age: 19, email: 'janedoe@123.com'}
    }">
    DocId
  </RouterLink>
  <button @click="$router.push({name: 'home'})">
    Home
  </button>
  <button @click="$router.push({name: 'about'})">
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
