import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/index'
import Generalize from '@/pages/generalize/index'
import UpFans from '@/pages/upFans/index'
import MediaOrder from '@/pages/mediaOrder/index'
import Help from '@/pages/help/index'
import Login from '@/pages/login/index'
import Register from '@/pages/register/index'
import ReSetPassword from '@/pages/reSetPassword/index'
import Ad from '@/pages/ad/index'
import Media from '@/pages/media/index'
import Read from '@/pages/read/index'
import Position from '@/pages/position/index'
import Order from '@/pages/order/index'
import Person from '@/pages/person/index'

import Finance from '@/pages/finance/index'
import Charge from '@/pages/finance/children/charge'
import ChargeRecord from '@/pages/finance/children/chargeRecord'
import ExpendRecord from '@/pages/finance/children/expendRecord'
import BackRecord from '@/pages/finance/children/backRecord'
import FreezeRecord from '@/pages/finance/children/freezeRecord'
import UnfreezeRecord from '@/pages/finance/children/unfreezeRecord'




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
    {
      path: '/reset/:type',
      name: 'ReSetPassword',
      component: ReSetPassword
    },
    {
      path:'/ad',
      name:'Ad',
      component:Ad
    },
    {
      path:'/media',
      name:"Media",
      component:Media
    },
    {
      path:'/read',
      name:"Read",
      component:Read
    },
    {
      path:'/position',
      name:"Position",
      component:Position
    },
    {
      path:'/order',
      name:"Order",
      component:Order
    },
    {
      path:'/finance',
      name:"Finance",
      component:Finance,
      //redirect:'/finance/charge',
      children:[
        {
          path:'/finance/charge',
          name:"Charge",
          component:Charge,
        },
        {
          path:'/finance/chargeRecord',
          name:"ChargeRecord",
          component:ChargeRecord,
        },
        {
          path:'/finance/expendRecord',
          name:"ExpendRecord",
          component:ExpendRecord,
        },
        {
          path:'/finance/backRecord',
          name:"BackRecord",
          component:BackRecord,
        },
        {
          path:'/finance/freezeRecord',
          name:"FreezeRecord",
          component:FreezeRecord,
        },{
          path:'/finance/unfreezeRecord',
          name:"UnfreezeRecord",
          component:UnfreezeRecord,
        },
      ]
    },
    {
      path:'/person',
      name:"Person",
      component:Person
    }
  ]
})
