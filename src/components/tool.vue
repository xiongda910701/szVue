<template>
  <div class="container">
    <div class="box">
      <div class="card">
        <img :src="require('@/assets/images/QQ_Icon.png')"/>
        <span class="card-content">广告主咨询</span>
      </div>
    </div>
    <div class="box">
      <div class="card">
         <img :src="require('@/assets/images/QQ_Icon.png')"/>
         <span class="card-content">媒体主咨询</span>
      </div>
    </div>
    <div class="box">
      <div class="card">
         <img :src="require('@/assets/images/Tel_Icon.png')"/>
         <span class="card-content">0571-87881699</span>
      </div>
    </div>
    <div class="box">
      <div class="card">
         <img :src="require('@/assets/images/Return_Icon.png')"/>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "tool"
  }
</script>

<style lang="stylus" scoped>
  .container
    position fixed
    right 0
    bottom 15%
    z-index 9999
    .box
      display inline-block
      float left
      clear both
      line-height 54px
      border-bottom 1px solid rgba(76,181,255,0.96)
      .card
        width 54px
        height 54px
        background-color #4cb5ff
        transition all .3s ease-in-out .1s
        cursor pointer
        font-size 18px
        font-family Helvetica
        display block
        overflow hidden
        color #333
        text-decoration none
        img
          display block
          float left
          width 54px
          height 54px
        .card-content
          float left
          color #fff
          font-family 'Droid Sans',sans-serif
          font-size 18px
          white-space nowrap
          padding-right 8px
</style>
