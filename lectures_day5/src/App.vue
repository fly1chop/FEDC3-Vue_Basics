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
  methods: {
    onEdit() {
      this.isEdit = true
      this.$nextTick(() => {
        // use nextTick to pass callback to occur after next DOM update is complete
        this.$refs.editor.focus()
      })
      // setTimeout(() => {
      //   // forcing this step to call stack with setTimeout
      //   this.$refs.editor.focus()
      // })
    }
  }
}
</script>
