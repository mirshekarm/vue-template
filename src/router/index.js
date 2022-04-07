import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import About from '../views/about.vue'
import PageNotFound from '../views/PageNotFound.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    // beforeEnter: (to, from, next) => {
    //   console.log('home guard')
    // }
  },
  {
    path: '/about',
    component: About,
    // beforeEnter: (to, from, next) => {
    //   console.log('home guard')
    // }
  },
  {
    path: '/:catchAll(.*)*',
    name: "PageNotFound",
    component: PageNotFound,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkExactActiveClass: 'text-primary',
})

// router.beforeEach((to, from, next) => {
//   console.log('guard')
//   next()
// })

export default router
