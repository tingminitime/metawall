import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    alias: '/index',
    name: 'HomePage',
    // redirect: { name: 'MainPage' },
    components: {
      default: () => import('@/views/HomePage.vue'),
    },
    children: [
      {
        path: '',
        components: {
          search: () => import('@/views/SearchPost.vue'),
        }
      },
      // 404 Not Found
      {
        path: '/:pathMatch(.*)',
        redirect: { name: 'NotFound', query: { status: 404 } }
      },
      {
        path: 'error',
        name: 'NotFound',
        components: {
          default: () => import('@/views/NotFound.vue')
        }
      }
    ]
  }
]

const scrollBehavior = (to, from, savedPosition) => {
  if (to.hash) {
    return {
      el: to.hash,
      top: 100,
      behavior: 'smooth',
    }
  } else {
    return { top: 0, behavior: 'smooth' }
  }
}

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior,
})



export default router
