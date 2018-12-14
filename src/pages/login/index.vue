<template>
  <div class="container">
    <common-header></common-header>
    <div class="content">
      <div class="tab">
        <div class="item active">
          <span class="text-china">登录</span>
          <span class="text-english">LOG IN</span>
        </div>
        <div class="item">
          <router-link to="/reg">
            <span class="text-china">注册</span>
            <span class="text-english">SIGN IN</span>
          </router-link>
        </div>
      </div>
      <div class="box-phone" v-show="type">
        <div class="input-item">
          <i class="iconfont icon-shoujihao"></i>
          <input type="text" class="phone" value="" placeholder="输入手机号"/>
          <img :src="require('@/assets/images/icon-qr@2x.png')" alt="" class="icon-qr" @click="type=false">
        </div>
        <div class="input-item">
          <i class="iconfont icon-mima"></i>
          <input type="text" class="pass" value="" placeholder="输入密码"/>
        </div>
        <div class="pass-box">
          <el-checkbox v-model="checked">记住密码</el-checkbox>
          <span class="forget-pass"><router-link to="/setPass">忘记密码?</router-link></span>
        </div>
        <button type="button" class="btn-login">登录</button>
      </div>
      <div class="box-wx" v-show="!type">
        <img :src="require('@/assets/images/qrCode.png')" alt="">
        <p class="desc">使用微信扫码关注公众号[美编]即可登录</p>
        <p class="xy">美编用户协议</p>
        <p class="login-account" @click="type=true">账号密码登录</p>
      </div>
    </div>
  </div>
</template>

<script>
  import CommonHeader from '@/components/commonHeader'
  export default {
    name: "login",
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
    .tab
      width 100%
      display flex
      flex-wrap nowrap
      .item
        cursor pointer
        &:first-child
          margin-right 0.64rem
        &.active
          .text-china
            font-size 0.4rem
            color #177FE6
          .text-english
            font-size 0.24rem
            color #177FE6
        .text-china
          width:49px;
          height:23px;
          font-size:24px;
          font-family:PingFang-SC-Medium;
          font-weight:500;
          color:rgba(71,87,102,1);
          line-height:41px;
        .text-english
          width:43px;
          height:10px;
          font-size:12px;
          font-family:PingFang-SC-Medium;
          font-weight:500;
          color:rgba(71,87,102,1);
          line-height:41px;
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
        .icon-qr
          position absolute
          right 0
          top 0.15rem
          width 0.22rem
          height 0.22rem
          cursor pointer
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
      .pass-box
        margin-top 0.24rem
        .forget-pass
          float right
          font-size 0.16rem
          font-weight 500
          a
            color #177FE6
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
    .box-wx
      text-align center
      font-size 0.16rem
      font-weight 500
      img
        width 2.3rem
        height 2.3rem
        margin-top 0.7rem
      .desc
        color #475766
        margin 0.39rem 0 0.27rem 0
      .xy
        color #177FE6
        cursor pointer
      .login-account
        color #475766
        margin-top 0.1rem
        cursor pointer
</style>
