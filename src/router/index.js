import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Index',
    component: () => import(/* webpackChunkName: "Index" */ '../views/Index.vue')
  },
  {
    path: '/add-new',
    name: 'New',
    component: () => import(/* webpackChunkName: "New" */ '../views/New.vue')
  },
  {
    path: '/top',
    name: 'Top',
    component: () => import(/* webpackChunkName: "Top" */ '../views/Top.vue')
  },
  {
    path: '/post/:id',
    name: 'Post',
    component: () => import(/* webpackChunkName: "Post" */ '../views/Post.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
