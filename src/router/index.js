import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Index',
    meta: { title: 'Home' },
    component: () => import(/* webpackChunkName: "Index" */ '../views/Index.vue')
  },
  {
    path: '/add-new',
    name: 'New',
    meta: { title: 'Add New' },
    component: () => import(/* webpackChunkName: "New" */ '../views/New.vue')
  },
  {
    path: '/top',
    name: 'Top',
    meta: { title: 'Top Ratings' },
    component: () => import(/* webpackChunkName: "Top" */ '../views/Top.vue')
  },
  {
    path: '/post/:id',
    name: 'Post',
    meta: { title: 'Single Post' },
    component: () => import(/* webpackChunkName: "Post" */ '../views/Post.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.params.title ? to.params.title : to.meta.title;
  next();
});

export default router
