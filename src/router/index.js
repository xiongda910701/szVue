import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/index'
import Generalize from '@/pages/generalize/index'
import UpFans from '@/pages/upFans/index'
import MediaOrder from '@/pages/mediaOrder/index'
import Help from '@/pages/help/index'
import Login from '@/pages/login/index'
import Register from '@/pages/register/index'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/generalize',
      name: 'Generalize',
      component: Generalize
    },
    {
      path: '/upFans',
      name: 'UpFans',
      component: UpFans
    },
    {
      path: '/mediaOrder',
      name: 'MediaOrder',
      component: MediaOrder
    },
    {
      path: '/help',
      name: 'Help',
      component: Help
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
  ]
})
