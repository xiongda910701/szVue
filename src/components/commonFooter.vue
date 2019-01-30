<template>
  <div class="container">
    <div class="content">
      <ul class="list">
        <li class="item">
          <dl>
            <dd><img :src="footerlogo" class="logo" alt="logo"/></dd>
            <dd class="phone"><i class="iconfont icon-dianhua"></i>0571-87881699</dd>
          </dl>
        </li>
        <li class="item">
          <dl>
            <dt>应用</dt>
            <dd><a href="https://www.mbian.com/hot.html">热点中心</a></dd>
            <dd><router-link to="/style">样式中心</router-link></dd>
          </dl>
        </li>
        <li class="item">
          <dl>
            <dt>帮助</dt>
            <dd><router-link :to="{path:'/help',query:{position:'install'}}">安装问题</router-link></dd>
            <dd><router-link :to="{path:'/help',query:{position:'common'}}">常见问题</router-link></dd>
            <dd><router-link :to="{path:'/help',query:{position:'safety'}}">安全问题</router-link></dd>
          </dl>
        </li>
        <li class="item">
          <dl>
            <dt>关于</dt>
            <dd><router-link :to="{path:'/about',query:{type:'introduce'}}">美编简介</router-link></dd>
            <dd><router-link :to="{path:'/about',query:{type:'contact'}}">联系方式</router-link></dd>
            <dd><router-link to="/feedback">问题反馈</router-link></dd>
          </dl>
        </li>
        <li class="item">
          <dl>
            <dt class="desc"><img :src="mbzsQrcode" alt=""></dt>
            <dd>关注美编助手</dd>
          </dl>
        </li>
        <li class="item">
          <dl>
            <dt class="desc"><img :src="imgPath" alt=""></dt>
            <dd style="text-align: center">产品经理</dd>
          </dl>
        </li>
      </ul>
      <div class="friend-link">
        <div class="link-list">
          <span class="key">友情链接：</span>
          <a href="http://www.shenzan.com/" target="_blank">神赞</a>
          <a href="https://mp.weixin.qq.com/" target="_blank">微信公众平台</a>
          <a href="https://weixin.sogou.com/" target="_blank">搜狗微信</a>
          <a href="https://weibo.com/" target="_blank">新浪微博</a>
          <a href="http://top.baidu.com/" target="_blank">百度热榜</a>
        </div>
      </div>
      <div class="copyright">Copyright © 杭州神赞网络技术有限公司-美编</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "commonFooter",
    data(){
      return {
        footerlogo:require('@/assets/images/footerlogo.png'),
        mbzsQrcode:require('@/assets/images/mbzsQrcode.jpg'),
        imgPath:require('@/assets/images/kf.png')
      }
    },
  }
</script>

<style lang="stylus" scoped>
  @media screen and (max-width: 768px)
    @import "./css/footer/mobile.styl"
  @media screen and (min-width: 769px)
    @import "./css/footer/pc.styl"
</style>
