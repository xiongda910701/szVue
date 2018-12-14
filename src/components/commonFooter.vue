<template>
  <div class="container">
    <div class="content">
      <ul class="list">
        <li class="item">
          <dl>
            <dt>应用</dt>
            <dd>热文中心</dd>
            <dd>样式中心</dd>
          </dl>
        </li>
        <li class="item">
          <dl>
            <dt>帮助</dt>
            <dd>安装问题</dd>
            <dd>常见问题</dd>
            <dd>安全问题</dd>
          </dl>
        </li>
        <li class="item">
          <dl>
            <dt>关于</dt>
            <dd><router-link to="/about">美编简介</router-link></dd>
            <dd><router-link to="/about">联系方式</router-link></dd>
          </dl>
        </li>
        <li class="item">
          <dl>
            <dt class="desc"><img :src="imgPath" alt=""></dt>
            <dd>关注美编助手</dd>
          </dl>
        </li>
        <li class="item">
          <dl>
            <dt class="desc"><img :src="imgPath" alt=""></dt>
            <dd>扫码联系客服</dd>
          </dl>
        </li>
        <li class="item">
          <dl>
            <dt class="desc"><img :src="imgPath" alt=""></dt>
            <dd>关注神赞</dd>
          </dl>
        </li>
      </ul>
      <div class="copyright">Copyright © 杭州神赞网络技术有限公司-美编</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "commonFooter",
    data(){
      return {
        imgPath:require('@/assets/images/qrCode.png')
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .container
    width 19.2rem
    overflow hidden
    background rgba(43,52,61,1)
    color #B8C2CC
    .content
      width 12rem
      margin 0 auto
      padding 0.54rem 0 0.31rem 0
    .list
      display flex
      flex-wrap wrap
      justify-content space-between
      .item
        width 1.8rem
        dt
          margin-bottom 0.23rem
          img
            display block
            width 0.9rem
            height 0.9rem
            background-color #ddd
        dd
          margin-bottom 0.15rem
          &:hover
            color #177fe6
            text-decoration underline
            cursor pointer
          &:hover a
            color #177fe6
          a
           color #b8c2cc
        .desc
          margin-bottom 0.08rem
    .copyright
      text-align center
      font-size 0.16rem
      font-family PingFang-SC-Medium
      margin-top 0.3rem
</style>
