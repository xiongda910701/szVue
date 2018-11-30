<template>
    <div class="container">
      <div class="title">
        <h1>涨粉案例</h1>
        <span>自平台上线以来，已为众多的广告主提供高质量的微信推广，以下展示了部分客户</span>
      </div>
      <ul class="list">
        <li class="item" v-for="item in upfansCaselist">
          <img :src="item.imgPath" :alt="item.title">
          <div class="Case_text" style="bottom: -210px;">
            <div class="Case_txt">
              <div class="c-title">{{item.title}}</div>
              <div class="s-title">{{item.subTitle}}</div>
              <span>{{item.desc}}</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "upfansCase",
        props:["upfansCaselist"]
    }
</script>

<style lang="stylus" scoped>
  .container
    overflow hidden
    background-color rgb(245, 245, 245)
    .title
      text-align center
      font-size 30px
      color #4D555D
      padding 80px 0 60px 0
      h1
        font-weight normal
        font-size 100%
      span
        color #999
        padding-top 10px
        display block
        font-size 14px
    .list
      width 1200px
      margin 0 auto
      &::after
        clear: both
        font-size 0
        height 0
        visibility hidden
      .item
        float left
        width 280px
        height 410px
        margin-right 24px
        border 1px solid #e5e5e5
        position relative
        overflow hidden
        &:hover .Case_text
          position absolute
          width 100%
          left 0
          height 270px
          bottom 0
          background rgba(0,0,0,0.6)
          color #fff
        &:last-child
          margin-right 0
        img
          width 100%
          display block
        .Case_text
          position absolute
          width 100%
          left 0
          height 270px
          bottom -210px
          background rgba(0,0,0,0.6)
          color #fff
          .Case_txt
            margin 20px
            .c-title
              font-size 18px
              font-weight bold
              padding-bottom 20px
            .s-title
              font-size 16px
              padding-bottom 8px
            span
              line-height 24px

</style>
