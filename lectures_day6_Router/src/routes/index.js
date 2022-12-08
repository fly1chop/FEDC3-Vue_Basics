import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './Home'
import About from './About'
import Docs from './Docs'
import DocsId from './DocsId'
import NotFound from './NotFound'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/documents',
      component: Docs,
      children: [
        {
          path: ':id',
          component: DocsId
        }
      ]
    },
    {
      path: '/:notFound(.*)',
      component: NotFound
    }
  ]
})
