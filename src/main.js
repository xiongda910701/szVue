import Vue from 'vue'
import App from './App'
import router from './router'
import store from '@/store/index'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/style/reset.styl'
import '@/assets/style/common.styl'
import $ from 'jquery'
import Icon from 'vue-svg-icon/Icon.vue';
Vue.component('icon', Icon);

//图片懒加载
import VueLazyLoad from 'vue-lazyload'
Vue.use(VueLazyLoad,{
  error:require('@/assets/images/error.jpg'),
  loading:require('@/assets/images/loading.gif'),
  attempt:16
});


Vue.use(ElementUi);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});

