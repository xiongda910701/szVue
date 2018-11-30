<template>
  <div class="container">
    <Header></Header>
    <Slider :sliderList="sliderList"></Slider>
    <extension-model :extensionModelList="extensionModelList"></extension-model>
    <media-resource></media-resource>
    <ad-case></ad-case>
    <clients :clientsList="clientsList"></clients>
    <guide-register :guideRegisterData="guideRegisterData"></guide-register>
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from '@/components/Header'
  import Slider from './slider'
  import ExtensionModel from './extensionModel'
  import MediaResource from './mediaResource'
  import AdCase from './adCase'
  import Clients from './clients'
  import GuideRegister from '@/components/guideRegister'
  import Footer from '@/components/footer'

  export default {
    name: 'Home',
    components:{
            Header,Slider,ExtensionModel,MediaResource,
            AdCase,Clients,GuideRegister,Footer
    },
    data () {
      return {
        sliderList:[{
          id:1,
          bgImg:require("@/assets/images/Banner3.png"),
          title:"3万+优质媒体资源 覆盖5亿粉丝用户",
          subTitle:"按需定制推广方案 智能匹配媒体精准投放 转化成本更低",
          navList:[
            {id:11,imgPath:require("@/assets/images/Icon1.png"),title:"精准投放",desc:"按需智能匹配 精准锁定目标用户"},
            {id:12,imgPath:require("@/assets/images/Icon2.png"),title:"阅读计费",desc:"成本可控 投放风险更低"},
            {id:13,imgPath:require("@/assets/images/Icon3.png"),title:"真实流量",desc:"双重防作弊机制 拒绝假号假量"},
            {id:14,imgPath:require("@/assets/images/Icon4.png"),title:"高效曝光",desc:"实时自动投放 快速覆盖上亿用户"},
          ]
        },{
          id:2,
          bgImg:require("@/assets/images/Banner4.png"),
          title:"海量广告资源 多种广告形式 24小时任意接单",
          subTitle:"充分利用空闲广告位资源 剩余流量持续变现",
          navList:[
            {id:21,imgPath:require("@/assets/images/Icon1.png"),title:"广告多样",desc:"广告资源丰富 品类全 形式多"},
            {id:22,imgPath:require("@/assets/images/Icon2.png"),title:"高额收益",desc:"多种广告组合接单 收益可观"},
            {id:23,imgPath:require("@/assets/images/Icon3.png"),title:"自由接单",desc:"品类、位置和时间 任意选择"},
            {id:24,imgPath:require("@/assets/images/Icon4.png"),title:"高效结算",desc:"高效结算 随时提现"},
          ]
        }],
        extensionModelList:[
          {
            id:1,
            bgImg:require("@/assets/images/bg.png"),
            title:"按位置推广",
            desc:"按需精选优质媒体，快速投放",
            desc1:"一手价格，平台担保交易",
            desc2:"免费数据跟踪，省心省力达成营销目标",
            url:"/ad.html"
          },{
            id:2,
            bgImg:require("@/assets/images/bg1.png"),
            title:"按阅读推广",
            desc:"投放条件自由设置，24小时推广",
            desc1:"分钟级跟踪监测，实时优化投放策略",
            desc2:"阅读计费，风险低，高效达成营销目标",
            url:"/ad.html"
          },
        ],
        clientsList:[
          {id:1,name:"书丛",imgPath:require("@/assets/images/Brand.png")},
          {id:2,name:"曲奇",imgPath:require("@/assets/images/Brand1.png")},
          {id:3,name:"凡客",imgPath:require("@/assets/images/Brand2.png")},
          {id:4,name:"青少年在线外教",imgPath:require("@/assets/images/Brand3.png")},
          {id:5,name:"小说优品",imgPath:require("@/assets/images/Brand4.png")},
          {id:6,name:"中国移动",imgPath:require("@/assets/images/Brand5.png")},
          {id:7,name:"奇热小说",imgPath:require("@/assets/images/Brand6.png")},
          {id:8,name:"淘宝网",imgPath:require("@/assets/images/Brand7.png")},
          {id:9,name:"京东",imgPath:require("@/assets/images/Brand8.png")},
          {id:10,name:"严选",imgPath:require("@/assets/images/Brand9.png")},
          {id:11,name:"奥迪",imgPath:require("@/assets/images/Brand10.png")},
          {id:12,name:"捷豹",imgPath:require("@/assets/images/Brand11.png")},
          {id:13,name:"吉普",imgPath:require("@/assets/images/Brand12.png")},
          {id:14,name:"招商银行",imgPath:require("@/assets/images/Brand13.png")},
          {id:15,name:"绿城集团",imgPath:require("@/assets/images/Brand14.png")},
          {id:16,name:"必要商城",imgPath:require("@/assets/images/Brand15.png")},
          {id:17,name:"滴滴打车",imgPath:require("@/assets/images/Brand16.png")}
        ],
        guideRegisterData:{
          imgPath:require("@/assets/images/Login_bg.png"),
          btnList:[{id:1,text:"自助开启推广",url:"#"},{id:1,text:"自助开启接单",url:"#"}]
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>

</style>
