<template>
  <div class="container">
    <common-header></common-header>
    <tool></tool>
    <login-box :url="url"></login-box>
    <div class="content">
      <router-link tag="span" class="back" to="/bindSelect">返回</router-link>
      <div class="title">绑定已有账号</div>
      <div class="input-item">
        <i class="iconfont icon-shoujihao"></i>
        <i class="el-icon-success verify" v-show="verifySuccess"></i>
        <i class="el-icon-error verify" v-show="verifyError"></i>
        <input type="text" class="phone" v-model="phone" placeholder="输入手机号" @input="checkInput"/>
      </div>
      <div class="input-item">
        <i class="iconfont icon-mima"></i>
        <input type="password" class="pass" v-model="password" placeholder="输入密码" autocomplete="off" @input="checkInput"/>
      </div>
      <div class="btn-box">
        <button type="button" class="btn-confirm" :class="isActive?'active':''" @click="bindClickHandle">确认绑定</button>
      </div>
    </div>
  </div>
</template>

<script>
  import CommonHeader from '@/components/commonHeader'
  import Tool from '@/components/tool'
  import LoginBox from '@/components/loginBox'
  import {bindAccountApi} from '@/request/api'


  export default {
    name: "bindAccount",
    components: {CommonHeader,LoginBox,Tool},
    data(){
      return{
        phone:'',
        password:'',
        isActive:false,
        url:'',
        verifySuccess:false,
        verifyError:false
      }
    },
    methods:{
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
      //定义绑定已有账号函数
      bindAccount(params){
        bindAccountApi(params).then(res=>{
          console.log(res);
          if(res.errcode===1){
            this.$message({type:'success',message:'恭喜您已经成功绑定微信！'});
            localStorage.setItem("accessToken",res.token);
            this.url = 'https://www.shenzan.com/Home/Media/mbianL/s/'+res.token;
            setTimeout(()=>{
              this.$router.push({path:'/media'});
            },1000)
          }else if(res.errcode===101){
            this.$message({message: res.errmsg, type: 'error'});
            this.$router.push({path:'/login'});
          }else{
            this.$message({message: res.errmsg, type: 'error'});
          }
        })
      },
      //绑定按钮点击事件
      bindClickHandle(){
        var token = localStorage.getItem("session");
        var params = {token:token,phone:this.phone,password:this.password};
        if(params.phone===""){
          this.$message.error("请输入手机号码");
        }else if(!this.checkPhone(parseInt(params.phone))){
          this.$message.error("请输入正确格式的手机号码");
        }else if(params.password===""){
          this.$message.error("请输入密码");
        }else{
          this.bindAccount(params);
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .content
    position relative
    width 6.4rem
    background-color white
    margin 2rem auto
    box-shadow 0 0.1rem 0.8rem 0 rgba(127,183,255,0.25)
    border-radius 8px
    text-align center
    padding 0.64rem 0.8rem
    box-sizing border-box
    .back
      position absolute
      top 0.3rem
      left 0.3rem
      font-size 0.16rem
      color #475766
      cursor pointer
    .title
      font-size 0.4rem
      color #177FE6
      font-weight 500
      margin-bottom 0.43rem
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
    .btn-box
      margin-top 0.4rem
      text-align right
      .btn-confirm
        width 2rem
        height 0.48rem
        color white
        background #CFDAE6
        border 1px solid #CFDAE6
        border-radius 4px
        margin-right 0.24rem
        font-size 0.24rem
        cursor pointer
      .active
        background #177FE6
        color white
        border 1px solid #177FE6
      .btn-cancel
        width 1.2rem
        height 0.48rem
        background-color white
        border:1px solid #177FE6
        border-radius:4px
        color #177FE6
        font-size 0.24rem
        cursor pointer
</style>
