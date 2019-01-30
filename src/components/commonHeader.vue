<template>
  <div class="box">
    <div class="container" id="container">
      <login-box :url="url"></login-box>
      <div class="content">
        <div class="logo-box fl">
          <router-link to="/">
            <img :src="logo" class="logo"/>
          </router-link>
        </div>
        <div class="nav fl">
          <router-link to="/" exact active-class="active">首页</router-link>
          <router-link to="/download" active-class="active">下载</router-link>
          <span>应用
          <div class="apply-box">
           <!-- <a class="item" href="http://www.mbian.com/hot.html">热点中心</a>-->
            <router-link class="item" to="/hot">热点中心</router-link>
            <router-link class="item" to="/style">样式中心</router-link>
          </div>
        </span>
          <router-link to="/help" active-class="active">帮助</router-link>
          <a href="http://www.shenzan.com/" target="_blank">推广盈利</a>
        </div>
        <div class="btn-box fr" v-show="!isLogin">
          <router-link to="/login" class="btn-login" tag="div">登录</router-link>
          <router-link to="/reg" class="btn-login btn-reg" tag="div">注册</router-link>
        </div>
        <div class="user-info-box fr" v-show="isLogin">
          <img :src="mediaInfo.type===2?mediaInfo.imgurl:defaultHead" alt="" class="user-head" @click="goPerson">
          <span class="user-name" @click="goPerson">{{mediaInfo.phone}}</span>
          <span class="icon-select-box">
          <i class="el-icon-caret-bottom"></i>
            <div class="select-box">
              <router-link class="item" to="/person" tag="p">个人信息</router-link>
              <p class="item" @click="logout">退出</p>
            </div>
        </span>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import {mapState, mapMutations, mapActions} from 'vuex'
  import LoginBox from '@/components/loginBox'
  export default {
    name: "commonHeader",
    components: {LoginBox},
    data() {
      return {
        logo: require("@/assets/images/headerlogo.png"),
        showApply: false,
        defaultHead: require('@/assets/images/defaultHead.png'),
        url: ''
      }
    },
    computed: {
      ...mapState('login', {
        mediaInfo: 'mediaInfo',
        isLogin: 'isLogin',
      })
    },
    methods: {
      ...mapMutations('login', {
        checkLoginState: 'checkLoginState',
      }),
      ...mapActions('login', {
        getMediaInfo: 'getMediaInfo',
      }),
      //退出登陆
      logout() {
        debugger;
        var params = {token: localStorage.getItem("accessToken")};
        logoutApi(params).then((res) => {
          console.log(res);
          if (res.errcode === 1) {
            this.$message({message: '退出成功!', type: 'success'});
            localStorage.removeItem("accessToken");
            //this.getMediaInfo();
            this.checkLoginState();
            this.url = 'https://www.shenzan.com/Home/Media/logout';
            setTimeout(() => {
              this.$router.push({path: '/login'})
            }, 1000);
          }else{
            this.$message({message: res.errmsg, type: 'error'});
          }
        })
      },
      //跳转个人中心
      goPerson() {
        this.$router.push({
          path: '/media'
        })
      }
    },
    mounted() {
      this.getMediaInfo();
    }
  }
</script>

<style lang="stylus" scoped>
  @media screen and (max-width: 768px)
      #container
        height 1.8rem!important
        line-height 1.8rem!important
      .content
        width 100% !important
        height 1.8rem!important
        line-height 1.8rem!important
        .nav
           a,span
             font-size 12px!important
        .user-info-box,.logo-box
          height 1.8rem!important
          line-height 1.8rem!important
        .icon-select-box
          height auto!important
    @media screen and (min-width: 769px)
      width 12rem
  .container
    position fixed
    top 0
    left 0
    width 100%
    height 0.8rem
    font-size 0.16rem
    background rgba(255, 255, 255, 1)
    box-shadow 0 2px 10px 0 rgba(240, 245, 243, 0.35)
    border-bottom 1px solid #ececec
    background-blend-mode multiply
    z-index 1000
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

        a, span
          display inline-block
          height 0.8rem
          line-height 0.8rem
          font-size 16px
          color #475766
          margin-right 0.81rem
          cursor pointer

        .active
          color #177FE6

        span
          position relative
          &:hover .apply-box
            display block
          .apply-box
            display none
            position absolute
            left 50%
            top 100%
            margin-left -0.66rem
            width 1.32rem
            background-color white
            border-radius 0 0 4px 4px
            color #475766
            box-shadow 0 0.1rem 0.8rem 0 rgba(127, 183, 255, 0.25)
            background-blend-mode multiply

            a
              width 100%
              text-align center
              height 0.5rem
              line-height 0.5rem
              display block
              font-size 14px

              &:hover
                color #177FE6
                background-color #ececec

                &:last-child
                  border-radius 0 0 4px 4px

      .btn-box
        display flex
        div
          width 0.88rem
          height 0.4rem
          line-height 0.4rem
          text-align center
          display flex
          justify-content center
          align-items center
          background rgba(23, 127, 230, 1)
          border 1px solid rgba(23, 127, 230, 1)
          border-radius 2px
          cursor pointer
          color white
          font-size 0.16rem
          margin-top 0.2rem

        .btn-reg
          background-color white
          color #177FE6
          border 1px solid #177FE6
          margin-left 0.05rem

      .user-info-box
        position relative
        display flex
        justify-content center
        align-items center
        height 0.8rem
        line-height 0.8rem
        cursor pointer
        color #475766
        &:hover .select-box
          display block
        .user-head
          width 0.24rem
          height 0.24rem
          border-radius 100%
          margin-right 0.05rem
        .user-name
          font-size 0.15rem
        .icon-select-box
          display inline-block
          margin-left 0.1rem
          width 0.5rem
          height 0.8rem
        .select-box
          display none
          position absolute
          left 0
          top 100%
          z-index 100
          width 80%
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
  .container1
    position fixed
    top 0
    left 0
    z-index 1000
    width 100%
    height 35px
    line-height 35px
    padding 0 10px
    background-color white
    background rgba(255, 255, 255, 1)
    box-shadow 0 2px 10px 0 rgba(240, 245, 243, 0.35)
    border-bottom 1px solid #ececec
    background-blend-mode multiply
</style>
