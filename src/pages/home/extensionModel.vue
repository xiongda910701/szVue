<template>
    <div class="container">
      <div class="title">两大推广模式  按需选择</div>
      <ul class="list">
        <li class="item" v-for="item in extensionModelList" :key="item.id" :style="{backgroundImage:'url(' + item.bgImg +')',backgroundRepeat:'noRepeat'}">
          <div class="item-title">{{item.title}}</div>
          <span>{{item.desc}}</span>
          <span>{{item.desc1}}</span>
          <span>{{item.desc2}}</span>
          <a class="btn-url" :href="item.url">立即推广</a>
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "ExtensionModel",
        props:["extensionModelList"]
    }
</script>

<style lang="stylus" scoped>
  .container
    width 100%
    height 416px
    padding 80px 0
    .title
      text-align center
      font-size 30px
      color #4D555D
      margin-bottom 50px
    .list
      width 1200px
      margin 0 auto
      .item
        float left;
        text-align center
        padding 61px 60px
        padding-top: 69px
        width 460px
        color #fff
        &:nth-child(1)
          margin-right 40px
        &:hover .btn-url
          border 1px solid #4cb5ff
          background-color #4cb5ff
        .item-title
          font-size 20px
          padding-bottom 20px
        span
          display block
          line-height 26px
        .btn-url
          border 1px solid #fff
          padding 5px 17px
          color #fff
          margin-top 30px
          display inline-block
          border-radius 3px
</style>
