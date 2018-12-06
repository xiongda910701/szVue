<template>
  <div class="container">
    <router-link to="/finance/charge" class="active">充值</router-link>
    <router-link to="/finance/chargeRecord">充值记录</router-link>
    <router-link to="/finance/expendRecord">消费记录</router-link>
    <router-link to="/finance/backRecord">退款记录</router-link>
    <router-link to="/finance/freezeRecord">冻结记录</router-link>
    <router-link to="/finance/unfreezeRecord">解冻记录</router-link>
    <form>
      <input type="text" class="search-word" placeholder="请输入您的流水号">
      <button type="button" class="btn-search">搜索</button>
    </form>
  </div>
</template>

<script>
  export default {
    name: "tabComponent",
    data(){
      return {
        index:1
      }
    },
  }
</script>

<style lang="stylus" scoped>
  .container
    padding 50px 30px
    clear both
    a
      float left
      margin-right 8px
      display inline
      text-align center
      font-size 14px
      line-height 34px
      color #666
      border 1px solid #eef1f5
      cursor pointer
      padding 0 25px
      border-radius 3px
    .router-link-active
      color #fff
      background-color #4cb5ff
      border-color #4cb5ff
    &.active
      olor #fff
      background-color #4cb5ff
      border-color #4cb5ff
    form
      float right
      .search-word
        float left
        width 200px
        font-size 14px
        line-height 34px
        color #666
        border 1px solid #eef1f5
        padding-left 16px
        border-top-left-radius 3px
        border-bottom-left-radius 3px
        border-right 0
      .btn-search
        padding 0 16px
        float left
        font-size 14px
        line-height 36px
        color #666
        background-color #FFF
        text-align center
        border-top-right-radius 3px
        border-bottom-right-radius 3px
        border 1px solid #eef1f5
        cursor pointer
</style>
