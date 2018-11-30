<template>
  <div class="container">
    <div class="f-FunsAdv">
      <div class="Offline" style="background: #f5f5f5;">
        <div class="title">{{offlinelist.title}}</div>
        <div class="f-List" v-for="item in offlinelist.list" :key="item.id">
          <div class="list_items">
            <div class="f-ListText" :class="item.id/2==1?'fr':'fl'">
              <div class="f-title">{{item.name}}</div>
              <div class="f-Text">{{item.desc}}</div>
              <ul class="ofh">
                <li class="ofh-li">
                  <div class="f-label">快速涨粉</div>
                  <div class="f-num">{{item.dayNum}}粉丝/天</div>
                </li>
                <li class="ofh-li">
                  <div class="f-label">粉丝留存率</div>
                  <div class="f-num">{{item.keepRate}}左右</div>
                </li>
                <li class="ofh-li">
                  <div class="f-label">涨粉价格</div>
                  <div class="f-num">{{item.price}}元/粉丝</div>
                </li>
              </ul>
              <a class="btn">立即涨粉</a>
            </div>
            <div class="f-ListPic" :class="item.id/2==1?'fl':'fr'">
              <img :src="item.imgPath" class="FunsImg" alt="">
            </div>
          </div>
        </div>
      </div>


      <div class="online" style="background: #ebebeb;">
        <div class="title">{{onlinelist.title}}</div>
        <div class="f-List" v-for="item in onlinelist.list" :key="item.id">
          <div class="list_items">
            <div class="f-ListText" :class="item.id/2==1?'fr':'fl'">
              <div class="f-title">{{item.name}}</div>
              <div class="f-Text">{{item.desc}}</div>
              <ul class="ofh">
                <li class="ofh-li">
                  <div class="f-label">快速涨粉</div>
                  <div class="f-num">{{item.dayNum}}粉丝/天</div>
                </li>
                <li class="ofh-li">
                  <div class="f-label">粉丝留存率</div>
                  <div class="f-num">{{item.keepRate}}左右</div>
                </li>
                <li class="ofh-li">
                  <div class="f-label">涨粉价格</div>
                  <div class="f-num">{{item.price}}元/粉丝</div>
                </li>
              </ul>
              <a class="btn">立即涨粉</a>
            </div>
            <div class="f-ListPic" :class="item.id/2==1?'fl':'fr'">
              <img :src="item.imgPath" class="FunsImg f-PicOne" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "upfansType",
    props: ["offlinelist", "onlinelist"],
    mounted() {

    }
  }
</script>

<style lang="stylus" scoped>
  .container
    background #f5f5f5
    overflow hidden
    color #666
    font-size 14px
    .title
      text-align: center;
      font-size: 30px;
      color: #4D555D;
      padding 80px 0 0 0
    .f-List
      .list_items
        width: 1200px
        margin 0 auto
        padding-top 110px
        overflow hidden
        .fl
           float left
        .fr
           float right
        .f-ListText
          padding 45px 0
          .f-title
            font-size 20px
            font-weight bold
            color #4cb5ff
          .f-Text
            width 490px
            line-height 26px
            height 74px
            margin-top 20px
            margin-bottom 40px
          .ofh
            overflow hidden
            .ofh-li
              float left
              margin-right: 30px
              .f-label
                font-size 16px
              .f-num
                font-size 16px
                font-weight bold
                line-height 34px
                color #4cb5ff
          .btn
            margin-top 20px
            display block
            width 148px
            height 46px
            line-height 46px
            text-align center
            color #4cb5ff
            border 1px solid #4cb5ff
            font-size 16px
            cursor pointer
            &:hover
              background-color #4cb5ff
              color white
        .f-ListPic
          .FunsImg
            margin-right: 80px
            display inline-block
            width 379px
            height 358px
</style>
