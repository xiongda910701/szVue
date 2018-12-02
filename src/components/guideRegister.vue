<template>
    <div class="container">
      <img :src="guideRegisterData.imgPath" alt="" class="bg-img">
      <div class="content">
        <div class="Login_slogan">注册神赞新媒体广告平台账号</div>
        <div class="Login_box">
          <a class="ridiu2" :href="item.url" v-for="item in guideRegisterData.btnList">{{item.text}}</a>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "GuideRegister",
        props:["guideRegisterData"]
    }
</script>

<style lang="stylus" scoped>
  .container
     position relative
     overflow hidden
     .bg-img
        position absolute
        top 0
        left 0
        bottom 0
        right 0
        z-index -100
        width 100%
        height 100%
     .content
        width 100%
        text-align center
        color #fff
        padding 80px 0
        .Login_slogan
          font-size 30px
        .Login_box
          margin-top 10px
          a
            padding 14px 31px
            color #fff
            background-color #4cb5ff
            font-size 18px
            line-height 28px
            display inline-block
            margin 10px 5px
</style>
