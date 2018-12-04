<template>
  <div class="container">
    <common-header></common-header>
    <div class="container">
      <div class="content">
        <div class="tab">
          <div class="tab-item" :class="isActive?'active':''" @click="changeTab(0)">广告主</div>
          <div class="tab-item" :class="!isActive?'active':''" @click="changeTab(1)">媒体主</div>
        </div>
        <form class="form">
          <div class="item">
            <div class="label"><img :src="require('@/assets/images/R_PhoneIcon.png')" class="phone" alt=""></div>
            <input type="text" class="input" placeholder="请输入手机号/账号"/>
          </div>
          <div class="item">
            <div class="label"><img :src="require('@/assets/images/R_LockIcon.png')" class="pass" alt=""></div>
            <input type="text" class="input" placeholder="请输入密码"/>
          </div>
          <div class="item-code">
            <div class="input-box">
              <div class="label"><img :src="require('@/assets/images/R_imgIcon.png')" class="photo" alt=""></div>
              <input type="text" class="input-code" placeholder="请输入验证码"/>
            </div>
            <div class="code-box"></div>
          </div>
          <div class="info-box">
            <el-checkbox v-model="checked" class="checkbox" style="float: left">自动登录</el-checkbox>
            <router-link :to="{name:'ReSetPassword', params:{type:type}}" class="forget-pass">忘记密码?</router-link>
            <button type="button" class="btn">{{btnText}}</button>
            <div><span>还没有账号?</span>
              <router-link to="/register">点击注册</router-link>
            </div>
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
    name: "Login",
    components: {CommonHeader, CommonFooter,Tool},
    data() {
      return {
        isActive: true,
        checked: true,
        type: 0,
        btnText: "广告主登录"
      }
    },
    methods:{
      changeTab(index){
        if(index==0){
          this.isActive = true;
          this.type = 0;
          this.btnText = "广告主登录";
        }else{
          this.isActive = false;
          this.type = 1;
          this.btnText = "媒体主登录";
        }

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

      .tab
        width 100%
        height 50px
        background-color #ebebeb
        color #999
        font-size 16px

        .tab-item
          width 50%
          line-height 50px
          float left
          text-align center
          position relative
          cursor pointer

        .active
          background-color #4cb5ff
          color white

          &::after
            content ""
            display inline-block
            position absolute
            bottom 0
            left 50%
            margin-left: -10px
            width 0
            height 0
            border-left 10px solid transparent
            border-right 10px solid transparent
            border-bottom 10px solid #ebebeb
            border-bottom-color #fff

      .form
        padding 50px

        .item-code
          height 40px
          width 400px
          position relative

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

        .item
          position relative
          width 400px
          height 40px
          border 1px solid #ccc
          margin-bottom 30px

          .label
            position absolute
            left 0
            display flex
            justify-content center
            width 40px
            height 40px
            text-align center
            float left

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
            left 40px
            width 360px
            height 38px
            float left
            border none
            text-indent 10px

        .info-box
          width 400px
          margin 20px 0
          position relative

          .checkbox
            position absolute
            left 0

          .forget-pass
            position absolute
            right 0
            color #4cb5ff
            font-size 14px
            cursor pointer

          .btn
            width 100%
            height 40px
            background #4cb5ff
            font-size 16px
            color #fff
            cursor pointer
            border none
            padding-left 0
            margin-top 25px

          div
            margin-top 15px
            font-size 14px
            color #666

            a
              color #4cb5ff
              cursor pointer
              margin-left 10px
</style>
