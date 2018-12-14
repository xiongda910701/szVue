<template>
  <div class="container">
    <img :src="banner" alt="banner">
    <div class="title-box">
      <p>轻松管理，高效运营</p>
      <p>不再为管理多个公众号头疼</p>
    </div>
    <div class="desc">微信公众号多账号管理、排版、编辑，各公众号扫码登录后可来回切换，无需再次扫码</div>
    <button type="button" class="btn-more">
      <span>了解更多</span>
      <i class="icon-right">&rarr;</i>
    </button>
  </div>
</template>

<script>
  export default {
    name: "banner",
    data(){
      return {
        banner:require('@/assets/images/jump@2x.png')
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .container
    width 100%
    height 8rem
    font-size 0.16rem
    position relative
    z-index 1
    img
      width 100%
      height 8rem
    .title-box
      position absolute
      left 3.57rem
      top 1.82rem
      width 6.21rem
      height 1.21rem
      p
        font-size 0.48rem
        font-family PingFang-SC-Heavy
        font-weight 800
        color rgba(255,255,255,1)
        line-height 0.75rem
    .desc
      position absolute
      top 3.97rem
      left 3.59rem
      width 4.31rem
      height 0.98rem
      font-size 0.24rem
      font-family PingFang-SC-Medium
      font-weight 500
      color rgba(255,255,255,1)
      line-height 0.36rem
    .btn-more
      position absolute
      top 5.09rem
      left 3.6rem
      width 2.8rem
      height 0.56rem
      background rgba(255,255,255,1)
      border 2px solid rgba(255,255,255,1)
      border-radius:4px
      cursor pointer
      span
        width 1.13rem
        height 0.23rem
        font-size 0.24rem
        font-family PingFang-SC-Medium
        font-weight 500
        color rgba(23,127,230,1)
      .icon-right
        display inline-block
        font-size 0.24rem
        color rgba(23,127,230,1)
        margin-left 0.15rem
</style>
