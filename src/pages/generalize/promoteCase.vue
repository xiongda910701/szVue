<template>
    <div class="container">
      <div class="title">推广案例</div>
      <div class="content">
        <ul class="Case_Items">
          <li class="Case_List ridiu2 fl" v-for="item in promoteCaseData" :key="item.id">
            <div class="Case_Cover">
              <img :src="item.imgPath" alt="">
              <span>{{item.title}}</span>
            </div>
            <ul class="Case_Mes">
              <li class="Case_text">投放周期：{{item.cycle[0]}}&nbsp;~&nbsp;{{item.cycle[1]}}</li>
              <li class="Case_text">广告预算：{{item.budgut}}元</li>
              <li class="Case_text">阅读单价：<span>{{item.price}}元</span></li>
              <li class="Case_text">覆盖粉丝：{{item.fans}}</li>
              <li class="Case_text Case_text_last ofh">有效阅读：<b>{{item.read}}</b><i class="ridiu2 classify">{{item.typeName}}</i></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
    export default {
        name: "promoteCase",
        props:["promoteCaseData"]
    }
</script>

<style lang="stylus" scoped>
  .container
     background-color white
     overflow hidden
    .title
      text-align center
      font-size 30px
      color #4D555D
      padding-top 80px
    .content
      width 1228px
      margin 0 auto
      margin-top 60px
      padding-bottom 80px
      .Case_Items
        &::after
          clear both
          font-size 0
          height 0
          visibility hidden
        .Case_List
          float left
          background-color: #fff
          border 1px solid #ebebeb
          width 277px
          margin 0 14px
          margin-bottom 28px
          .Case_Cover
            height 150px
            position relative
            overflow hidden
            img
              width 280px
            span
              position absolute
              bottom 0
              left 0
              background-color rgba(0,0,0,0.5)
              color: #fff
              width 100%
              line-height 28px
              padding 0 10px
          .Case_Mes
            padding 15px 0 25px 15px
            .Case_text
              line-height 28px
              color #333
              font-size 14px
              span
                color #4cb5ff
            .Case_text_last
              b
                color #cc2929
              .classify
                color #4cb5ff
                border 1px solid #4cb5ff
                font-size 12px
                padding 0 3px
                float right
                line-height 18px
                margin-right 15px
                margin-top 5px
</style>
