import {getMediaInfoApi} from '@/request/api'
import { Message } from 'element-ui'
import router from '@/router/index'
const state = {
  isLogin:false,
  mediaInfo: {},
};

// getters
const getters = {

};

// actions
const actions = {
  //获取媒体用户信息函数
  getMediaInfo({commit}){
    let token = localStorage.getItem("accessToken");
    if(token){
      getMediaInfoApi({token:token}).then((res)=>{
        console.log(res);
        if(res.errcode===1){
          commit({
            type:'setMediaInfo',
            data:res.data
          })
        }else if(res.errcode===101){
          localStorage.removeItem("accessToken");
          this.checkLoginState();
          router.push({path:'/'});
        }else{
          Message.error(res.errmsg);
        }
      })
    }else{
      //router.push({path:'/login'});
    }
  },
  //修改用户信息函数
  changeMediaInfo({commit,state},params){
    editMediaInfoApi(params).then(res=>{
      if(res.errcode===1){
        commit({type:'changeMediaInfo',data:params})
      }else{
        Message.error(res.errmsg);
      }
    })
  },
};

// mutations
const mutations = {
    setMediaInfo(state,payload){
      state.mediaInfo = payload.data;
      state.isLogin = true;
    },
  //编辑用户信息函数
  changeMediaInfo(state,payload){
      state.mediaInfo.imgUrl = payload.data.imgUrl;
      state.mediaInfo.phone = payload.data.phone;
      state.mediaInfo.nc = payload.data.nc;
  },
  //修改登录状态
  checkLoginState(state){
    state.isLogin = !state.isLogin;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
