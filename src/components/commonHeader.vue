<template>
  <div class="container">
    <div class="content">
      <div class="logo-box fl"><router-link to="/"><img :src="logo" class="logo" alt=""/></router-link></div>
      <div class="nav fl">
        <router-link to="/"  exact active-class="active">首页</router-link>
        <router-link to="/download" active-class="active">下载</router-link>
        <span @click="!showApply">应用</span>
        <a href="https://www.baidu.com" target="_blank">推广盈利</a>
        <router-link to="/help" active-class="active">帮助</router-link>
      </div>
      <div class="btn-box fr" v-show="false">
        <button type="button" class="btn-login"><router-link to="/login">登录</router-link></button>
      </div>
      <div class="user-info-box fr">
        <img :src="require('@/assets/images/360-icon.png')" alt="" class="user-head" @click="goPerson">
        <span class="user-name" @click="goPerson">18702604270</span>
        <img :src="icon_direction" alt="" class="down" @click="userInfoSelectHandle">
      </div>
      <div class="select-box" v-show="stateUserInfoSelect">
        <p class="item" @click="changeUserInfoWindowState">个人信息</p>
        <p class="item"><router-link to="/setPass">修改密码</router-link></p>
        <p class="item">退出</p>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState, mapMutations} from 'vuex'
  export default {
    name: "commonHeader",
    data(){
      return {
        logo:require("@/assets/images/logo.png"),
        showApply:false,
        stateUserInfoSelect:false,
        icon_direction:require("@/assets/images/down.png"),
      }
    },
    computed:{
      ...mapState({
        UserInfoWindow:'UserInfoWindow',
      })
    },
    methods:{
      userInfoSelectHandle(){
        this.stateUserInfoSelect = !this.stateUserInfoSelect;
        if(this.stateUserInfoSelect){
            this.icon_direction = require("@/assets/images/up.png");
        }else{
            this.icon_direction = require("@/assets/images/down.png");
        }
      },
      ...mapMutations({
        changeUserInfoWindowState:'changeUserInfoWindowState'
      }),
      //跳转个人中心
      goPerson(){
        this.$router.push({
          path:'/media'
        })
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .container
    width 100%
    height 0.8rem
    font-size 0.16rem
    background rgba(255, 255, 255, 1)
    box-shadow 0 2px 10px 0 rgba(240, 245, 243, 0.35)
    border-bottom  1px solid #ececec
    .content
      position relative
      width 12rem
      height 0.8rem
      line-height 0.8rem
      margin 0 auto
      .logo-box
        height 0.8rem
        .logo
          width 1.16rem
          height 0.32rem
          margin-top 0.24rem
      .nav
        margin-left 1.2rem
        a,span
          font-size 0.16rem
          color #475766
          margin-right 0.81rem
          cursor pointer
        .active
          color #177FE6
      .btn-box
        .btn-login
          width 0.88rem
          height 0.4rem
          background rgba(23,127,230,1)
          border 1px solid rgba(23,127,230,1)
          border-radius 2px
          cursor pointer
          a
            color white
            font-size 0.16rem
      .user-info-box
        display flex
        align-items center
        height 0.8rem
        cursor pointer
        color #475766
        .user-head
          width 0.24rem
          height 0.24rem
          border-radius 100%
        .user-name
          font-size 0.15rem
        .down
          width 0.1rem
          height 0.05rem
          margin-bottom 0.05rem
          margin-left 0.1rem
      .select-box
          position absolute
          z-index 10
          width 1.5rem
          height 1.35rem
          background-color white
          top 0.6rem
          right 0
          .item
            font-size 0.16rem
            font-weight 500
            margin-left 0.32rem
            color #475766
            line-height 0.38rem
            cursor pointer
</style>
