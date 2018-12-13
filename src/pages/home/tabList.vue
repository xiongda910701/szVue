<template>
  <div class="container">
      <div class="content">
        <ul class="list">
          <li class="item" :class="index==1?'active':''" @click="index=1">
            <i class="iconfont icon-zhanghaoguanli1"></i>
            <p>账号管理</p>
          </li>
          <li class="item" :class="index==2?'active':''" @click="index=2">
            <i class="iconfont icon-tuijianyangshi1"></i>
            <p>丰富样式</p>
          </li>
          <li class="item" :class="index==3?'active':''" @click="index=3">
            <i class="iconfont icon-neirongpaiban1"></i>
            <p>内容排版</p>
          </li>
          <li class="item" :class="index==4?'active':''" @click="index=4">
            <i class="iconfont icon-wenzhangdaoru1"></i>
            <p>文章导入</p>
          </li>
          <li class="item" :class="index==5?'active':''" @click="index=5">
            <i class="iconfont icon-youjianxiaoxi1"></i>
            <p>实时消息</p>
          </li>
        </ul>
        <div class="item-content">
          <div class="item-box" v-for="item in list" :key="item.id" v-show="item.id==index?true:false">
            <img :src="item.imgPath" alt="">
            <div class="desc">{{item.desc}}</div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
  export default {
    name: "tabList",
    data(){
      return {
        index:1,
        list:[
          {id:1,imgPath:require('@/assets/images/accountManage@2x.png'),desc:'登录插件自动获取已添加公众号，一经扫码登录，可在各公众号之间自由来回切换'},
          {id:2,imgPath:require('@/assets/images/style@2x.png'),desc:'海量样式任君选择，各种分类应有尽有，支持样式编辑，一键开启最美文章'},
          {id:3,imgPath:require('@/assets/images/contentCompose@2x.png'),desc:'告别手动调整，一键调节内容字间距和两端缩进距离，使排版更加简单'},
          {id:4,imgPath:require('@/assets/images/articleImport@2x.png'),desc:'通过复制主流媒体文章链接，可以直接导入该文章的所有内容，包括排版、样式'},
          {id:5,imgPath:require('@/assets/images/currentMessage@2x.png'),desc:'平台消息实时通知无错漏，无需跳转至平台查看，随时掌握最新动态，方便快捷'},
        ]
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .container
    width 100%
    background-color white
    font-size 0.16rem
    .content
      margin 1.24rem 3.6rem 1rem 3.6rem
      .list
        overflow hidden
        .item
          float left
          width 20%
          text-align center
          cursor pointer
          padding-bottom 0.2rem
          &.active
            p
              color #177FE6
              position relative
              z-index 1
              &::after
                content ""
                position absolute
                top 0.4rem
                left 1rem
                width 0.4rem
                height 0.04rem
                background-color #177FE6
                z-index 2
          i
            color #177FE6
            font-size 0.3rem
          p
            font-size 0.2rem
            font-family PingFang-SC-Medium
            font-weight 500
            color rgba(71,87,102,1)
            margin-top 0.13rem
      .item-content
        width 100%
        height 7.2rem
        margin-top 0.4rem
        border 1px solid rgba(230, 230, 230, 1)
        box-shadow 0 4px 10px 0 rgba(240,241,245,1)
        border-radius 3px
        img
          width 100%
          height 6.4rem
        .desc
          height 0.8rem
          line-height 0.8rem
          font-size 0.2rem
          font-family PingFang-SC-Medium;
          font-weight 500
          color rgba(71,87,102,1)
          text-align center

</style>
