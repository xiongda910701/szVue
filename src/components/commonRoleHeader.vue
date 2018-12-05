<template>
  <div class="container">
    <div class="content">
      <div class="logo-box">
        <router-link to="/"><img src="@/assets/images/Logo2.png" class="logo" alt="logo"></router-link>
        <img src="@/assets/images/line.png" class="line" alt="line">
        <span class="text">{{userInfo.type==0?'广告主':'媒体主'}}</span>
      </div>
      <ul class="list">
        <li class="item">可用余额：<span class="text-num">0.00</span>元</li>
        <li class="item"><router-link to="#"><span class="text-num" v-if="!userInfo.type">[充值]</span></router-link></li>
        <li class="item">冻结余额：<span class="text-num">0.00</span>元</li>
        <li class="item">公告：(<router-link to="#"><span class="text-num">0</span></router-link>)</li>
        <li class="item">账号：<span class="text-num">18702604270</span><span class="text-exit">[退出]</span></li>
        <li class="item"><router-link to="#" class="text-extend">推广流程</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    name: "CommonRoleHeader",
    computed:{
      ...mapState({
        userInfo:'userInfo'
      })
    },
    mounted() {
      //console.log(userInfo);
    }
  }
</script>

<style lang="stylus" scoped>
  .container
    width 100%
    background-color rgba(256, 256, 256, .98)
    .content
      width 1200px
      padding 19.5px 0
      margin 0 auto
      overflow hidden
      .logo-box, .nav-box, .loginInfo-box
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
      .list
        float right
        height 43px
        line-height 43px
        font-size 14px
        color #666
        .item
          float left
          margin-right 5px
          .text-num
            color #4cb5ff
            margin 0 2px
          .text-extend
            color #32c5d2
            font-weight bold
          .text-exit
            color #666
            margin-left 3px
            cursor pointer
</style>
