<template>
  <div class="container">
    <common-header></common-header>
    <div class="content">
      <div class="fixed">
        <div class="title-box">
          <span>样式中心</span>
        </div>
        <ul class="tab-list">
          <li class="item"
              v-for="(item, index) in tabList"
              :class="currentIndex==index?'active':''"
              :key="item.id" @click="changeTab(index,item.id)"
          >
            {{item.name}}
          </li>
        </ul>
        <ul class="radio-list">
          <el-radio-group v-model="radio" @change="changeRadio">
            <el-radio :label="item.id" v-for="item in typeList" :key="item.id" class="radio">{{item.name}}</el-radio>
          </el-radio-group>
        </ul>
      </div>
      <list :styleList="styleList"  @getParams="getParams"></list>
      <div class="page-box">
          <el-pagination background @current-change="handleCurrentChange"
                         :page-size=50
                         :current-page.sync="currentPage"
                         layout="prev, pager, next, jumper"
                         :total="total"
          >
          </el-pagination>
      </div>
    </div>
    <common-footer></common-footer>
    <tool></tool>
  </div>
</template>

<script>
  import CommonHeader from '@/components/commonHeader'
  import CommonFooter from '@/components/commonFooter'
  import Tool from '@/components/tool'
  import List from './list'

 import { styleIndexApi,styleFirstTypeApi,styleSecondTypeApi,styleCollectApi,styleCancelCollectApi } from '@/request/api'
  export default {
    name: "Style",
    components: {CommonHeader,CommonFooter,List,Tool},
    data() {
      return {
        currentIndex: 0,//一级分类选中类
        currentPage:1,//定义当前页
        total:0,//定义分页总页数
        radio: "",//定义单选按钮选中id
        tabList:[],//定义一级分类数据
        typeList:[],//定义二级分类数据
        styleList:[],//定义三级分类数据
      }
    },
    methods: {
      //获取样式列表函数
      getIndexList(params){
        styleIndexApi(params).then(res=>{
          //console.log(res);
          if(res.errcode===1){
            this.tabList = res.data.dataCate;
            this.typeList = res.data.dataCateSon;
            this.styleList = res.data.dataList.data;
            this.total = parseInt(res.data.dataList.total);
            this.radio = res.data.dataCateSon[0].id;
          }else{
            this.$message.error(res.errmsg);
          }
        })
      },
      //一级分类事件函数
      firstTypeHandle(params){
        styleFirstTypeApi(params).then(res=>{
          //console.log(res);
          if(res.errcode===1){
            this.typeList = res.data.dataCateSon;
            this.styleList = res.data.dataList.data;
            this.total =parseInt(res.data.dataList.total);
            this.radio = res.data.dataCateSon[0].id;
          }else{
            this.$message.error(res.errmsg);
          }
        })
      },

      //二级分类事件函数
      secondTypeHandle(params){
        styleSecondTypeApi(params).then(res=>{
          //console.log(res);
          if(res.errcode===1){
            this.styleList = res.data.dataList.data;
            this.total =parseInt(res.data.dataList.total);
          }else{
            this.$message.error(res.errmsg);
          }
        })
      },

      //定义收藏函数
      collect(params){
        styleCollectApi(params).then(res=>{
          console.log(res);
          if(res.errcode===1){
            this.$message({
              message: '收藏成功！',
              type: 'success'
            });
            this.reFreshData();
          }else{
            this.$message.error(res.errmsg);
          }
        })
      },
      //定义取消收藏函数
      cancelCollect(params){
        styleCancelCollectApi(params).then(res=>{
          console.log(res);
          if(res.errcode===1){
            this.$message({
              message: '取消收藏成功！',
              type: 'success'
            });
            this.reFreshData();
          }else{
            this.$message.error(res.errmsg);
          }
        })
      },

      //定义获取子组件传递参数的函数
      getParams(data){
        console.log(data);
        debugger;
        let token = localStorage.getItem("accessToken");
        if(data.status===0){
          //未收藏
          let params = {token:token,id:data.id};
          this.collect(params);
        }else{
          //已收藏
          let params = {token:token,conid:data.conid};
          this.cancelCollect(params);
        }
      },

      //一级分类点击事件
      changeTab(indexValue,id) {
        this.currentIndex = indexValue;
        let token = localStorage.getItem("accessToken");
        if(token){
          var params = {token:token,pageIndex:1,pageSize:50,id:parseInt(id)};
        }else{
          var params = {pageIndex:1,pageSize:50,id:parseInt(id)};
        }
        this.currentPage =1;
        this.firstTypeHandle(params);
      },
      //二级分类点击事件
      changeRadio(){
        //console.log(this.radio);
        let id = parseInt(this.radio);
        let token = localStorage.getItem("accessToken");
        if(token){
          var params = {token:token,pageIndex:1,pageSize:50,id:parseInt(id)};
        }else{
          var params = {pageIndex:1,pageSize:50,id:parseInt(id)};
        }
        this.currentPage =1;
        this.secondTypeHandle(params);
      },
      //分页点击事件
      handleCurrentChange(currentPage){
        this.currentPage = currentPage;
        let pageIndex = currentPage;
        let id = parseInt(this.radio);
        let token = localStorage.getItem("accessToken");
        if(token){
          var params = {token:token,pageIndex:pageIndex,pageSize:50,id:parseInt(id)};
        }else{
          var params = {pageIndex:pageIndex,pageSize:50,id:id};
        }
        this.secondTypeHandle(params);
      },
      //定义收藏和取消收藏成功后刷新数据函数
      reFreshData(){
        let pageIndex = this.currentPage;
        let id = parseInt(this.radio);
        let token = localStorage.getItem("accessToken");
        if(token){
          var params = {token:token,pageIndex:pageIndex,pageSize:50,id:parseInt(id)};
        }else{
          var params = {pageIndex:pageIndex,pageSize:50,id:id};
        }
        this.secondTypeHandle(params);
      },
      //控制元素宽度
      handleElementWidth(){
        let item_content = $('.item-content');
        let children = item_content.children();
        console.log(111);
        children.css({'max-width':'3.44rem','box-sizing':'border-box'});
        let allNode = children.find('*');
        allNode.css({'max-width':'100%','box-sizing':'border-box','z-index':1});
      },
      //滚动监听事件
      handleScroll() {
        let scrollTop = $(document).scrollTop();
        if (scrollTop > 0) {
          $('.fixed').css({"position": 'fixed', 'top': '0.8rem'});
        } else {
          $('.fixed').css({"position": 'fixed', 'top': '1rem'});
        }
      }
    },
    mounted(){
      //进入页面调用获取数据函数
      let token = localStorage.getItem("accessToken");
      if(token){
        var params = {token:token,pageIndex:1, pageSize:50};
      }else{
        var params = {pageIndex:1, pageSize:50};
      }
      this.getIndexList(params);
      window.addEventListener('scroll', this.handleScroll);
    },
    updated() {
      this.handleElementWidth();
    }
  }
</script>

<style lang="stylus" scoped>
  >>>.el-radio + .el-radio
    margin-right 0.3rem
    margin-bottom 0.1rem
    margin-left 0
  >>>.el-radio
      &:first-child
        margin-right 0.3rem
  .content
    width 12rem
    margin 0.88rem auto
    background #fff
    box-shadow 0 2px 10px 0 #F0F3F5
    border-radius 4px
    box-sizing border-box
    .fixed
      position fixed
      top 1rem
      left 3.6rem
      width 12rem
      background-color white
      z-index 999
      .title-box
        font-size 0.28rem
        font-family PingFang-SC-Medium
        font-weight 500
        color #475766
        padding 0.4rem 0.4rem 0 0.4rem
      .tab-list
        display flex
        font-family PingFang-SC-Medium
        font-weight 500
        color #475766
        padding 0.4rem 0.4rem 0.33rem 0.4rem
        .item
          width 1.2rem
          height 0.4rem
          line-height 0.4rem
          font-size 0.16rem
          text-align center
          background #fff
          border 1px solid #CFDAE6
          border-radius 0 2px 2px 0
          cursor pointer
          &.active
            background-color #177fe6
            color white
          &:nth-child(1)
            border-right none
          &:nth-child(2)
            border-right none
          &:nth-child(3)
            border-right none
          &:nth-child(4)
            border-right none
      .radio-list
        padding 0 0.4rem 0.25rem 0.4rem
        border-bottom 1px solid #CFDAE6
    .page-box
      text-align right
      padding 0.3rem
    .operate-box
      display flex
      height 0.4rem
      line-height 0.4rem
      padding 0.4rem
</style>
