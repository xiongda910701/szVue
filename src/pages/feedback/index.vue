<template>
  <div class="container">
    <common-header></common-header>
    <div class="content">
      <div  class="title">意见反馈</div>
      <div class="desc">如果您在插件的使用过程中遇到问题或对我们有任何意见建议，欢迎在此留言。我们将关注您的问题并尽快处理。</div>
      <form class="form">
        <input type="text" class="name" v-model="name" placeholder="输入您的姓名">
        <input type="email" class="email" v-model="email" placeholder="输入您的联系方式  手机/QQ/微信">
        <textarea class="text" v-model="text" placeholder="您的建议"></textarea>
        <button type="button" @click="commitHandle">提交</button>
      </form>
    </div>
    <common-footer></common-footer>
    <tool></tool>
  </div>
</template>

<script>
  import CommonHeader from '@/components/commonHeader'
  import CommonFooter from '@/components/commonFooter'
  import Tool from '@/components/tool'
  import { feedbackApi } from "../../request/api";

  export default {
    name: "feedBack",
    data(){
      return{
        name:'',
        email:'',
        text:''
      }
    },
    components: {CommonHeader,CommonFooter,Tool},
    methods:{
      //定义反馈接口函数
      feedback(params){
        feedbackApi(params).then(res=>{
          if(res.errcode ===1){
            this.$message({
              message: '感谢你的反馈',
              type: 'success'
            });
            this.$router.push('/');
          }else {
            this.$message.error(res.errmsg);
          }
        })
      },
      //定义提交按钮事件
      commitHandle(){
        let token = localStorage.getItem('accessToken');
        if(!token){
          this.$message.error('请登录!');
          this.$router.push('/login');
        }else if(this.name===''){
          this.$message.error('请填写联系人!');
        }else if (this.email===''){
          this.$message.error('请填写邮箱!');
        }else if (this.text===''){
          this.$message.error('请填写反馈意见!');
        }else{
          let params = {token:token,username:this.name,phone:this.email,message:this.text};
          this.feedback(params);
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .content
    width 12rem
    margin 1.2rem auto 0.4rem auto
    background-color white
    padding 1.2rem 0.4rem 0.4rem 0.4rem
    box-sizing border-box
    text-align center
    font-family MicrosoftYaHei
    font-weight 400
    .title
      font-size 0.48rem
      color rgba(71,87,102,1)
    .desc
      font-size 0.2rem
      color rgba(122,138,153,1)
      margin-top 0.39rem
    .form
      width 11.4rem
      margin-top 0.64rem
      display flex
      flex-wrap wrap
      justify-content space-between
      input
        width 5.58rem
        height 0.64rem
        background rgba(255,255,255,0)
        border 1px solid rgba(207,218,230,1)
        border-radius 4px
        text-indent 0.15rem
        color #7A8A99
        font-size 0.16rem
      .text
        width 11.4rem
        height 2.56rem
        margin-top 0.24rem
        background:rgba(255,255,255,0)
        border 1px solid rgba(207,218,229,1)
        box-sizing border-box
        border-radius 4px
        padding 0.15rem
        color #7A8A99
        font-size 0.16rem
      button
        width 1.2rem
        height 0.4rem
        margin-left 5.03rem
        margin-top 0.52rem
        border 1px solid rgba(23,127,230,1)
        background rgba(23,127,230,1)
        font-size 0.15rem
        font-family MicrosoftYaHei
        font-weight 400
        color rgba(255,255,255,1)
        border-radius 4px
        cursor pointer

</style>
