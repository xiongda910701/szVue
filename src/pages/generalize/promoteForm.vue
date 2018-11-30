<template>
    <div class="promote-form-box">
      <div class="title">推广形式</div>
      <div class="content">
        <ul class="list">
          <li class="item">
            <div class="circle_b">
              <div class="circle_s BgImg w_Icon1"></div>
            </div>
            <div class="form_title">图文广告</div>
            <span class="Form_text">以标题、图片、文案等编辑制作成广告物料，直接推送给粉丝，快速获得大量曝光，同时锁定潜在用户</span>
            <a class="Link_Btn_b" href="/ad.html">立即推广</a>
          </li>
          <li class="item">
            <div class="circle_b">
              <div class="circle_s BgImg w_Icon2"></div>
            </div>
            <div class="form_title">贴片广告</div>
            <span class="Form_text">以图片、广告语、联系方式（二维码）等设计制作成大尺寸广告图片，展示在文章顶部或底部，快速获得海量曝光，锁定潜在用户</span>
            <a class="Link_Btn_b" href="/ad.html">立即推广</a>
          </li>
          <li class="item">
            <div class="circle_b">
              <div class="circle_s BgImg w_Icon3"></div>
            </div>
            <div class="form_title">选号直投</div>
            <span class="Form_text">海量优质媒体，一手价格，平台担保交易，可按需自主选择媒体投放，网红、意见领袖等大号接单几率更高</span>
            <a class="Link_Btn_b" href="/ad.html">立即推广</a>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
    export default {
        name: "PromoteForm"
    }
</script>

<style lang="stylus" scoped>
  .promote-form-box
    padding 80px 0
    background-color #f5f5f5
    overflow hidden
    .title
      text-align center
      font-size 30px
      color #4D555D
    .content
      width 1200px
      margin 0 auto
      overflow hidden
      .list
        padding 60px 0 0 0
        overflow hidden
        .item
          position relative
          float left
          background-color #fff
          width 398px
          border 1px solid #e6e6e6
          text-align center
          height 444px
          transition all .3s cubic-bezier(.4,0,.2,1),z-index 0s .12s
          cursor pointer
          &:hover
            border 1px solid #4cb5ff
          .circle_b
            width 104px
            height 104px
            border 1px solid #cceaff
            border-radius 50%
            -webkit-border-radius 50%
            -moz-border-radius 50%
            -o-border-radius 50%
            margin 60px 147px 25px
            .circle_s
              width 50px
              height 50px
              margin 27px
              text-align center
          .form_title
            font-size 18px
            color #111
            position relative
            padding-bottom 8px
            margin-bottom 16px
            &::before
              position absolute
              bottom 0
              left 50%;
              content ""
              display block
              margin-left: -13px
              width 26px
              height 1px
              background-color #4cb5ff
          .Form_text
            padding 0 40px
            display block
            height 64px
            color #666
            font-size 14px
            line-height 20px
          .Link_Btn_b
              border: 1px solid #4cb5ff
              padding 5px 17px
              color #4cb5ff
              margin-top 20px
              display inline-block
</style>
