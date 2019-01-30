import { getMaterialListApi,MaterialDeleteApi } from '@/request/api'
import { Message } from 'element-ui'

const state = {
  type:"image",
  nodata:false,
  currentPage:1,
  total:0,
  pageSizeComponent:16,
  list:[],
};

// getters
const getters = {

};

// actions
const actions = {
  //获取素材列表
  getMaterialList({commit},params){
    getMaterialListApi(params).then(res=>{
      if(res.errcode===1){
        this.commit({type:'getMaterialList', data:res});
      }else{
        Message.error(res.errmsg);
      }
    })
  },
  //删除素材
  deleteMaterial({commit},params){
    MaterialDeleteApi(params).then(res=>{
      console.log(res);
      if(res.errcode===1){
        commit({type:'handleDelete',data:res.data})
      }else{
        Message.error(res.errmsg);
      }
    })
  }
};

// mutations
const mutations = {
  getMaterialList(state,payload){
    console.log(payload);
    state.total = parseInt(payload.data.total);
    state.list = payload.data.data;
    if(parseInt(res.data.total)){
      state.nodata = false;
    }else{
      state.nodata = true;
    }
  },

  changeTab(state,type){
    state.currentPage=1;
    state.type = type;
    let token = localStorage.getItem("accessToken");
    let pageSize;
    if(type==='image'||type==='video'){
      pageSize=16;
      state.pageSizeComponent=16;
    }else if(type==='style'){
      pageSize=50;
      state.pageSizeComponent=50;
    }else{
      pageSize=10;
      state.pageSizeComponent=10;
    }
    var params = {token:token,pageIndex:this.currentPage,pageSize:pageSize,type:this.type};
    this.getMaterialList(params);
  },

  handleDelete(state,payload){
    Message({type:'success',message:'删除成功'});
    let pageSize;
    if(state.type==='image'||state.type==='video'){
      pageSize=16;
      state.pageSizeComponent=16;
    }else if(this.type==='style'){
      pageSize=50;
      state.pageSizeComponent=50;
    }else{
      pageSize=10;
      state.pageSizeComponent=10;
    }
    let token = localStorage.getItem("accessToken");
    var params = {token:token,pageIndex:state.currentPage,pageSize:pageSize,type:state.type};
    this.getMaterialList(params);
  },
  //复制事件
  copyFun(element){
    Message({type:'success',message:'复制成功!'});
    var text = document.getElementById(element);
    if(document.body.createTextRange) {
      var range = document.body.createTextRange();
      range.moveToElementText(text);
      range.select();
    } else if(window.getSelection) {
      var selection = window.getSelection();
      var range = document.createRange();
      range.selectNodeContents(text);
      selection.removeAllRanges();
      selection.addRange(range);
    } else {
      alert("none");
    }
    document.execCommand('Copy', 'false', null);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
