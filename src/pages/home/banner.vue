<template>
  <div class="container">
    <img :src="banner" alt="banner">
    <div class="title-box">
      <p>简单、高效的公众号运营工具</p>
    </div>
    <div class="desc">多账号管理、编辑、排版、素材获取轻松完成</div>
    <div class="btn-more">
      <a @click="scrollTop('tableList')">
        <span>了解更多</span>
        <i class="iconfont icon-youjiantou"></i>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "banner",
    data(){
      return {
        banner:require('@/assets/images/jump.png')
      }
    },
    methods:{
      scrollTop(element){
        document.querySelector("#"+element).scrollIntoView(true);
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @media screen and (max-width: 768px)
    @import "./css/bannerCss/mobile.styl"
  @media screen and (min-width: 769px)
    @import "./css/bannerCss/pc.styl"
</style>
