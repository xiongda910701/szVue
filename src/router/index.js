import Vue from 'vue'
import Router from 'vue-router'
const Home = resolve => require(['@/pages/home/index'], resolve);
const Download = resolve => require(['@/pages/download/index'], resolve);
const Help = resolve => require(['@/pages/help/index'], resolve);
const About = resolve => require(['@/pages/about/index'], resolve);
const Login = resolve => require(['@/pages/login/index'], resolve);
const Register = resolve => require(['@/pages/register/index'], resolve);
const SetPassword = resolve => require(['@/pages/setpassword/index'], resolve);
const CreateAccount = resolve => require(['@/pages/createAccount/index'], resolve);
const BindSelect = resolve => require(['@/pages/bindselect/index'], resolve);
const BindAccount = resolve => require(['@/pages/bindAccount/index'], resolve);
const Media = resolve => require(['@/pages/media/index'], resolve);
const Material = resolve => require(['@/pages/material/index'], resolve);
const MaterialPicture = resolve => require(['@/pages/material/children/picList'], resolve);
const MaterialVideo = resolve => require(['@/pages/material/children/videoList'], resolve);
const MaterialStyle = resolve => require(['@/pages/material/children/styleList'], resolve);
const MaterialArticle = resolve => require(['@/pages/material/children/articleList'], resolve);
const Hot = resolve => require(['@/pages/hot/index'], resolve);
const SouGou = resolve => require(['@/pages/hot/children/sougou'], resolve);
const WeiBo = resolve => require(['@/pages/hot/children/weibo'], resolve);
const BaiDu = resolve => require(['@/pages/hot/children/baidu'], resolve);



const Style = resolve => require(['@/pages/style/index'], resolve);
const Person = resolve => require(['@/pages/person/index'], resolve);
const Contact = resolve => require(['@/pages/contact/index'], resolve);
const Protocol = resolve => require(['@/pages/protocol/index'], resolve);
const FeedBack = resolve => require(['@/pages/feedback/index'], resolve);
const Install = resolve => require(['@/pages/install/index'], resolve);
const NotFound = resolve => require(['@/pages/404/index'], resolve);


Vue.use(Router);


export default new Router({
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
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
      path: '/createAccount',
      name: 'createAccount',
      component: CreateAccount
    },
    {
      path: '/bindSelect',
      name: 'bindSelect',
      component: BindSelect
    },
    {
      path: '/bindAccount',
      name: 'bindAccount',
      component: BindAccount
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
      redirect:'/material/picture',
      component: Material,
      children:[
        {
          path:'picture',
          name:'picList',
          component: MaterialPicture,
        },
        {
          path:'video',
          name:'videoList',
          component: MaterialVideo,
        },
        {
          path:'style',
          name:'styleList',
          component: MaterialStyle,
        },
        {
          path:'article',
          name:'articleList',
          component: MaterialArticle,
        }
      ]
    },
    {
      path: '/style',
      name: 'Style',
      component: Style,
    },
    {
      path: '/person',
      name: 'person',
      component: Person,
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
    },
    {
      path: '/protocol',
      name: 'protocol',
      component: Protocol,
    },
    {
      path: '/feedback',
      name: 'feedback',
      component: FeedBack,
    },
    {
      path: '/install',
      name: 'install',
      component: Install,
    },
    {
      path: '/hot',
      name: 'hot',
      component: Hot,
      redirect:'/hot/sougou',
      children:[
        {
          path:'sougou',
          name:'sougou',
          component: SouGou,
        },
        {
          path:'weibo',
          name:'weibo',
          component: WeiBo,
        },
        {
          path:'baidu',
          name:'baidu',
          component: BaiDu,
        }
      ]
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound,
    }
  ]
})
