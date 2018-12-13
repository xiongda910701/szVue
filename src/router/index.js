import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/index'
import Download from '@/pages/download/index'
import B from '@/pages/B/index'
import C from '@/pages/C/index'
import Help from '@/pages/help/index'



Vue.use(Router);


export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/download',
      name: 'download',
      component: Download
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
      path: '/help',
      name: 'help',
      component: Help
    }
  ]
})
