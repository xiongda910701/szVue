<template>
    <div class="container">
      <div class="title">接单案例</div>
      <div class="content">
        <ul class="list">
          <li class="item" v-for="item in orderCaseData" :key="item.id">
            <div class="Case_Media">
              <img class="Media_Head" :src="item.imgPath" alt="">
              <div class="Media_Mes">
                <div class="M-name">{{item.name}}</div>
                <i class="classify">{{item.typeName}}</i>
              </div>
              <div class="media_Num">
                <div class="fans_num">{{item.fansNum}}</div>
                <div class="m-label">粉丝数</div>
              </div>
            </div>
            <dl class="Media_attribute">
              <dd>
                <div>{{item.area}}</div>
                <div class="m-label">地区</div>
              </dd>
              <dd>
                <div>{{item.manNum}}%</div>
                <div class="m-label">男粉</div>
              </dd>
              <dd>
                <div>{{item.womenNum}}%</div>
                <div class="m-label">女粉</div>
              </dd>
            </dl>
            <ul class="Case_Mes m_Case_Mes">
              <li class="Case_text">接单次数：<span>{{item.orderNum}}</span></li>
              <li class="Case_text">平均阅读：<span>{{item.read}}</span></li>
              <li class="Case_text Case_text_last ofh">接单收益：<b>{{item.receive}}</b></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
    export default {
        name: "orderCase",
        props:["orderCaseData"]
    }
</script>

<style lang="stylus" scoped>
  .container
    background-color #fff
    overflow hidden
    color #333
    font-size 14px
    .title
      padding-top 80px
      text-align center
      font-size 30px
      color #4D555D
    .content
      width 1228px
      margin 0 auto
      margin-top 60px
      padding-bottom 80px
      .list
        &::before
          content ""
          display table
        .item
          background-color #fff
          border 1px solid #ebebeb
          width 277px
          margin 0 14px
          margin-bottom 28px
          float left
          .Case_Media
            padding 25px
            overflow hidden
            .Media_Head
              width 54px
              height 54px
              border-radius 50%
              float left
              -moz-border-radius 50%
              -webkit-border-radius 50%
            .Media_Mes
              padding 6px 0 6px 6px
              float left
              .M-name
                color #111
              .classify
                color #4cb5ff
                border 1px solid #4cb5ff
                font-size 12px
                padding 0 3px
                float right
                line-height 18px
                margin-right 15px
                margin-top 1px
            .media_Num
              text-align center
              padding-top 6px
              float right
              .fans_num
                color #4cb5ff
              .m-label
                  font-size 12px
                  color #666
          .Media_attribute
            margin 0 20px
            padding-bottom 10px
            border-bottom 1px solid #ebebeb
            overflow hidden
            &::before
              content ""
              display table
            &::after
              clear both
              font-size 0
              height 0
              visibility hidden
            dd
              float left
              width 33.33%
              text-align center
              color #111
              .m-label
                font-size 12px
                color #666
          .Case_Mes
            padding 15px 0 25px 15px
            .Case_text
              line-height 28px
              color #333
              span
                color #4cb5ff
              b
                color #cc2929
</style>
