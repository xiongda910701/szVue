<template>
    <div class="container">
      <div class="content">
        <img :src="require('@/assets/images/findmore.jpg')" alt="" class="banner">
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
  @media screen and (max-width: 768px)
    @import "./css/findMoreCss/mobile.styl"
  @media screen and (min-width: 769px)
    @import "./css/findMoreCss/pc.styl"
</style>
