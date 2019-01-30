<template>
  <div id="app">
      <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App',

  }
</script>

<style lang="stylus">
  @import "assets/style/iconfont.css"
  @import "assets/style/common.styl"
  #app
    font-family "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif
    -webkit-font-smoothing antialiased
    -moz-osx-font-smoothing grayscale
    font-size 0.16rem
</style>
