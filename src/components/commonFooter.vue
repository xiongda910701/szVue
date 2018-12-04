<template>
    <div class="container">
      <div class="footer_main auto">
        <ul class="footer_col clearfix">
          <li v-for="item in list" :key="item.id">
            <div class="footer_nav">{{item.title}}</div>
            <div class="sub_list">
              <a :href="subItem.url" v-for="subItem in item.subTitle" :key="subItem.id">{{subItem.text}}</a>
            </div>
          </li>
        </ul>
      </div>
      <div class="footer-other clearfix auto">
        <div class="footer-other-left">
          <img :src="logo" alt="神赞logo" class="logo">
          <div class="footer_link clearfix">
            <div>友情链接：</div>
            <a target="_blank" :href="item.url" :key="item.id" v-for="item in link">{{item.name}}</a>
          </div>
          <div style="color:#999;">Copyright © 2016 杭州神赞网络技术有限公司 版权所有&nbsp;&nbsp;&nbsp;浙ICP备16035731号-1</div>
          <div class="beian">
            <div style="width:300px;margin:0 auto; padding:20px 0;">
              <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010502005280">
                <img :src="official">
                <p>浙公网安备 33010502005280号</p>
              </a>
            </div>
          </div>
        </div>
        <div class="QR_content fr">
          <img class="Footer_QR" :src="qr" alt="">
          <div>派单接单 关注神赞</div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "CommonFooter",
        data(){
          return {
            logo:require('@/assets/images/logo_white.png'),
            qr:require('@/assets/images/Footer_QR.jpg'),
            official:require('@/assets/images/official.png'),
            list:[
              {id:1, title:"关于神赞", subTitle:[{id:11,text:"公司简介",url:"#"}, {id:12,text:"联系我们",url:"#"},]},
              {id:2, title:"微信推广", subTitle:[{id:21,text:"广告主入驻",url:"#"}, {id:22,text:"推广流程",url:"#"}, {id:23,text:"推广案例",url:"#"}]},
              {id:3, title:"媒体接单", subTitle:[{id:31,text:"公众号入驻",url:"#"}, {id:32,text:"接单流程",url:"#"}, {id:33,text:"接单案例",url:"#"}]},
              {id:4, title:"公众号涨粉", subTitle:[{id:41,text:"WIFI涨粉",url:"#"}, {id:42,text:"文案涨粉",url:"#"}, {id:43,text:"贴片涨粉",url:"#"}]},
              {id:5, title:"广告形式", subTitle:[{id:51,text:"图文广告",url:"#"}, {id:52,text:"贴片广告",url:"#"}, {id:53,text:"选号直投",url:"#"}]},
              {id:6, title:"帮助中心", subTitle:[{id:11,text:"常见问题",url:"#"}, {id:12,text:"用户协议",url:"#"},]}
            ],
            link:[
              {id:1,url:"https://mp.weixin.qq.com",name:"微信公众平台"},
              {id:2,url:"https://wx.qq.com",name:"微信网页版"},
              {id:3,url:"https://weixin.sogou.com",name:"搜狗微信"},
              {id:4,url:"https://baijia.baidu.com",name:"百度百家"},
              {id:5,url:"https://weibo.com",name:"企鹅号"},
              {id:6,url:"https://www.xmyeditor.com",name:"微信编辑器"},
            ]
          }
        }
    }
</script>

<style lang="stylus" scoped>
  .container
    background #252525
    color #666
    overflow hidden
    .auto
      width 1200px
      margin 0 auto
    .footer_main
      padding-top 80px
      padding-bottom 65px
      margin-bottom 35px
      border-bottom 1px solid #45484c
      overflow hidden
      .footer_col
        display flex
        justify-content space-between
        &::before
          content ""
          display table
        li
          float left
          width 200px
          text-align center
          .footer_nav
            font-size 16px
            color #fff
            margin-bottom 16px
            line-height 1.5
            font-weight 400
          .sub_list a
            display block
            color #ccc
            font-size 14px
            line-height 1.5
            padding 4px 0

    .footer-other
      padding-bottom 40px
      overflow hidden
      .footer-other-left
        margin-top 15px
        float left
        .logo
          width 140px
          display block
          opacity 0.65
        .footer_link
          margin-top 20px
          div
            margin-left 0
            display inline
            color #999
          a
            color #999
            margin 0 15px
            line-height 26px
        .beian
          float right
          margin -40px -200px
          div
            width 300px
            margin 0 auto
            padding 20px 0
          a
            display inline-block
            text-decoration: none
            height 20px
            line-height 20px
            img
              float left
            p
              float left
              height 20px
              line-height 20px
              margin 0 0 0 5;
              color rgb(147, 147, 147)
      .QR_content
        text-align: center;
        color: #999;
        line-height: 24px;
        float right
        img
          width 120px
          height 120px
          display block
        div
          margin-top 4px
          font-size 14px
</style>
