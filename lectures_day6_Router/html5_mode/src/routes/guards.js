import router from './index'
import store from '~/store'

// beforeEach() is called globally; meaning its callback will be executed before any (regardless of where) routing call
/*
accepts 3 params:
 to => target route location
 from => current route location
 next (optional) => the return keyword for target route
*/
router.beforeEach(to => {
  console.log(store)
  
  if(to.meta.requiresAuth && !store.state.user.isLoggedIn) {
    return {
      path: '/login',
      query: { redirect: to.fullPath }
    }
  }
})
