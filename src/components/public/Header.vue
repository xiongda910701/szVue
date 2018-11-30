<template>
    <div class="container">
      <div class="content">
        <div class="logo-box">
          <router-link to="/"><img src="@/assets/images/Logo2.png" class="logo" alt="logo"></router-link>
          <img src="@/assets/images/line.png" class="line" alt="line">
          <span class="text">新媒体广告平台</span>
        </div>
        <ul class="nav-box">
          <li class="item"
              v-for="item in routeConfig"
              :class="item.isActive?'active':''"
              :key="item.id"
              :data-to="item.path"
              @click="goPage"
          >
            {{item.text}}
          </li>
        </ul>
        <div class="loginInfo-box">
            <router-link to="/login" class="btn-login">登录</router-link>
            <router-link to="/register" class="btn-register">注册</router-link>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Header",
        data(){
          return {
            routeConfig:[
                          {id:1,path:"/",text:"首页",isActive:true},
                          {id:2,path:"/generalize",text:"微信推广",isActive:false},
                          {id:3,path:"/upFans",text:"公众号涨粉",isActive:false},
                          {id:4,path:"/mediaOrder",text:"媒体接单",isActive:false},
                          {id:5,path:"/help",text:"帮助中心",isActive:false}
                       ]
          }
        },
      methods:{
          //定义获取当前页面函数
          getCurrentPage(){
            let url = window.location.hash;
            let page = url.substr(1);
            let data = this.routeConfig;
            data.forEach((item,index)=>{
              item.isActive= false;
              if(item.path==page){
                  data[index].isActive=true
              }
            });
            this.routeConfig=data;
          },
          //定义点击跳转事件
          goPage(event){
            let page=event.currentTarget.getAttribute("data-to");
            this.$router.push({path: page});
          }
      },
      mounted() {
          this.getCurrentPage();
      }
    }
</script>

<style lang="stylus" scoped>
  .container
    width 100%
    background-color rgba(256,256,256,.98)
    position fixed
    top 0
    z-index 100
    .content
      width 1200px
      padding 19.5px 0
      margin 0 auto
      overflow hidden
      .logo-box,.nav-box,.loginInfo-box
        float left
      .logo-box
        display flex
        align-items center
        height 43px
        font-size 14px
        color #666
        .logo
            width 144px
            height 43px
        .line
          margin 0 10px
      .nav-box
        padding-left 30px
        font-size 16px
        height 43px
        line-height 43px
        color #666
        .item
          float left
          padding 0 30px
          cursor pointer
          &.active
            color #4cb5ff
      .loginInfo-box
        float right
        height 43px
        line-height 43px
        a
          line-height 30px
          padding 0 19px
          font-size 16px
          border 1px solid #4cb5ff
          color #4cb5ff
          display inline-block
        .btn-login:hover
           background-color #4cb5ff
           color white
        .btn-register
           background-color #4cb5ff
           color white

</style>
