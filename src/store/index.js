import vue from 'vue'
import vuex from 'vuex'
vue.use(vuex);


const store = new vuex.Store({
  state: {
    isLogin:true,
    userInfo:{name:"18702604270",type:0},
    windowState: false,
    sideBarState:false,
    list:{}
  },
  getters: {},
  actions: {
    getHomeData({commit}){
      getData('post','http://127.0.0.1:7001/list',{name:'xd'},function (data) {
        commit({
          type:'getHomeData',
          data:data
        })
      });
    }
  },
  mutations: {
    changeWindowState(state) {
      state.windowState = !state.windowState;
    },
    changeSideBarState(state) {
      state.sideBarState = !state.sideBarState;
    },
    getHomeData(state,payload){
      state.list=payload.data;
    }
  }
});

export default store;
