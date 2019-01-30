<template>
  <div class="container">
    <common-header></common-header>
    <div class="content">
      <h1>404</h1>
    </div>
    <common-footer style="position: fixed;bottom: 0"></common-footer>
  </div>
</template>

<script>
  import CommonHeader from '@/components/commonHeader'
  import CommonFooter from '@/components/commonFooter'
  export default {
    name: "NotFound",
    components:{ CommonHeader,CommonFooter }
  }
</script>

<style lang="stylus" scoped>
  .content
    width 12rem
    margin  0 auto
    text-align center
    line-height 2rem
    padding 1rem 0
    font-size 0.32rem
    font-weight bold
</style>
