import { createRouter, createWebHistory } from 'vue-router'
import About from './About'
import NotFound from './NotFound'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/:notFound(.*)',
      component: NotFound
    }
  ]
})
