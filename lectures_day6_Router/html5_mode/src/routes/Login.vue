<template>
  <form @submit.prevent>
    <input
      v-model="userID"
      type="text"
      placeholder="Username" />
    <input
      v-model="userPW"
      type="password" 
      placeholder="Password" />
    <button @click="logIn">
      Login
    </button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      userID: '',
      userPW: ''
    }
  },
  methods: {
    logIn() {
      this.$store.dispatch('user/logIn', {
        id: this.userID,
        pw: this.userPW
      })
    }
  }
}
</script>
