import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/index'
import A from '@/pages/A/index'
import B from '@/pages/B/index'
import C from '@/pages/C/index'
import D from '@/pages/D/index'



Vue.use(Router);


export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/a',
      name: 'a',
      component: A
    },
    {
      path: '/b',
      name: 'b',
      component: B
    },
    {
      path: '/c',
      name: 'c',
      component: C
    },
    {
      path: '/d',
      name: 'd',
      component: D
    }
  ]
})
