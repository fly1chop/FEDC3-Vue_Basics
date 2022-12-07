<template>
  <button @click="currentComponent = 'Hello'">Hello!</button>
  <button @click="currentComponent = 'World'">World!</button>
  <keep-alive>
    <component :is="currentComponent" />
  </keep-alive>
</template>

<script>
import Hello from '~/components/Hello'
import World from '~/components/World'

export default {
  components: {
    Hello,
    World
  },
  data() {
    return {
      msg: 'Hello Vue!',
      currentComponent: 'Hello'
    }
  },
}
</script>
