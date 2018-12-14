<template>
  <div class="container">
    <div class="content">
      <div class="logo-box fl"><router-link to="/"><img :src="logo" class="logo" alt=""/></router-link></div>
      <div class="nav fl">
        <router-link to="/media"  exact active-class="active">媒体账号</router-link>
        <router-link to="/material" active-class="active">素材管理</router-link>
        <a href="https://www.baidu.com" target="_blank">广告接单</a>
      </div>
      <div class="user-info-box fr">
        <img :src="require('@/assets/images/360-icon.png')" alt="" class="user-head">
        <span class="user-name">18702604270</span>
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
      })
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
        a
          font-size 0.16rem
          color #475766
          margin-right 0.81rem
          cursor pointer
        .active
          color #177FE6
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
