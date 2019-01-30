<template>
  <div class="container">
    <common-header></common-header>
    <div class="content">
      <router-link to="/login" tag="span" class="back">返回</router-link>
      <router-link to="/bindAccount" tag="div" class="item item-first">绑定已有账号</router-link>
      <router-link to="/createAccount" tag="div" class="item">首次使用,创建账号</router-link>
    </div>
  </div>
</template>

<script>
  import CommonHeader from '@/components/commonHeader'
  export default {
    name: "bindSelect",
    components:{CommonHeader},
  }
</script>

<style lang="stylus" scoped>
  .content
    position relative
    width 6.4rem
    background-color white
    margin 2rem auto
    box-shadow 0 0.1rem 0.8rem 0 rgba(127,183,255,0.25)
    border-radius 8px
    text-align center
    padding 1.2rem 1.6rem
    box-sizing border-box
    .back
      position absolute
      top 0.3rem
      left 0.3rem
      font-size 0.16rem
      color #475766
      cursor pointer
    .item
      width 3.2rem
      height 0.72rem
      line-height 0.72rem
      background-color rgba(255,255,255,1)
      border 1px solid rgba(250, 251, 252, 1)
      box-shadow 0 0.2rem 0.2rem 0 rgba(240, 245, 243, 0.35)
      border-radius 4px
      font-size 0.24rem
      color #475766
      cursor pointer
      &:hover
        background-color #177FE6
        color white
    .item-first
      margin-bottom 0.4rem
</style>
