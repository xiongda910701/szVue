<template>
  <div class="container">
    <common-header></common-header>
    <div class="content">
      <div class="title">重置密码</div>
      <div class="box-phone">
        <div class="input-item">
          <i class="iconfont icon-shoujihao"></i>
          <i class="el-icon-success verify" v-show="verifySuccess"></i>
          <i class="el-icon-error verify" v-show="verifyError"></i>
          <input type="text" class="phone" v-model="phone" placeholder="输入手机号" ref="phone" @input="checkInput"/>
        </div>
        <div class="input-item">
          <i class="iconfont icon-yanzhengma"></i>
          <input type="text" class="code" v-model="code" placeholder="输入验证码" @input="checkInput"/>
          <span v-show="sendAuthCode" @click="getCode" class="btn-code">获取验证码</span>
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
        <button type="button" class="btn-login" :class="isActive?'active':''" @click="changePassword">确定</button>
      </div>
    </div>
  </div>
</template>

<script>
  import CommonHeader from '@/components/commonHeader'
  import {getMessageCodeApi,resetPasswordApi } from '@/request/api'
  import { mapState, mapActions } from 'vuex'
  export default {
    name: "setPassword",
    components:{CommonHeader},
    data(){
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
        verifySuccess:false,
        verifyError:false
      }
    },
    computed:{
      ...mapState('login',{
        mediaInfo:'mediaInfo'
      })
    },
    methods:{
      ...mapActions('login',{
        getMediaInfo:'getMediaInfo'
      }),
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

        let phoneState = this.checkPhone(this.phone);
        if(this.phone===""){
          this.verifySuccess = false;
          this.verifyError = false;
        }
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
          this.isActive = false;
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
          getMessageCodeApi({phone: phone,isforget:2}).then((res) => {
            console.log(res);
            if (!res.errcode) {
              this.$alert(res.errmsg, '美编', {
                confirmButtonText: '确定'
              })
            }
          })
        }
      },
      //点击确定按钮事件
      changePassword(){
        var params = {
          phone : this.phone,
          code : this.code,
          password : this.pass,
          repassword : this.pass1
        };
        if(params.phone===""){
          this.$message.error('请输入手机号码!');
        }else if(!this.checkPhone(this.phone)){
          this.$message.error('手机号码有误,请重新输入!');
        }else if(params.code===""){
          this.$message.error('请输入短信验证码!');
        }else if(params.password===""){
          this.$message.error('请输入密码!');
        }else if(params.repassword===""){
          this.$message.error('请再次输入密码!');
        }else if(params.password!==params.repassword){
          this.$message.error('密码不一致，请重新输入!');
        }else {
          //调用修改密码接口函数
          resetPasswordApi(params).then(res=>{
            if(res.errcode===1){
              this.$message({message: '修改成功！', type: 'success'});
              localStorage.setItem("accessToken",res.token);
              setTimeout(()=>{
                this.$router.push({path:'/login'})
              },2000)
            }else{
              this.$message({message:res.errmsg,type:'error'});
            }
          })
        }
      }

    },
    mounted(){
      this.getMediaInfo();
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
          color #475766
        .verify
          position absolute
          left 4.5rem
          font-size 0.16rem
        .el-icon-success
          color #177FE6
        .el-icon-error
          color #E51717
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
          background #177FE6
          border 2px solid #177FE6
          color white
          border-radius 3px
          text-align center
          cursor pointer
        .disabled
          background-color #ececec
          color #475766
          border 2px solid #ececec
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
        margin-top 0.41rem
        float right
      .active
        background #177FE6
        color white
        border 1px solid #177FE6
</style>
