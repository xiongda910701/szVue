import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/index'
import Download from '@/pages/download/index'
import Help from '@/pages/help/index'
import About from '@/pages/about/index'
import Login from '@/pages/login/index'
import Register from '@/pages/register/index'
import SetPassword from '@/pages/setpassword/index'
import BindPhone from '@/pages/bindPhone/index'
import Media from '@/pages/media/index'
import Material from '@/pages/material/index'


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
      path: '/help',
      name: 'help',
      component: Help
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/reg',
      name: 'register',
      component: Register
    },
    {
      path: '/setPass',
      name: 'setPassword',
      component: SetPassword
    },
    {
      path: '/bindPhone',
      name: 'bindPhone',
      component: BindPhone
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/media',
      name: 'media',
      component: Media
    },
    {

      path: '/material',
      name: 'material',
      component: Material
    }
  ]
})
