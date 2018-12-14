<template>
  <div class="container">
    <common-header></common-header>
    <div class="content">
      <div class="title">绑定手机号</div>
      <div class="box-phone" v-show="type">
        <div class="input-item">
          <i class="iconfont icon-shoujihao"></i>
          <input type="text" class="phone" value="" placeholder="输入手机号"/>
        </div>
        <div class="input-item">
          <i class="iconfont icon-yanzhengma"></i>
          <input type="text" class="code" value="" placeholder="输入验证码"/>
          <button type="button" class="btn-code">获取验证码</button>
        </div>
        <button type="button" class="btn-login">绑定</button>
      </div>
    </div>
  </div>
</template>

<script>
  import CommonHeader from '@/components/commonHeader'
  export default {
    name: "bindPhone",
    components:{CommonHeader},
    data(){
      return {
        checked:false,
        type:true
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .content
    width 6.4rem
    height 5.92rem
    background-color white
    margin 1.51rem auto auto 6.39rem
    box-shadow 0 0.1rem 0.8rem 0 rgba(127,183,255,0.25)
    border-radius 0.08rem
    box-sizing border-box
    padding 0.64rem 0.8rem
    .title
      font-size 0.4rem
      font-family PingFang-SC-Medium
      font-weight 500
      color #177FE6
    .box-phone
      width 100%
      margin-top 0.4rem
      .input-item
        display flex
        align-items center
        position relative
        i
         position absolute
         left 0
        input
          width 100%
          height 0.64rem
          line-height 0.64rem
          text-indent 0.3rem
          font-size 0.16rem
          color #475766
          border none
          border-bottom 1px solid #CFDAE6
          outline none
          &::-webkit-input-placeholder
            color #CFDAE6
          &:-moz-placeholder
            color #CFDAE6
          &::-moz-placeholder
            color #CFDAE6
          &:-ms-input-placeholder
            color #CFDAE6
        .btn-code
          position absolute
          right 0
          width 0.96rem
          height 0.3rem
          background #177FE6
          border 2px solid #177FE6
          color white
          border-radius 3px
          cursor pointer
      .btn-login
        width 1.6rem
        height 0.48rem
        background #CFDAE6
        border 1px solid #CFDAE6
        cursor pointer
        border-radius 0.04rem
        font-size 0.24rem
        font-weight 500
        color #fff
        margin-top 0.41rem
        float right
</style>
