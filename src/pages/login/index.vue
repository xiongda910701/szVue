<template>
  <div class="container">
    <common-header></common-header>
    <login-box :url="url"></login-box>
    <div class="content">
      <div class="tab">
        <div class="item" :class="index===0?'active':''" @click="changeTab(0)">微信登录</div>
        <div class="item" :class="index===1?'active':''" @click="changeTab(1)">账号登录</div>
      </div>
      <div class="box-wx" v-show="type">
        <img :src="qrCode" alt="" v-show="!disabledQrCodeState">
        <img :src="require('@/assets/images/defaultQrCode@2x.png')" alt="" v-show="disabledQrCodeState" @click="reFreshQrCode">
        <p class="desc">使用微信扫码登录</p>
        <p class="xy">还没有账号？<router-link class="text-color" to="/reg">去注册</router-link></p>
      </div>

      <div class="box-phone" v-show="!type">
        <div class="input-item">
          <i class="iconfont icon-shoujihao"></i>
          <i class="el-icon-success verify" v-show="verifySuccess"></i>
          <i class="el-icon-error verify" v-show="verifyError"></i>
          <input type="text" class="phone" v-model="phone" @input="checkInput" placeholder="输入手机号"/>
        </div>
        <div class="input-item">
          <i class="iconfont icon-mima"></i>
          <input type="password" class="pass" v-model="password" autocomplete="off" @input="checkInput" placeholder="输入密码"/>
        </div>
        <div class="pass-box">
          <el-checkbox v-model="checked">记住密码</el-checkbox>
          <span class="forget-pass"><router-link :to="{path:'/setPass',query:{type:'forget'}}">忘记密码?</router-link></span>
        </div>
        <div class="btn-box">
          <p class="desc">还没有账号？<router-link class="text-color" to="/reg">去注册</router-link></p>
          <button type="button" class="btn-login" :class="isActive?'active':''" @click="loginClick">登录</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import CommonHeader from '@/components/commonHeader'
  import LoginBox from '@/components/loginBox'
  import {getMessageCodeApi,getQrCodeApi,scanQrCodeApi,phoneLoginApi,saveCookieApi} from '@/request/api'
  import { mapMutations } from 'vuex'
  export default {
    name: "login",
    components:{CommonHeader,LoginBox},
    data(){
      return {
        index:0,
        checked:false,
        type:true,
        phone:'',
        password:'',
        qrCode:'',
        disabledQrCodeState:false,
        timeId:null,
        clickNumber:0,
        isActive:false,
        url:'',
        verifySuccess:false,
        verifyError:false
      }
    },
    methods:{
      ...mapMutations('login',{
        checkLoginState:'checkLoginState'
      }),
      changeTab(indexValue){
        this.index = indexValue;
        if(indexValue===1){
          window.clearInterval(this.timeId);
          this.type = false;
          this.clickNumber = 0;
          this.qrCode = "";
        }else{
          this.type = true;
          if(this.clickNumber===0){
            this.clickNumber++;
            this.getQrCode();
          }
        }
      },

      //输入监测函数
      checkInput(){
        if(this.phone===""||this.password===""){
          this.isActive = false;
        }else{
          this.isActive = true;
        }
        let phoneState = this.checkPhone(this.phone);
        if(this.phone===""){
          this.verifySuccess = false;
          this.verifyError = false;
        }
        if(phoneState){
          this.verifySuccess = true;
          this.verifyError = false;
          if(this.password!==""){
            this.isActive = true;
          }else{
            this.isActive = false;
          }
        }else{
          this.verifySuccess = false;
          this.verifyError = true;
          this.isActive = false;
        }
      },

      //手机号码验证
      checkPhone(phone){
        if(!(/^1[34578]\d{9}$/.test(phone))){
          return false;
        }else {
          return true;
        }
      },
      //获取微信登录二维码函数
      getQrCode(){
        getQrCodeApi().then(res => {
          console.log(res);
          if(res.errcode===1){
            this.qrCode = res.url;
            localStorage.setItem("session",res.s);
            this.timeId= window.setInterval(()=>{
              this.scanQrCode();
            },2000);
          }
        })
      },
      //二维码轮询函数
      scanQrCode(){
        let session = localStorage.getItem("session");
        if(session){
          scanQrCodeApi({sess:session}).then(res => {
            console.log(res);
            if(res.errcode===1){
              debugger;
              window.clearInterval(this.timeId);
              //跳转主页面
              localStorage.removeItem("session");
              localStorage.setItem("accessToken",res.token);
              //存储qq
              localStorage.setItem("qq",res.chat);
              this.checkLoginState();
              this.url = 'https://www.shenzan.com/Home/Media/mbianL/s/'+res.token;
              setTimeout(()=>{
                this.$router.push({path:'/media'});
              },1000)
            }else if(res.errcode===201){
              //二维码失效
              window.clearInterval(this.timeId);
              this.disabledQrCodeState = true;
            }else if(res.errcode===301){
              //清除轮询并跳转到绑定手机号页面
              window.clearInterval(this.timeId);
              this.$router.push({
                path:'/bindSelect'
              })
            }
          })
        }
      },
      //设置cookie
      setCookie(value) {
        document.cookie = 'PHPSESSID' + "="+ escape (value) + ";domain=www.shenzan.com";
      },

      //登录按钮点击事件
      loginClick(){
        var params = {phone: this.phone,password:this.password};
        if(params.phone===""){
          this.$message.error("请输入手机号码");
        }else if(!this.checkPhone(this.phone)){
          this.$message.error('手机号码有误,请重新输入!');
        }else if(params.password===""){
          this.$message.error('请输入密码!');
        }else{
          phoneLoginApi(params).then((res)=>{
            console.log(res);
            if(res.errcode===1){
              this.$message({message: '登录成功!', type: 'success'});
              this.checkLoginState();
              localStorage.setItem("accessToken",res.token);
              //记住密码
              if(this.checked){
                let userInfo = JSON.stringify({phone:this.phone,password:this.password});
                localStorage.setItem("userInfo",userInfo);
              }
              //存储qq
              localStorage.setItem("qq",res.chat);
              this.url = 'https://www.shenzan.com/Home/Media/mbianL/s/'+res.token;
              setTimeout(()=>{
                this.$router.push({path:'/media'});
              },1000)
            }else if(res.errcode===101){
              this.$router.push({path:'/login'});
            }else{
              this.$message.error(res.errmsg);
            }
          })
        }
      },
      //刷新二维码事件
      reFreshQrCode(){
        this.disabledQrCodeState = false;
        this.getQrCode();
      }
    },
    mounted(){
      //debugger;
      let page = this.$route.query.page;
      if(page==="reg"){
        this.index = 1;
        this.type = false;
      }else{
        this.type = true;
        this.getQrCode();
      }
      //用户登录信息回填
      let userInfo = JSON.parse(localStorage.getItem("userInfo"));
      if(userInfo){
        this.phone = userInfo.phone;
        this.password = userInfo.password;
        this.isActive = true;
      }
      //判断用户是否已登录
      if(localStorage.getItem("accessToken")){
        this.$router.push({
          path:'/media'
        })
      }
    },
    beforeDestroy() {
      window.clearInterval(this.timeId);
      this.timeId = null;
  }
  }
</script>

<style lang="stylus" scoped>
  .content
    width 6.4rem
    height auto
    overflow hidden
    background-color white
    margin 2.31rem auto auto 6.39rem
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
        font-size 0.24rem
        color #475766
        line-height 0.41rem
        &:first-child
          margin-right 1.18rem
        &.active
          font-size 0.4rem
          color #177FE6
    .box-phone
      width 100%
      margin-top 0.4rem
      .input-item
        display: -webkit-flex; /* Safari */
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
        .icon-qr
          position absolute
          right 0
          top 0.15rem
          width 0.22rem
          height 0.22rem
          cursor pointer
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
      .pass-box
        margin-top 0.24rem
        .forget-pass
          float right
          font-size 0.16rem
          font-weight 500
          a
            color #177FE6
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
        margin 0.23rem 0 0.27rem 0
      .xy
        color #475766
        font-size 0.16rem
        .text-color
          color #177FE6
          cursor pointer
</style>
