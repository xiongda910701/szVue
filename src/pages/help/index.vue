<template>
  <div class="container">
    <common-header></common-header>
    <div class="content">
      <div class="left">
        <div class="title">帮助中心</div>
        <dl>
          <dt>安装问题</dt>
            <dd>谷歌浏览器</dd>
            <dd>QQ浏览器</dd>
            <dd>2345浏览器</dd>
            <dd>猎豹浏览器</dd>
            <dd>360极速浏览器</dd>
            <dd>360安全浏览器</dd>
          <div class="divider"></div>
          <dt>常见问题</dt>
            <dd>美编插件如何工作</dd>
            <dd>插件支持的浏览器</dd>
            <dd>添加多个公众号</dd>
            <dd>样式开关显示页面</dd>
            <dd>样式是否可以编辑</dd>
            <dd>更新美编插件</dd>
          <div class="divider"></div>
          <dt>安全问题</dt>
             <dd>是否影响数据安全</dd>
             <dd>是否影响微信公众平台的自身功能</dd>
        </dl>
      </div>
      <div class="right">
        <div class="title1">如何安装神赞助手插件</div>
      </div>
    </div>
    <common-footer></common-footer>
  </div>
</template>

<script>
  import CommonHeader from '@/components/commonHeader'
  import CommonFooter from '@/components/commonFooter'

  export default {
    name: "help",
    components:{CommonHeader,CommonFooter}
  }
</script>

<style lang="stylus" scoped>
  .container
    overflow hidden
    background-color #FAFBFC
    .content
      width 12rem
      height 8rem
      margin 0.4rem  auto 1.6rem auto
      overflow hidden
      background-color white
      .left
        width 1.99rem
        height 6.92rem
        border-right 1px solid #CFDAE6
        clear both
        .title
          height 0.64rem
          line-height 0.64rem
          padding-left 0.4rem
          font-size 0.16rem
          color #475766
          border-bottom 1px solid #CFDAE6
        dl
          font-size 0.14rem
          color #475766
          .divider
            border-bottom 1px solid #CFDAE6
          dt
            position relative
            margin-top 0.2rem
            margin-bottom 0.16rem
            padding-left 0.4rem
            &:before
              content ""
              position absolute
              width 0.06rem
              height 0.06rem
              background-color #177FE6
              left 0.3rem
              top 0.03rem
          dd
            margin-bottom 0.13rem
            padding-left 0.4rem
            padding-right 0.15rem
            line-height 0.2rem
            cursor pointer
      .right
        float left
        width 10rem
</style>
