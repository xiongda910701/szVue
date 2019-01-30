<template>
  <div class="container">
    <!--chrome-->
    <div class="content" v-show="index==='chrome'">
      <div class="title">谷歌浏览器详细安装教程：</div>
      <div class="desc">
        1.进入插件下载页面
        <span class="color">https://www.mbian.com/#/download</span>
        ，选择谷歌浏览器，点击
        <a href="#">“立即下载”</a>
      </div>
      <img :src="require('@/assets/images/install/chrome1.gif')" alt="">
      <div class="desc">
        2.浏览器输入
        <span class="color">chrome://extensions/</span>
        ，进入扩展程序，或点击
        <span class="color">更多工具-扩展程序</span>
      </div>
      <img :src="require('@/assets/images/install/chrome2.gif')" alt="">
      <div class="desc">
        3.下载完成后，打开安装文件所在的文件夹，找到后缀名为
        <span class="color">.crx</span>
        的文件
      </div>
      <img :src="require('@/assets/images/install/chrome3.gif')" alt="">
      <div class="desc">
        4.将安装文件拖拽到扩展程序页面，弹窗点击
        <span class="color">“添加扩展程序”</span>
      </div>
      <img :src="require('@/assets/images/install/chrome4.gif')" alt="">
      <div class="desc">5.安装完成后，浏览器右上角会出现美编助手图标</div>
      <img :src="require('@/assets/images/install/chrome.png')" alt="" class="img">
    </div>
    <!--chrome-->

    <!--qq-->
    <div class="content" v-show="index==='qq'">
      <div class="title">QQ浏览器详细安装教程：</div>
      <div class="desc">
        1.进入插件下载页面
        <span class="color">https://www.mbian.com/#/download</span>
        ，选择QQ浏览器，点击
        <a href="#">“立即下载”</a>
      </div>
      <img :src="require('@/assets/images/install/QQ01.gif')" alt="">
      <div class="desc">
        2.浏览器输入
        <span class="color">qqbrowser://extensions/</span>
        ，进入应用中心，或点击
        <span class="color">菜单-应用中心</span>进入
      </div>
      <img :src="require('@/assets/images/install/QQ02.gif')" alt="">
      <div class="desc">
        3.下载完成后，打开安装文件所在的文件夹，找到后缀名为
        <span class="color">.crx</span>
        的文件
      </div>
      <img :src="require('@/assets/images/install/QQ03.gif')" alt="">
      <div class="desc">
        4.将安装文件拖拽到扩展程序页面，弹窗点击
        <span class="color">“添加扩展程序”</span>
      </div>
      <img :src="require('@/assets/images/install/QQ04.gif')" alt="">
      <div class="desc">5.安装完成后，浏览器右上角会出现美编助手图标</div>
      <img :src="require('@/assets/images/install/QQ.png')" alt="" class="img">
    </div>
    <!--qq-->

    <!--2345-->
    <div class="content" v-show="index==='2345'">
      <div class="title">2345浏览器详细安装教程：</div>
      <div class="desc">
        1.进入插件下载页面
        <span class="color">https://www.mbian.com/#/download</span>
        ，选择2345浏览器，点击
        <a href="#">“立即下载”</a>
      </div>
      <img :src="require('@/assets/images/install/23451.gif')" alt="">
      <div class="desc">
        2.浏览器输入
        <span class="color">chrome://extensions/</span>
        ，或进入
        <span class="color">应用中心-管理</span>
      </div>
      <img :src="require('@/assets/images/install/23452.gif')" alt="">
      <div class="desc">
        3.下载完成后，打开安装文件所在的文件夹，找到后缀名为
        <span class="color">.crx</span>
        的文件
      </div>
      <img :src="require('@/assets/images/install/23453.gif')" alt="">
      <div class="desc">
        4.将安装文件拖拽到扩展程序页面，弹窗点击
        <span class="color">“添加”</span>
      </div>
      <img :src="require('@/assets/images/install/23454.gif')" alt="">
      <div class="desc">5.安装完成后，浏览器右上角会出现美编助手图标</div>
      <img :src="require('@/assets/images/install/2345.png')" alt="">
    </div>
    <!--2345-->

    <!--liebao-->
    <div class="content" v-show="index==='lb'">
      <div class="title">猎豹浏览器详细安装教程：</div>
      <div class="desc">
        1.进入插件下载页面,
        <span class="color">http://www.shenzan.com/extension.html</span>
        ，选择猎豹浏览器，点击
        <a href="#">“立即下载”</a>，下载完成后浏览器会自动安装插件，弹窗勾选“访问你的敏感页面 ”，点击
        <span class="color">“安装”</span>
      </div>
      <img :src="require('@/assets/images/install/lb1.gif')" alt="">
      <div class="desc">2.安装完成后，浏览器右上角会出现美编助手图标</div>
      <img :src="require('@/assets/images/install/lb.png')" alt="" class="img">
    </div>
    <!--liebao-->

    <!--360js-->
    <div class="content" v-show="index==='js'">
      <div class="title">360极速浏览器详细安装教程：</div>
      <div class="desc">
        1.进入插件下载页面
        <span class="color">https://www.mbian.com/#/download</span>
        ，选择360极速浏览器，点击
        <a href="#">“立即下载”</a>
      </div>
      <img :src="require('@/assets/images/install/js1.gif')" alt="">
      <div class="desc">
        2.下载完成后，打开安装文件所在的文件夹，找到后缀名为
        <span class="color">.crx</span>
        的文件
      </div>
      <img :src="require('@/assets/images/install/js2.gif')" alt="">
      <div class="desc">
        3.将安装文件拖拽至浏览器任意页面，弹窗点击
        <span class="color">“添加”</span>
      </div>
      <img :src="require('@/assets/images/install/js3.gif')" alt="">
      <div class="desc">4.安装完成后，浏览器右上角会出现美编助手图标</div>
      <img :src="require('@/assets/images/install/360js.png')" alt="" class="img">
    </div>
    <!--360js-->

    <!--360aq-->
    <div class="content" v-show="index==='aq'">
      <div class="title">360安全浏览器详细安装教程：</div>
      <div class="desc">
        1.进入插件下载页面
        <span class="color">https://www.mbian.com/#/download</span>
        ，选择360安全浏览器，点击
        <a href="#">“立即下载”</a>
      </div>
      <img :src="require('@/assets/images/install/aq1.gif')" alt="">
      <div class="desc">
        2.下载完成后，打开安装文件所在的文件夹，找到后缀名为
        <span class="color">.crx</span>
        的文件
      </div>
      <img :src="require('@/assets/images/install/aq2.gif')" alt="">
      <div class="desc">3.将安装文件拖拽到扩展程序页面，弹窗点击
        <span class="color">“添加扩展程序”</span>
      </div>
      <img :src="require('@/assets/images/install/aq3.gif')" alt="">
      <div class="desc">4.安装完成后，浏览器右上角会出现美编助手图标</div>
      <img :src="require('@/assets/images/install/360aq.png')" alt="" class="img">
    </div>
    <!--360aq-->
  </div>
</template>

<script>
  export default {
    name: "install",
    data(){
      return{
        index:'chrome'
      }
    },
    mounted(){
      let type = this.$route.query.type;
      this.index = type;
    }
  }
</script>

<style lang="stylus" scoped>
  .container
    width 100%
    height 100%
    background-color white
    .content
      width 12rem
      margin 0 auto
      padding 0.82rem 0 0.58rem 0
      background-color white
      overflow hidden
      .title
        font-size:24px;
        font-family:PingFang-SC-Bold;
        font-weight:bold;
        color:rgba(71,87,102,1);
        line-height:24px
      .desc
        font-size:16px;
        margin-top 0.58rem
        margin-bottom 0.19rem
        font-family:PingFang-SC-Medium;
        font-weight:500;
        color:rgba(102,102,102,1);
        line-height:24px;
        .color,a
          color #177FE6
      img
        display block
        width 100%
        height auto
        margin-bottom 0.49rem
        border 1px solid #CFDAE6
        box-sizing border-box
</style>
