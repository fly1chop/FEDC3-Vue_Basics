<template>
  <div v-if="!isEdit">
    {{ msg }}
    <button @click="onEdit">Edit!</button>
  </div>
  <div v-else>
    <input
      ref="editor" 
      v-model="msg"
      @keyup.enter="isEdit = false" />
  </div>
</template>

<script>

export default {
  data() {
    return {
      isEdit: false,
      msg: 'Hello Vue!'
    }
  },
  created() {
    this.init()
    // lifecycles dont support async await, therefore need to create a method
  },
  methods: {
    async init() {
      const res = await this.$myFetch('https://jsonplaceholder.typicode.com/todos/1')
      console.log(res, 'done!')
    }
  }
}
</script>
