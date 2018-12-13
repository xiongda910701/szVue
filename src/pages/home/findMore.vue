<template>
    <div class="container">
      <div class="content">
        <div class="title">发现更多功能</div>
        <div class="desc">从热点捕捉、素材编辑到精美样式，为日常运营提供便捷，同时还能高效变现</div>
        <ul class="list">
          <li class="item">
            <div class="list-title">
              <i class="iconfont icon-quanwangrewen1"></i>热文中心
            </div>
            <div class="list-desc">实时动态更新微信搜狗、微博、百度的热门内容，为你提供编辑所需素材</div>
          </li>
          <li class="item item-mid">
            <div class="list-title">
              <i class="iconfont icon-tuijianyangshi1"></i>样式中心
            </div>
            <div class="list-desc">精品样式库，各种分类样式达上百种，持续更新中</div>
          </li>
          <li class="item">
            <div class="list-title">
              <i class="iconfont icon-gengkuaijiedan2"></i>高效变现
            </div>
            <div class="list-desc">抢单更快捷，页面一键跳转，高价订单优先抢，变现效率更高</div>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
    export default {
        name: "findMore"
    }
</script>

<style lang="stylus" scoped>
  .container
    width 19.2rem
    background:rgba(250,251,252,1);
    padding  1.6rem 0 1.58rem 0;
    .content
      width 12rem
      margin 0 auto
      text-align center
      .title
        /*font-size 0.48rem*/
        font-size 48px
        font-family PingFang-SC-Bold
        font-weight 500
        color rgba(71,87,102,1)
        overflow hidden
      .desc
        font-size 0.2rem
        margin-top 0.39rem
        font-family PingFang-SC-Medium
        font-weight 500
        color rgba(122,138,153,1)
      .list
        overflow hidden
        margin-top 0.5rem
        .item
          float left
          .list-title
            height 0.6rem
            line-height 0.6rem
            font-size 0.18rem
            color #475766
            text-align left
            i
              font-size 0.24rem
              color #177fe6
              margin-right 0.1rem
              vertical-align middle
          .list-desc
            width 3.19rem
            font-size 0.16rem
            font-family PingFang-SC-Medium
            font-weight 500
            color rgba(122,138,153,1)
            line-height 0.25rem
            text-align left
        .item-mid
          margin 0 1.2rem 0 1.2rem
</style>
