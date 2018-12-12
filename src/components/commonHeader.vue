<template>
  <div class="container">
    <div class="content">
      <div class="logo-box fl"><img :src="logo" class="logo" alt=""/></div>
      <div class="nav fl">
        <router-link to="/"  exact active-class="active">首页</router-link>
        <router-link to="/a" active-class="active">下载</router-link>
        <router-link to="/b" active-class="active">应用</router-link>
        <router-link to="/c" active-class="active">推广盈利</router-link>
        <router-link to="/d" active-class="active">帮助</router-link>
      </div>
      <div class="login-info fr">
        <button type="button" class="btn-login" v-show="false">登录</button>
        <div class="user-info fr" v-show="true">
          <img :src="require('@/assets/images/chrome-icon.png')" alt="" class="user-head">
          <span class="user-name">18702604270</span>
          <img :src="down" alt="" class="icon-select">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import vue from 'vue'
  import Icon from 'vue2-svg-icon/Icon.vue'

  vue.component('icon', Icon);

  export default {
    name: "commonHeader",
    data(){
      return {
        logo:require("@/assets/images/logo.png"),
        up:require("@/assets/images/up.png"),
        down:require("@/assets/images/down.png"),
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .container
    width 100%
    height 0.8rem
    overflow hidden
    font-size 0.16rem
    background rgba(255, 255, 255, 1)
    box-shadow 0 2px 10px 0 rgba(240, 245, 243, 0.35)
    border-bottom  1px solid #ececec
    .content
      width 12rem
      height 0.8rem
      line-height 0.8rem
      margin 0 auto
      .logo-box
        .logo
          width 1.16rem
          height 0.32rem
          margin-top 0.24rem
      .nav
        margin-left 1.2rem
        a
          font-size 0.16rem
          color #475766
          margin-right 0.81rem
        .active
          color #177FE6
      .login-info
        .btn-login
          width 0.88rem
          height 0.4counter-increment
          color white
          font-size 0.16rem
          background rgba(23,127,230,1)
          border 1px solid rgba(23,127,230,1)
          border-radius 2px
          cursor pointer
        .user-info
          display flex
          align-items center
          .user-head
            width 0.24rem
            height 0.24rem
            border-radius 100%
            vertical-align middle
          .user-name
            font-size 0.16rem
            color #475766
          .icon-select
            display inline-block
            width 0.1rem
            height 0.05rem
            cursor pointer
            margin-left 0.05rem
            margin-bottom 0.05rem
</style>
