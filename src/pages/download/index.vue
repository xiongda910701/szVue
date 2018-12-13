<template>
  <div class="container">
    <common-header></common-header>
    <div class="content">
      <div class="title">插件浏览器支持</div>
      <div class="sub-title">为便于您正常使用插件的功能，请使用以下浏览器，并根据浏览器下载对应版本</div>
      <download-tab></download-tab>
    </div>
    <common-footer></common-footer>
  </div>
</template>

<script>
  import CommonHeader from '@/components/commonHeader'
  import DownloadTab from './downloadTab'
  import CommonFooter from '@/components/commonFooter'

  export default {
    name: "download",
    components:{CommonHeader,DownloadTab,CommonFooter}
  }
</script>

<style lang="stylus" scoped>
  .container
    .content
      width 19.2rem
      padding 1.6rem 0
      background rgba(250,251,252,1)
      text-align center
      .title
        font-size 0.48rem
        font-family PingFang-SC-Bold
        font-weight bold
        color rgba(71,87,102,1)
      .sub-title
        font-size 0.2rem
        font-family PingFang-SC-Medium
        font-weight 500
        color rgba(122,138,153,1)
        margin-top 0.39rem
</style>
