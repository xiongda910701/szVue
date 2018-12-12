<template>
  <div class="container">
    <img :src="banner" alt="banner">
    <div class="title-box">
      <p>轻松管理，高效运营</p>
      <p>不再为管理多个公众号头疼</p>
    </div>
    <div class="desc">微信公众号多账号管理、排版、编辑，各公众号扫码登录后可来回切换，无需再次扫码</div>
  </div>
</template>

<script>
  export default {
    name: "banner",
    data(){
      return {
        banner:require('@/assets/images/Banner3.png')
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .container
    width 100%
    height 4.87rem
    font-size 0.16rem
    background-color cadetblue
    position relative
    img
      width 100%
      height 8rem
</style>
