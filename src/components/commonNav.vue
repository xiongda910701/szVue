<template>
  <div class="container">
    <div class="content">
      <ul class="nav-box">
        <li class="item"
            v-for="item in userInfo.type==0?adRouteConfig:mediaRouteConfig"
            :class="item.isActive?'active':''"
            :key="item.id"
            :data-to="item.path"
            @click="goPage"
        >
          {{item.text}}
        </li>
      </ul>
      <div class="client-box">
        <img src="@/assets/images/a02.png" alt="">
        <span>专属客服</span>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    name: "CommonNav",
    data() {
      return {
        adRouteConfig: [
          {id: 1, path: "/ad", text: "首页", isActive: true},
          {id: 2, path: "/read", text: "按阅读推广", isActive: false},
          {id: 3, path: "/position", text: "按位置推广", isActive: false},
          {id: 4, path: "/finance", text: "财务管理", isActive: false},
          {id: 5, path: "/person", text: "用户中心", isActive: false}
        ],
        mediaRouteConfig: [
          {id: 1, path: "/media", text: "首页", isActive: true},
          {id: 2, path: "/read", text: "按阅读推广", isActive: false},
          {id: 3, path: "/position", text: "按位置推广", isActive: false},
          {id: 4, path: "/order", text: "订单管理", isActive: false},
          {id: 5, path: "/finance", text: "财务管理", isActive: false},
          {id: 6, path: "/person", text: "用户中心", isActive: false}
        ],
      }
    },
    computed:{
      ...mapState({
        userInfo:'userInfo'
      })
    },
    methods: {
      //定义获取当前页面函数
      getCurrentPage() {
        let url = window.location.hash;
        let page = url.substr(1);
        let type = this.userInfo.type;
        let data = [];
        if(type==0){
          data = this.adRouteConfig;
          data.forEach((item, index) => {
            item.isActive = false;
            if (item.path == page) {
              data[index].isActive = true
            }
          });
          this.adRouteConfig = data;
        }else{
          data = this.mediaRouteConfig;
          data.forEach((item, index) => {
            item.isActive = false;
            if (item.path == page) {
              data[index].isActive = true
            }
          });
          this.mediaRouteConfig = data;
        }
      },
      //定义点击跳转事件
      goPage(event) {
        let page = event.currentTarget.getAttribute("data-to");
        this.$router.push({path: page});
      }
    },
    mounted() {
      this.getCurrentPage();
    }
  }
</script>

<style lang="stylus" scoped>
  .container
    width 100%
    background #fafafa
    border-bottom 1px solid #dbdbdb
    .content
      width 1200px
      padding 0 0
      margin 0 auto
      overflow hidden
      .nav-box
        float left
        height 60px
        line-height 60px
        .item
          float left
          font-size 14px
          color #333
          width 100px
          height 60px
          line-height 60px
          margin-right 20px
          text-align center
          cursor pointer
          position relative
          &.active
            color #4cb5ff
            &::after
                content ''
                position absolute
                bottom 0
                left 0
                width 100%
                height 2px
                background-color  #4cb5ff
      .client-box
        float right
        height 35px
        line-height 35px
        padding 0 15px
        font-size 12px
        color white
        background-color #4cb5ff
        border-radius 3px
        cursor pointer
        margin-top 16px
        img
          display inline-block
          width 22px
          height 22px
          vertical-align middle
</style>
