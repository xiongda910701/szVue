<template>
  <div class="container">
    <person-header></person-header>
    <tool></tool>
    <div class="content">
      <div class="title">个人信息</div>
      <div class="box">
        <div class="user-info-box">
          <div class="item">
            <span class="key">手机号码</span>
            <span class="phone">{{mediaInfo.phone}}</span>
          </div>
          <div class="item item-wx">
            <span class="key wx">微信</span>
            <img :src="require('@/assets/images/wx.png')" alt="" v-show="mediaInfo.type===1">
            <span class="bind" v-show="mediaInfo.type===1" @click="getQrCode">绑定微信</span>
            <img :src="mediaInfo.type===2?mediaInfo.imgurl:defaultHead" alt="" v-show="mediaInfo.type===2">
            <span class="key" v-show="mediaInfo.type===2">{{mediaInfo.nc}}</span>
            <span class="bind" v-show="mediaInfo.type===2" @click="unbindClickHandle">解绑</span>
          </div>
        </div>
        <div class="user-info-box">
          <div class="item">
            <span class="key">联系人</span>
            <input type="text" class="input" v-model="contactName" readonly ref="contactName"/>
            <span class="text-color" @click="editName">{{nameText}}</span>
          </div>

          <div class="item">
            <span class="key qq">QQ</span>
            <input type="text" class="input" v-model="contactQQ" readonly ref="contactQQ"/>
            <span class="text-color" @click="editQQ">{{qqText}}</span>
          </div>

          <div class="item">
            <span class="key qq">微信</span>
            <input type="text" class="input" v-model="contactWx" readonly ref="contactWx"/>
            <span class="text-color" @click="editWX">{{wxText}}</span>
          </div>
        </div>
      </div>
      <form class="form">
        <div class="title">修改密码</div>
        <div class="input-item">
          <label>原密码</label>
          <input type="password" v-model="oldPass" placeholder="请输入密码" @input="checkInput"/>
        </div>
        <div class="input-item">
          <label>新密码</label>
          <input type="password" v-model="password" placeholder="密码至少6位" @input="checkInput"/>
        </div>
        <div class="input-item">
          <label>新密码</label>
          <input type="password" v-model="repassword " placeholder="请再次输入新密码" @input="checkInput"/>
        </div>
        <button type="button" class="btn-edit" :class="isActive?'active':''" @click="changePasswordHandle">修改密码</button>
      </form>
    </div>
    <!--二维码窗口开始-->
    <div class="qrCode-box" v-show="qrCodeState">
      <div class="content">
        <i class="el-icon-close" @click="closeQrCodeWindow"></i>
        <div class="title">
          <i class="el-icon-warning icon-gth"></i>
          <span>绑定微信</span>
        </div>
        <img :src="qrCode" alt="" v-show="!disabledQrCodeState">
        <img :src="require('@/assets/images/defaultQrCode@2x.png')" alt="" v-show="disabledQrCodeState" @click="refreshQrcode">
        <p class="desc">使用微信扫码登录</p>
      </div>
    </div>
    <!--二维码窗口结束-->
  </div>
</template>

<script>
  import PersonHeader from '@/components/personHeader'
  import Tool from '@/components/tool'
  import {changePasswordApi,getQrCodeApi,bindWxApi,unbindWxApi,editContactApi,getMediaInfoApi} from '@/request/api'
  import {mapState,mapActions,mapMutations} from 'vuex'
  export default {
    name: "person",
    components: {PersonHeader,Tool},
    data(){
      return{
        oldPass:'',
        password:'',
        repassword:'',
        qrCodeState:false,
        qrCode:'',
        disabledQrCodeState:false,
        timeId:'',
        defaultHead:require('@/assets/images/defaultHead.png'),
        isActive:false,
        contactName:'',
        contactQQ:'',
        contactWx:'',
        nameText:'修改',
        qqText:'修改',
        wxText:'修改'
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
      ...mapMutations('login',{
        checkLoginState:'checkLoginState'
      }),
      //手机号码验证
      checkPhone(phone){
        if(!(/^1[3456978]\d{9}$/.test(phone))){
          return false;
        }else {
          return true;
        }
      },
      //输入监测函数
      checkInput(){
        if(this.oldPass===""||this.password===""||this.repassword===""){
          this.isActive = false;
        }else{
          this.isActive = true;
        }
      },
      //获取媒体信息函数
      getMediaInfo(){
        let token = localStorage.getItem("accessToken");
        getMediaInfoApi({token:token}).then((res)=>{
          console.log(res);
          if(res.errcode===1){
            this.contactName = res.data.name;
            this.contactQQ = res.data.qq;
            this.contactWx= res.data.wx;
          }else{
            Message.error(res.errmsg);
          }
        })
      },

      //获取微信登录二维码函数
      getQrCode(){
        getQrCodeApi({type:2}).then(res => {
          console.log(res);
          if(res.errcode===1){
            this.qrCode = res.url;
            this.disabledQrCodeState = false;
            this.qrCodeState =true;
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
        let token = localStorage.getItem("accessToken");
        if(session){
          bindWxApi({token:token,sess:session}).then(res => {
            console.log(res);
            if(res.errcode===1){
              //绑定微信成功,二维码消失,显示解绑按钮和微信昵称和微信头像
              this.qrCodeState = false;
              this.qrCode = "";
              window.clearInterval(this.timeId);
              localStorage.removeItem("session");
              this.$message({type:'success',message:'绑定微信成功!'});
              this.getMediaInfo();//刷新媒体用户数据
              this.checkLoginState();//改变登录状态
            }else if(res.errcode===201){
              //二维码失效
              this.qrCode = "";
              this.disabledQrCodeState = true;
              window.clearInterval(this.timeId);
            }else if(res.errcode===0){
              window.clearInterval(this.timeId);
              this.$alert(res.errmsg, '美编', {
                confirmButtonText: '确定',
                type: 'warning'
              }).then(res=>{
                this.qrCodeState = false;
              });
            }
          })
        }
      },

      //修改联系人和qq接口函数
      editContact(params,type){
        editContactApi(params).then(res=>{
          if(res.errcode===1){
            debugger;
            this.$message({type:'success',message:'修改成功!'});
            this.getMediaInfo();
            if(type==='name'){
              let input_name = this.$refs.contactName;
              $(input_name).attr('readonly','readonly').css('border','1px solid #CFDAE6');
              this.nameText = '修改';
            }else if(type==='qq'){
              let input_qq = this.$refs.contactQQ;
              $(input_qq).attr('readonly','readonly').css('border','1px solid #CFDAE6');
              this.qqText = '修改';
            }else{
              let input_wx = this.$refs.contactWx;
              $(input_wx).attr('readonly','readonly').css('border','1px solid #CFDAE6');
              this.wxText = '修改';
            }
          }else{
            this.$message({message: res.errmsg, type: 'error'});
          }
        })
      },
      //二维码刷新事件
      refreshQrcode(){
        this.getQrCode();
      },
      //关闭扫码窗口
      closeQrCodeWindow(){
        this.qrCodeState = false;
        this.qrCode="";
        window.clearInterval(this.timeId);
      },
      //点击解绑事件
      unbindClickHandle(){
        this.$confirm('您确定要解除绑定的微信账号吗?', '美编', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          //确定回调事件
          let token = localStorage.getItem("accessToken");
          unbindWxApi({token:token}).then(res=>{
            console.log(res);
            if(res.errcode===1){
              this.qrCode = "";
              this.$message({type:'success',message:'解绑成功!'});
              this.getMediaInfo();
            }else{
              this.$message({message: res.errmsg, type: 'error'});
            }
          })
        })
      },

      //点击修改联系人
      editName(){
        let state = this.nameText;
        if(state==='修改'){
          let input_name = this.$refs.contactName;
          $(input_name).removeAttr('readonly').css('border','1px solid #8FA1B3').focus();
          this.nameText = '保存';
        }else{
          let params = {token:localStorage.getItem("accessToken"),name:this.contactName,qq:this.contactQQ,wechat:this.contactWx};
          this.editContact(params,'name');
        }
      },
      //点击修改QQ
      editQQ(){
        let state = this.qqText;
        if(state==='修改'){
          let input_qq = this.$refs.contactQQ;
          $(input_qq).removeAttr('readonly').css('border','1px solid #8FA1B3').focus();
          this.qqText = '保存';
        }else{
          let params = {token:localStorage.getItem("accessToken"),name:this.contactName,qq:this.contactQQ,wechat:this.contactWx};
          this.editContact(params,'qq');
        }
      },
      //点击修改微信
      editWX(){
        let state = this.wxText;
        if(state==='修改'){
          let input_wx = this.$refs.contactWx;
          $(input_wx).removeAttr('readonly').css('border','1px solid #8FA1B3').focus();
          this.wxText = '保存';
        }else{
          let params = {token:localStorage.getItem("accessToken"),name:this.contactName,qq:this.contactQQ,wechat:this.contactWx};
          this.editContact(params,'wx');
        }
      },
      //点击修改按钮事件
      changePasswordHandle(){
        let phone = this.mediaInfo.phone;
        if(!this.checkPhone(phone)){
          this.$message.error('手机格式不正确！');
        }else if(this.oldPass===""){
          this.$message.error('请输入原密码！');
        }else if(this.password===""){
          this.$message.error('请输入新密码！');
        }else if(this.repassword===""){
          this.$message.error('请再次输入新密码！');
        }else if(this.password!==this.repassword){
          this.$message.error('两次输入密码不一致，请重新输入！');
        }else{
          let token = localStorage.getItem('accessToken');
          let params = {token:token, phone:phone, oldPass:this.oldPass, password:this.password, repassword:this.repassword};
          changePasswordApi(params).then(res=>{
            console.log(res);
            if(res.errcode===1){
              this.$message({message: '修改密码成功！', type: 'success'});
              localStorage.removeItem("accessToken");
              this.checkLoginState();
              this.getMediaInfo();
              this.$router.push({path:'/login'});
            }else{
              this.$message({message: res.errmsg, type: 'error'});
            }
          })
        }
      }
    },
    mounted(){
      this.getMediaInfo();
    },
    destroyed(){
      window.clearInterval(this.timeId);
    }
  }
</script>

<style lang="stylus" scoped>
  .content
    font-family PingFang-SC-Medium
    width 12rem
    height 6.6rem
    margin 1.71rem auto 0 auto
    background-color white
    box-shadow 0 2px 10px 0 #F0F3F5
    border-radius 4px
    padding 0.4rem
    box-sizing border-box
    .title
      font-size 0.28rem
      font-weight 500
      color #475766
    .box
      font-size 0.16rem
      margin-top 0.41rem
      border-bottom 1px dashed  #CFDAE6
      .user-info-box
        display flex
        flex-wrap nowrap
        margin-bottom 0.3rem
        .item-wx
          width 6rem
        .item
          width 3rem
          .key
            color #7A8A99
          .phone
            color #475766
          .input
            height 0.3rem
            width 1.6rem
            border-radius 4px
            text-indent 0.1rem
            border 1px solid #CFDAE6
            color #475766
          .text-color
            color #177FE6
            margin-left 0.1rem
            cursor pointer
          img
            width 0.24rem
            height 0.24rem
            margin 0 0.07rem 0 0.1rem
            vertical-align middle
          .bind
            color #177FE6
            cursor pointer
    .form
      .title
        margin 0.4rem 0
      .input-item
        font-size 0.16rem
        color #7A8A99
        margin-bottom 0.24rem
        label
          width 0.63rem
          height 0.15rem
          font-size 0.16rem
          color #7A8A99
          line-height 0.2rem
        input
          width 3.2rem
          height 0.4rem
          background #FFFFFF
          border 1px solid #CFDAE6
          border-radius 4px
          margin-left 0.4rem
          text-indent 0.16rem
      .btn-edit
        width 1.2rem
        height 0.4rem
        background #CFDAE6
        font-size 0.16rem
        border-radius 4px
        border 1px solid #CFDAE6
        margin-left 1rem
        color white
        cursor pointer
      .active
        background-color #177FE6
        color white

  .qrCode-box
    position fixed
    display flex
    align-items center
    justify-content center
    left 0
    right 0
    top 0
    bottom 0
    background-color rgba(0,0,0,0.5)
    .content
      position relative
      width 4.8rem
      height 4rem
      background-color white
      box-sizing border-box
      padding 0.4rem
      .el-icon-close
        position absolute
        right 0.24rem
        top 0.24rem
        font-size 0.24rem
        cursor pointer
        color #475766
      .title
        font-size 0.18rem
        color #475766
        .icon-gth
          color #FFAA00
      img
        display block
        width 2.3rem
        height 2.3rem
        margin 0.27rem 0 0 0.85rem
      .desc
        font-size 0.16rem
        color #7A8A99
        text-align center
</style>
