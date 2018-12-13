<template>
  <div>
    <div class="container">
      <ul class="tab-list">
        <li class="item" :class="index==item.id?'active':''" v-for="item in list" :key="item.id" @click="changeTab(item.id)">
          <img :src="item.imgPath" :alt="item.name"/>
          <span class="name">{{item.name}}</span>
        </li>
      </ul>
    </div>

    <div class="content">
      <!--chrome start-->
      <div class="list-box" v-show="index==1?true:false">
        <div class="left">
          <ul class="list">
            <li>1.点击<span class="color-text">“立即下载”</span>，打开所在文件夹</li>
            <li>2.浏览器输入 chrome://extensions/，进入扩展中心，拖拽安装文件到浏览器</li>
            <li>3.点击<span class="color-text">“添加扩展程序”</span>，完成安装，<span class="color-text">点击查看详细安装教程</span></li>
          </ul>
          <button class="btn-download" type="button">
            立即下载 <i class="iconfont icon-xiazai1"></i>
          </button>
          <div class="version">当前版本：2018-05-05 v1.3.8</div>
        </div>
        <div class="right"><img :src="require('@/assets/images/chromeState@2x.png')" alt=""></div>
      </div>
      <!--chrome end-->

      <!--qq start-->
      <div class="list-box" v-show="index==2?true:false">
        <div class="left">
          <ul class="list">
            <li>1.点击<span class="color-text">“立即下载”</span>，打开所在文件夹</li>
            <li>2.浏览器进入应用中心，拖拽安装文件到浏览器</li>
            <li>3.点击<span class="color-text">“添加扩展程序”</span>，完成安装，<span class="color-text">点击查看详细安装教程</span></li>
          </ul>
          <button class="btn-download" type="button">
            立即下载 <i class="iconfont icon-xiazai1"></i>
          </button>
          <div class="version">当前版本：2018-05-05 v1.3.8</div>
        </div>
        <div class="right"><img :src="require('@/assets/images/qqState@2x.png')" alt=""></div>
      </div>
      <!--qq end-->

      <!--2345 start-->
      <div class="list-box" v-show="index==3?true:false">
        <div class="left">
          <ul class="list">
            <li>1.点击<span class="color-text">“立即下载”</span>，打开所在文件夹</li>
            <li>2.浏览器打开我的应用，进入管理，拖拽安装文件到浏览器</li>
            <li>3.点击<span class="color-text">“添加”</span>，安装完成，<span class="color-text">点击查看详细安装教程</span></li>
          </ul>
          <button class="btn-download" type="button">
            立即下载 <i class="iconfont icon-xiazai1"></i>
          </button>
          <div class="version">当前版本：2018-05-05 v1.3.8</div>
        </div>
        <div class="right"><img :src="require('@/assets/images/2345State@2x.png')" alt=""></div>
      </div>
      <!--2345 end-->

      <!--猎豹 start-->
      <div class="list-box" v-show="index==4?true:false">
        <div class="left">
          <ul class="list">
            <li>1.点击<span class="color-text">“立即下载”</span>，打开所在文件夹</li>
            <li>2.拖拽安装文件到浏览器</li>
            <li>3.勾选<span class="color-text">“访问您的敏感页面”</span>，并点击<span class="color-text">安装</span>，<span class="color-text">点击查看详细安装教程</span></li>
          </ul>
          <button class="btn-download" type="button">
            立即下载 <i class="iconfont icon-xiazai1"></i>
          </button>
          <div class="version">当前版本：2018-05-05 v1.3.8</div>
        </div>
        <div class="right"><img :src="require('@/assets/images/liebaoState@2x.png')" alt=""></div>
      </div>
      <!--猎豹 end-->

      <!--360极速 start-->
      <div class="list-box" v-show="index==5?true:false">
        <div class="left">
          <ul class="list">
            <li>1.点击<span class="color-text">“立即下载”</span>，打开所在文件夹</li>
            <li>2.拖拽安装文件到浏览器</li>
            <li>3.点击<span class="color-text">“添加”</span>，完成安装，<span class="color-text">点击查看详细安装教程</span></li>
          </ul>
          <button class="btn-download" type="button">
            立即下载 <i class="iconfont icon-xiazai1"></i>
          </button>
          <div class="version">当前版本：2018-05-05 v1.3.8</div>
        </div>
        <div class="right"><img :src="require('@/assets/images/360jsState@2x.png')" alt=""></div>
      </div>
      <!--360极速 end-->

      <!--360安全 start-->
      <div class="list-box" v-show="index==6?true:false">
        <div class="left">
          <ul class="list">
            <li>1.点击<span class="color-text">“立即下载”</span>，打开所在文件夹</li>
            <li>2.拖拽安装文件到浏览器</li>
            <li>3.点击<span class="color-text">“添加”</span>，完成安装，<span class="color-text">点击查看详细安装教程</span></li>
          </ul>
          <button class="btn-download" type="button">
            立即下载 <i class="iconfont icon-xiazai1"></i>
          </button>
          <div class="version">当前版本：2018-05-05 v1.3.8</div>
        </div>
        <div class="right"><img :src="require('@/assets/images/360saftyState@2x.png')" alt=""></div>
      </div>
      <!--360安全 end-->
    </div>
  </div>
</template>

<script>
  export default {
    name: "downloadTab",
    data(){
      return {
        index:1,
        list:[
          {id:1,imgPath:require('@/assets/images/chrome-icon.png'),name:'谷歌浏览器'},
          {id:2,imgPath:require('@/assets/images/qq-icon.png'),name:'QQ浏览器'},
          {id:3,imgPath:require('@/assets/images/2345logo.png'),name:'2345浏览器'},
          {id:4,imgPath:require('@/assets/images/liebao-icon.png'),name:'猎豹浏览器'},
          {id:5,imgPath:require('@/assets/images/360-icon.png'),name:'360技术浏览器'},
          {id:6,imgPath:require('@/assets/images/360-2-icon.png'),name:'360安全浏览器'},
        ]
      }
    },
    methods:{
      changeTab(indexValue){
        this.index=indexValue;
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .container
    margin 0.6rem 0 0.42rem 4.6rem
    .tab-list
      overflow hidden
      .item
        float left
        width 1.6rem
        height 1.4rem
        text-align center
        margin-right 0.15rem
        cursor pointer
        position relative
        &.active
          background-color white
        img
          width 0.8rem
          height 0.81rem
          display block
          margin 0.1rem 0.4rem 0.15rem 0.4rem
        .name
          font-size 0.16rem
          color #475766
    .content
      width 12rem
      box-sizing border-box
      overflow hidden
      margin 0 auto
      padding 0.75rem 0.6rem 0.65rem 1.57rem
      background-color white
      position relative
      .list-box
        clear both
        .left
          float left
          text-align left
          .list
            width 100%
            li
              line-height 0.3rem
              font-size 0.15rem
              color #475766
              .color-text
                color #177FE6
          .btn-download
            width 1.7rem
            height 0.48rem
            background #177FE6
            color white
            font-size 0.18rem
            border 1px solid #177FE6
            box-shadow 0 1px 4px 0 rgba(138, 230, 188, 0.35)
            border-radius 4px
            margin-top 0.46rem
            margin-bottom 0.16rem
            cursor pointer
          .version
            font-size 0.12rem
            color #7A8A99
        .right
          float right
          img
            width 3.2rem
            height 2rem
</style>
