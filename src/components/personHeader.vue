<template>
  <div class="container">
    <login-box :url="url"></login-box>
    <div class="content">
      <div class="logo-box fl"><router-link to="/"><img :src="logo" class="logo" alt=""/></router-link></div>
      <div class="nav fl">
        <router-link to="/media"  exact active-class="active">媒体账号</router-link>
        <router-link to="/material" active-class="active">素材管理</router-link>
        <a href="http://www.shenzan.com/Media" target="_blank">广告接单</a>
      </div>
      <div class="user-info-box fr">
        <img :src="mediaInfo.type===2?mediaInfo.imgurl:defaultHead" alt="" class="user-head" @click="goPerson">
        <span class="user-name" @click="goPerson">{{mediaInfo.phone}}</span>
        <span class="icon-select-box"><i class="el-icon-caret-bottom"></i></span>
        <div class="select-box">
          <router-link class="item" to="/person" tag="p">个人信息</router-link>
          <p class="item" @click="logout">退出</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import LoginBox from '@/components/loginBox'
  import { logoutApi } from '@/request/api'
  import { mapState,mapMutations,mapActions} from 'vuex'
  export default {
    name: "commonHeader",
    components:{LoginBox},
    data(){
      return {
        logo:require("@/assets/images/headerlogo.png"),
        defaultHead:require('@/assets/images/defaultHead.png'),
        url:''
      }
    },
    computed:{
      ...mapState('login',{
        mediaInfo:'mediaInfo',
      }),
    },
    methods:{
      ...mapMutations('login', {
        checkLoginState: 'checkLoginState',
      }),
      ...mapActions('login',{
        getMediaInfo:'getMediaInfo'
      }),
      //退出登陆
      logout(){
        var params = {token:localStorage.getItem("accessToken")};
        logoutApi(params).then((res)=>{
          console.log(res);
          if(res.errcode===1){
            this.$message({message:'退出成功!',type:'success'});
            localStorage.removeItem("accessToken");
            //this.getMediaInfo();
            this.checkLoginState();
            this.url = 'https://www.shenzan.com/Home/Media/logout';
            setTimeout(()=>{
              this.$router.push({path:'/login'})
            },1000);
          }else{
            this.$message({message: res.errmsg, type: 'error'});
          }
        })
      },
      //跳转个人中心
      goPerson(){
        this.$router.push({
          path:'/media'
        })
      }
    },
    mounted(){
      this.getMediaInfo();
    }
  }
</script>

<style lang="stylus" scoped>
  .container
    position fixed
    top 0
    left 0
    z-index 1000
    width 100%
    height 0.8rem
    font-size 0.16rem
    background rgba(255, 255, 255, 1)
    box-shadow 0 2px 10px 0 rgba(240, 245, 243, 0.35)
    border-bottom  1px solid #ececec
    background-blend-mode multiply
    .content
      position relative
      width 12rem
      height 0.8rem
      line-height 0.8rem
      margin 0 auto
      .logo-box
        width 1.04rem
        height 0.8rem
        a
          display flex
          width 100%
          height 100%
          justify-content center
          align-content center
          align-items center
          .logo
            width 1.04rem
            height 0.26rem
      .nav
        margin-left 1.2rem
        a
          font-size 16px
          color #475766
          margin-right 0.81rem
          cursor pointer
        .active
          color #177FE6
      .user-info-box
        position relative
        display flex
        align-items center
        height 0.8rem
        cursor pointer
        color #475766
        &:hover .select-box
          display inline-block
        .user-head
          width 0.24rem
          height 0.24rem
          border-radius 100%
          margin-right 0.05rem
        .user-name
          font-size 0.15rem
        .select-box
          display none
          margin-left 0.1rem
          position absolute
          top 100%
          z-index 100
          width 100%
          background-color white
          border-radius 0 0 4px 4px
          box-shadow 0 0.1rem 0.8rem 0 rgba(127, 183, 255, 0.25)
          background-blend-mode multiply

          .item
            text-align center
            width 100%
            height 0.5rem
            line-height 0.5rem
            font-size 0.16rem
            cursor pointer
            font-weight 500

            &:hover
              background-color #ececec
              color #177FE6
          &:before
            position absolute
            top -0.21rem
            left 0.45rem
            content ''
            border 0.1rem solid transparent
            border-bottom 0.1rem solid #fff
</style>
