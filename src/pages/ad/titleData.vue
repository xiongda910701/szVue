<template>
  <ul class="container">
    <li class="item">
      <h4>已发布</h4>
      <span>0</span>
    </li>
    <li class="item">
      <h4>覆盖粉丝量</h4>
      <span>0</span>
    </li>
    <li class="item">
      <h4>实际阅读量</h4>
      <span>0</span>
    </li>
    <li class="item">
      <h4>实际消费</h4>
      <span>0.00</span>
    </li>
  </ul>
</template>

<script>
    export default {
        name: "titleData"
    }
</script>

<style lang="stylus" scoped>
  .container
    margin 40px 40px
    overflow hidden
    font-size 14px
    color #666
    .item
      float left
      text-align center
      width 280px
      span
        font-size 28px
        color #4cb5ff
        line-height 44px
</style>
