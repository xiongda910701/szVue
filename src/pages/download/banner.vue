<template>
  <div class="container">
    <img :src="banner" alt="" class="banner">
    <div class="content">
      <div class="img-gif">
        <img :src="require('@/assets/images/nodepad.png')" alt="" class="img1">
        <!--<img :src="require('@/assets/images/bannerCss.gif')" alt="" class="img2">-->
      </div>
      <div class="title">让公众号运营更简单高效</div>
      <div class="desc">美编，为新媒体而生</div>
      <a @click="scrollTop('content')" class="btn-more">
        <span>立即下载</span>
        <i class="el-icon-download"></i>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "banner",
    data() {
      return {
        banner: require('@/assets/images/downloadbanner.png')
      }
    },
    methods: {
      scrollTop(element) {
        document.querySelector("#" + element).scrollIntoView(true);
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .container
    position relative
    width 100%
    height 6rem
    margin-top 0.8rem
    color white
    z-index 10
    .banner
      position absolute
      width 100%
      height 100%
      left 0
      top 0
    .content
      padding 1.34rem 3.56rem 0 3.56rem
      font-family "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif
      position relative
      .img-gif
        position absolute
        right 3.56rem
        top 0.8rem
        width 7.55rem
        height 4.49rem
        .img1, .img2
          width 7.55rem
          height 4.49rem
      .title
        font-size 0.48rem
        font-weight 800
        line-height 1.0rem

      .desc
        font-family "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif
        font-size 0.24rem
        font-weight 500
      .btn-more
        display block
        margin-top 1rem
        width 3rem
        height 0.8rem
        line-height 0.8rem
        background rgba(255, 255, 255, 1)
        border 2px solid rgba(255, 255, 255, 1)
        border-radius 4px
        cursor pointer
        letter-spacing 0.08rem
        text-align center
        span
          width 1.13rem
          height 0.23rem
          font-size 0.24rem
          font-family PingFang-SC-Medium
          font-weight 500
          color rgba(23, 127, 230, 1)
        .el-icon-download
          display inline-block
          font-size 0.28rem
          color #177FE6
          font-weight 500
      .version-desc
        font-size 0.16rem
        margin-top 0.19rem
</style>
