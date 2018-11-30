<template>
  <div class="container">
    <div class="title">{{processData.title}}</div>
    <div class="content">
      <ul class="list">
        <li class="item" v-for="item in processData.list" :key="item.id">
          <div class="Pro_Number">
            <span>{{item.id}}</span>
          </div>
          <div class="Pro_text">{{item.text}}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
    export default {
        name: "promoteProcess",
        props:["processData"]
    }
</script>

<style lang="stylus" scoped>
  .container
    background-color #ebebeb
    clear both
    overflow hidden
    .title
      padding-top 80px
      text-align center
      font-size 30px
      color #4D555D
    .content
      width 1200px
      margin 0 auto
      padding-top 50px
      padding-bottom 80px
      overflow hidden
      .list
        overflow hidden
       &::after
          clear: both
        .item
          float left
          padding 0 30px
          text-align center
          margin-left 60px
          &:first-child
            margin-left 3px
            padding 0 35px 0 0
          &:last-child
            padding-right 0
            &::after
              content ""
              clear both
              font-size 0
              height 0
              visibility hidden
              display table
          .Pro_Number
            width 64px
            height 64px
            font-size 24px
            margin 0 17px
            border-radius 50%
            -moz-border-radius 50%
            -webkit-border-radius 50%
            background-color rgba(76,181,255,0.5)
            span
              background-color #4cb5ff
              display inline-block
              font-size 32px
              text-align center
              line-height 46px
              color #fff
              width 46px
              height 46px
              border-radius 50%
              -moz-border-radius 50%
              -webkit-border-radius 50%
              margin 9px
              position relative
              &::before
                content ""
                width 154px
                height 1px
                background-color #4cb5ff
                position absolute
                top 22px
                left 55px
                display block
          .Pro_text
            padding-top 10px
            color #111
            width 98px
            font-size 12px
</style>
