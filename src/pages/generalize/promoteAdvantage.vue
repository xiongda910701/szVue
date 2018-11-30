<template>
    <div class="container">
      <div class="title">推广优势</div>
      <div class="content">
          <ul class="list">
              <li class="item" v-for="item in promoteAdvantageData.list" :key="item.id">
                <img :src="item.imgPath" class="img-icon"/>
                <div class="item-text">
                  <div class="a-title">{{item.title}}</div>
                  <div class="a-text">{{item.desc}}</div>
                </div>
              </li>
          </ul>
          <img :src="promoteAdvantageData.img" alt="" class="img">
      </div>
    </div>
</template>

<script>
    export default {
        name: "promoteAdvantage",
        props:["promoteAdvantageData"]
    }
</script>

<style lang="stylus" scoped>
  .container
    background-color #fff
    padding-top 80px
    overflow hidden
    .title
       text-align center
       font-size 30px
       color #4D555D
    .content
      width 1200px
      margin 0 auto
      padding-top 60px
      overflow hidden
      .list
        float left
        clear both
        .item
          padding 13px 0
          overflow hidden
          .img-icon
            background-repeat no-repeat
            display block
            width 48px
            height 48px
            float left
            clear both
          .item-text
            padding-left 15px
            float left
            clear right
            .a-title
              color #4cb5ff
              font-size 16px
              padding-bottom 3px
            .a-text
              color #666
              font-size 14px
      .img
         float right
</style>
