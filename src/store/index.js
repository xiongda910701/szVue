import vue from 'vue'
import vuex from 'vuex'
vue.use(vuex);

import login from './modules/login.js'
import register from './modules/register.js'
import material from './modules/material.js'

const store = new vuex.Store({
  modules: {
    material,login
  },
});

export default store;
