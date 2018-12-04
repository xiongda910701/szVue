<template>
  <div class="container">
    <common-header></common-header>
    <div class="container">
      <div class="content">
        <form class="form">
          <div class="title">{{name}}找回密码</div>
          <div class="item">
            <div class="label"><img :src="require('@/assets/images/R_PhoneIcon.png')" class="phone" alt=""></div>
            <input type="text" class="input" placeholder="请输入手机号/账号"/>
          </div>

          <div class="item-code">
            <div class="input-box">
              <div class="label"><img :src="require('@/assets/images/R_imgIcon.png')" class="photo" alt=""></div>
              <input type="text" class="input-code" placeholder="请输入验证码"/>
            </div>
            <div class="code-box"></div>
          </div>

          <div class="item-code">
            <div class="input-box">
              <div class="label"><img :src="require('@/assets/images/R_MesIcon.png')" class="email" alt=""></div>
              <input type="text" class="input-code" placeholder="请输入手机六位验证码"/>
            </div>
            <button type="button" class="btn-getCode">获取验证码</button>
          </div>

          <div class="item">
            <div class="label"><img :src="require('@/assets/images/R_LockIcon.png')" class="pass" alt=""></div>
            <input type="text" class="input" placeholder="请输入新密码(6-20位数字及字母组成)"/>
          </div>

          <div class="item">
            <div class="label"><img :src="require('@/assets/images/R_LockIcon.png')" class="pass" alt=""></div>
            <input type="text" class="input" placeholder="请再次输入密码"/>
          </div>
          <div class="info-box">
            <button type="button" class="btn">重置密码</button>
          </div>
        </form>
      </div>
    </div>
    <tool></tool>
    <common-footer></common-footer>
  </div>
</template>

<script>
  import CommonHeader from '@/components/commonHeader'
  import CommonFooter from '@/components/commonFooter'
  import Tool from '@/components/tool'


  export default {
    name: "ResetPassword",
    components: {CommonHeader, CommonFooter,Tool},
    data(){
      return {
        name:"广告主"
      }
    },
    mounted() {
      console.log(this.$route.params.type);
      let type = this.$route.params.type;
      if(type==0){
        this.name = "广告主";
      }else{
        this.name = "媒体主";
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .container
    .content
      width 500px
      margin 132px auto 80px auto
      background #fff
      border-radius 3px
      -moz-border-radius 3px
      -webkit-border-radius 3px
      .form
        padding 50px
        .title
          text-align center
          padding 10px 0 30px 0
          font-size 16px
          color #333
        .item-code
          height 40px
          width 400px
          position relative
          margin-bottom 30px
          .input-box
            width 220px
            height 40px
            border 1px solid #ccc
            margin-bottom 30px
            float left
            .label
              display flex
              justify-content center
              width 40px
              height 40px
              text-align center
              float left
              .photo
                width 20px
                height 15px
                margin-top 12.5px
              .email
                width 23px
                height 13px
                margin-top 13.5px
            .input-code
              width 180px
              height 38px
              float left
              border none
              text-indent 10px
          .code-box
            position absolute
            left 240px
            width 160px
            height: 40px
            clear both
            border 1px solid #ccc
          .btn-getCode
            position absolute
            left 240px
            width 160px
            height: 40px
            clear both
            background-color #4cb5ff
            border 1px solid #4cb5ff
            cursor pointer
            color white
            border-radius 3px
        .item
          width 400px
          height 40px
          border 1px solid #ccc
          margin-bottom 30px
          position relative
          .label
            position absolute
            display flex
            justify-content center
            width 40px
            height 40px
            text-align center
            left 0
            .phone
              width 14px
              height 24px
              margin-top 8px
            .pass
              width 16px
              height 21px
              margin-top 9.5px
          .input
            position absolute
            width 360px
            height 38px
            left 40px
            border none
            text-indent 10px
        .info-box
          width 400px
          margin -10px 0 20px 0
          position relative
          .btn
            width 100%
            height 40px
            background #4cb5ff
            font-size 16px
            color #fff
            cursor pointer
            border none
            padding-left 0
            margin-top 35px
</style>
