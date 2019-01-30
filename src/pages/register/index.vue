<template>
  <div class="container">
    <common-header></common-header>
    <div class="content">
      <div class="title">账号注册</div>
      <div class="box-phone">
        <div class="input-item">
          <i class="iconfont icon-shoujihao"></i>
          <i class="el-icon-success verify" v-show="verifySuccess"></i>
          <i class="el-icon-error verify" v-show="verifyError"></i>
          <input type="text" class="phone" v-model="phone" placeholder="输入手机号" @input="checkInput"/>
          <span class="icon-check" v-show="false">&#10003;</span>
        </div>
        <div class="input-item">
          <i class="iconfont icon-yanzhengma"></i>
          <input type="text" class="code" v-model="code" placeholder="输入验证码" @input="checkInput"/>
          <span v-show="sendAuthCode" @click="getCode" class="btn-code" :class="codeIsActive?'active':''">获取验证码</span>
          <span v-show="!sendAuthCode" class="btn-code disabled"> <span class="auth_text_blue">{{auth_time}} </span> 秒后重发</span>
        </div>
        <div class="input-item">
          <i class="iconfont icon-mima"></i>
          <input type="password" class="pass" v-model="pass" placeholder="输入密码" autocomplete="off" @input="checkInput"/>
        </div>
        <div class="input-item">
          <i class="iconfont icon-mima"></i>
          <input type="password" class="pass" v-model="pass1" placeholder="再次输入密码" autocomplete="off" @input="checkInput"/>
        </div>
        <div class="pass-box">
          <el-checkbox v-model="checked">我同意</el-checkbox>
          <!--&#171;-->
          <span class="xy" @click="checkProtocol"><<美编用户协议>></span>
        </div>
        <div class="btn-box">
          <p class="desc">已有账号？<router-link class="text-color" to="/login">去登录</router-link></p>
          <button type="button" class="btn-login" :class="isActive?'active':''" @click="regClick">注册</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import CommonHeader from '@/components/commonHeader'
  import {getMessageCodeApi, checkRegisterApi} from '@/request/api'

  export default {
    name: "register",
    components: {CommonHeader},
    data() {
      return {
        sendAuthCode:true,
        auth_time: 0,
        phone: '',
        code: '',
        pass: '',
        pass1: '',
        checked: false,
        timeId:'',
        isActive:false,
        codeIsActive:false,
        verifySuccess:false,
        verifyError:false
      }
    },
    methods: {
      //手机号码验证
      checkPhone(phone){
        if(!(/^1[34578]\d{9}$/.test(phone))){
          return false;
        }else {
          return true;
        }
      },

      //输入监测函数
      checkInput(){
        if(this.phone===""||this.code===""||this.pass===""||this.pass1===""){
          this.isActive = false;
        }else{
          this.isActive = true;
        }
        if(this.phone!==""&&this.checkPhone(this.phone)){
          this.codeIsActive = true;
        }
        if(this.phone===""){
          this.verifySuccess = false;
          this.verifyError = false;
        }
        let phoneState = this.checkPhone(this.phone);
        if(phoneState){
          this.verifySuccess = true;
          this.verifyError = false;
          if(this.code!==""&&this.pass!==""&&this.pass1!==""){
            this.isActive = true;
          }else{
            this.isActive = false;
          }
        }else{
          this.verifySuccess = false;
          this.verifyError = true;
        }
      },

      //获取短信验证码
      getCode() {
        let phone = this.phone;
        if (!phone) {
          this.$message.error('请输入手机号码!');
        } else {
          this.sendAuthCode = false;
          this.auth_time = 60;
          var auth_timetimer =  setInterval(()=>{
            this.auth_time--;
            if(this.auth_time<=0){
              this.sendAuthCode = true;
              clearInterval(auth_timetimer);
            }
          }, 1000);
          getMessageCodeApi({phone: phone}).then((res) => {
            console.log(res);
            if (!res.errcode) {
              this.$alert(res.errmsg, '美编', {
                confirmButtonText: '确定'
              })
            }
          })
        }
      },
      //检测账号是否已注册接口函数
       checkIsRegister(params){
        checkRegisterApi(params).then(res=>{
          console.log(res);
          if(res.errcode===1){
            let p = localStorage.getItem("p");
            //跳转联系方式页面
            this.$router.push({
              path:'/contact',
              query:{
                page:'reg',
                phone:this.phone,
                code:this.code,
                password:this.pass,
                repassword:this.pass1,
                p:p
              }
            })
          }else{
            this.$message.error(res.errmsg);
          }
        })
      },

      //点击注册事件
      regClick(){
        debugger;
        if(this.phone===""){
          this.$message.error('请输入手机号码!');
        }else if(!this.checkPhone(this.phone)){
          this.$message.error('手机号码有误,请重新输入!');
        }else if(this.code===""){
          this.$message.error('请输入短信验证码!');
        }else if(this.pass===""){
          this.$message.error('请输入密码!');
        }else if(this.pass1===""){
          this.$message.error('请再次输入密码!');
        }else if(this.pass!==this.pass1){
          this.$message.error('密码不一致，请重新输入!');
        }else if(!this.checked){
          this.$message.error('请选中用户协议!');
        }else {
          var params = {phone:this.phone, code:this.code, password:this.pass, repassword:this.pass1};
          this.checkIsRegister(params);
        }
      },
      //查看用户协议
      checkProtocol(){
        const { href } = this.$router.resolve({
          name: "protocol",
        });
        window.open(href, '_blank');
      }
    },
    destroyed(){
      window.clearInterval(this.timeId);
    }
  }
</script>

<style lang="stylus" scoped>
  .content
    width 6.4rem
    height auto
    overflow hidden
    background-color white
    margin 2rem auto auto 6.39rem
    box-shadow 0 0.1rem 0.8rem 0 rgba(127, 183, 255, 0.25)
    border-radius 0.08rem
    box-sizing border-box
    padding 0.64rem 0.8rem
    .title
      font-size 0.4rem
      color #177FE6
      text-align center
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
          color #475766
        .verify
          position absolute
          left 4.5rem
          font-size 0.16rem
        .el-icon-success
          color #177FE6
        .el-icon-error
          color #E51717
        .icon-check
          position absolute
          right 0
          top 0.4rem
          width 0.16rem
          height 0.16rem
          line-height 0.16rem
          text-align center
          background-color #177FE6
          color white
          border-radius 100%
          font-size 0.12rem

        input
          display block
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
          display block
          width 0.96rem
          line-height 0.3rem
          height 0.3rem
          color white
          background #CFDAE6
          border 1px solid #CFDAE6
          border-radius 3px
          text-align center
          cursor pointer
          &.active
            background #177FE6
            border 2px solid #177FE6
            color white
        .disabled
          background-color #ececec
          color #475766
          border 2px solid #ececec
      .pass-box
        margin-top 0.24rem
        font-size 0.14rem
        .xy
          color #177FE6
          cursor pointer
      .btn-box
        margin-top 0.41rem
        overflow hidden
        height 0.48rem
        line-height 0.48rem
        .desc
          float left
          font-size 0.16rem
          .text-color
            color #177FE6
        .btn-login
          width 1.6rem
          height 0.48rem
          color white
          background #CFDAE6
          border 1px solid #CFDAE6
          cursor pointer
          border-radius 0.04rem
          font-size 0.24rem
          font-weight 500
          float right
        .active
          background #177FE6
          color white
          border 1px solid #177FE6
</style>
