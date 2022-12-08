import router from '~/routes'

export default {
  namespaced: true,
  state() {
    return {
      isLoggedIn: false,
    }
  },
  mutations: {
    updateLoginStatus(state, newStatus) {
      state.isLoggedIn = newStatus
    }
  },
  actions: {
    initialize({ commit }) {
      if(localStorage.getItem('isLoggedIn')) {
        commit('updateLoginStatus', true)
      }
    },
    logIn({ commit }, payload) {
      const { id, pw } = payload
      if(id && pw) {
        localStorage.setItem('isLoggedIn', true)
        commit('updateLoginStatus', true)
        console.log(router)
        const {redirect} = router.currentRoute.value.query
        if(redirect) {
          router.push(redirect)
        } else {
          router.push('/')
        }
      }
    },
    logOut({ commit }) {
      localStorage.removeItem('isLoggedIn')
      commit('updateLoginStatus', false)
      const {requiresAuth} = router.currentRoute.value.meta
      if(requiresAuth) {
        router.push('/')
      }
    }
  }
}
