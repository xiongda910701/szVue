<template>
    <div class="container">
      <div class="title"><h1>联系我们</h1></div>
      <div class="content">
        <a href="" id="bottom"></a>
        <input type="text" placeholder="您的姓名" value="">
        <input type="text" placeholder="您的手机号码" value="">
        <input type="hidden" class="warnmsg"  value="">
        <button id="button">提交</button>
      </div>
    </div>
</template>

<script>
    export default {
        name: "contactUs"
    }
</script>

<style lang="stylus" scoped>
  .container
    padding-bottom: 80px;
    background-color #f5f5f5
    .title
      text-align center
      font-size 30px
      color #4D555D
      padding-bottom 60px
      padding-top 80px
    .content
      width 1200px
      margin 0 auto
      a
        color #333
        text-decoration none
      input,button
        width 440px
        padding-left 20px
        margin auto
        display block
        height 42px
        line-height 42px
        border: none
        margin-bottom: 20px
        border-radius: 2px
        -webkit-border-radius 2px
      .warnmsg
        color #FF0000
        text-align center
        font-weight bold
      button
        width 460px
        height 46px
        background #4cb5ff
        color #fff
</style>
