import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'search',
      component: () => import('./views/Search.vue')
    },
    {
      path: '/results',
      name: 'results',
      component: () => import('./views/Results.vue')
    }
  ]
})
