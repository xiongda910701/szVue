<template>
    <div class="container" v-show="false">
      <div class="content">
        <i class="el-icon-success"></i>
        <p>登录成功!</p>
        <iframe :src="url" v-show="false"></iframe>
      </div>
    </div>
</template>

<script>
  export default {
    name: "loginBox",
    props:['url'],
  }
</script>

<style lang="stylus" scoped>
  .container
    position fixed
    display flex
    justify-content center
    align-items center
    top 0
    bottom 0
    left 0
    right 0
    background-color rgba(0,0,0,0.5)
    z-index 10000
    .content
      display flex
      justify-content center
      align-items center
      width 1.5rem
      height 1rem
      background-color white
      border-radius 4px
      i
        font-size 0.24rem
        color #5daf34
      p
        margin-left 0.07rem
</style>
