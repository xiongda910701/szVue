<template>
  <div class="container">
    <common-header></common-header>
    <tool></tool>
    <login-box :url="url"></login-box>
    <div class="content">
      <div class="title">联系方式</div>
      <div class="input-item">
        <i class="iconfont icon-yonghu1"></i>
        <input type="text" class="phone" v-model="name" placeholder="联系人" @input="checkInput"/>
      </div>
      <div class="input-item">
        <i class="iconfont icon-icon363601"></i>
        <input type="text" class="pass" v-model="qq" placeholder="QQ号码" @input="checkInput"/>
      </div>
      <div class="input-item">
        <i class="iconfont icon-weixin"></i>
        <input type="text" class="pass" v-model="wechat" placeholder="微信账号名" @input="checkInput"/>
      </div>
      <div class="btn-box">
        <button type="button" class="btn-confirm" :class="isActive?'active':''" @click="bindClickHandle">完成</button>
      </div>
    </div>
  </div>
</template>

<script>
  import CommonHeader from '@/components/commonHeader'
  import Tool from '@/components/tool'
  import LoginBox from '@/components/loginBox'

  import {phoneRegisterApi,createAccountApi} from '@/request/api'

  export default {
    name: "contact",
    components: {CommonHeader,LoginBox,Tool},
    data(){
      return{
        name:'',
        qq:'',
        wechat:'',
        isActive:false,
        url:''
      }
    },
    methods:{
      //输入监测函数
      checkInput(){
        if(this.name===""||this.qq===""||this.wx===""){
          this.isActive = false;
        }else{
          this.isActive = true;
        }
      },

      //定义注册函数
      register(params){
        phoneRegisterApi(params).then((res)=>{
          if(res.errcode===1){
            console.log(res);
            this.$message({message: '注册成功!', type: 'success'});
            setTimeout(()=>{
              //this.$router.push({path:'/login',query:{page:'reg'}});
              localStorage.removeItem("accessToken");
              localStorage.setItem("accessToken",res.token);
              this.$router.push({path:'/media'});
            },1000)
          }else{
            this.$message.error(res.errmsg);
          }
        })
      },

      //定义创建账号函数
      createAccount(params){
        createAccountApi(params).then((res)=>{
          console.log(res);
          if(res.errcode===1){
            //success
            this.$message({
              message: '绑定手机号码成功!',
              type: 'success'
            });
            localStorage.removeItem("session");
            localStorage.setItem("accessToken",res.token);
            this.url = 'https://www.shenzan.com/Home/Media/mbianL/s/'+res.token;
            setTimeout(()=>{
              this.$router.push({path:'/media'});
            },1000)
          }else if(res.errcode ===101) {
            this.$message.error("二维码已失效，请重新进入扫码绑定!");
            this.$router.push({path:'/reg'});
          }else if(res.errcode===0){
            this.$message.error(res.errmsg);
          }
        })
      },

      //完成按钮点击事件
      bindClickHandle(){
        debugger;
        var token = localStorage.getItem("session");
        if(this.name===""){
          this.$message.error("请输入联系人");
        }else if(this.qq===""){
          this.$message.error("请输入QQ号");
        }else if(this.wechat===""){
          this.$message.error("请输入微信账号");
        }else{
          var obj = {
            token:token,
            phone:this.$route.query.phone,
            code:this.$route.query.code,
            password:this.$route.query.password,
            repassword:this.$route.query.repassword,
            name:this.name,
            qq:this.qq,
            wechat:this.wechat,
            p:this.$route.query.p,
          };
          if(this.$route.query.page==='reg'){
            this.register(obj);//调用注册接口
          }else{
            this.createAccount(obj);//调用创建账号接口
          }
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
        width 1.6rem
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
</style>
