<template>
  <div class="container">
    <div class="title">海量优质媒体资源</div>
    <div class="wrapper">
      <tab></tab>
      <div class="media-content"></div>
    </div>
  </div>
</template>

<script>
  import Tab from './tab'
  export default {
    name: "MediaResource",
    components:{Tab}
  }
</script>

<style lang="stylus" scoped>
  .container
    background #f5f5f5
    padding 80px 0
    height 770px
    .title
      text-align center
      font-size 30px
      color #4D555D
      margin-bottom 50px
    .wrapper
      width 1200px
      height 50px
      margin 0 auto
      .media-content
        width 1200px
        height 628px
        background-color white
</style>
