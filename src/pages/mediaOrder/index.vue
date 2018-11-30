<template>
  <div class="container">
    <Header></Header>
    <jumbotron :jumbotronData="jumbotronData"></jumbotron>
    <order-advantage :orderAdvantageData="orderAdvantageData"></order-advantage>
    <promote-process :processData="processData"></promote-process>
    <order-case :orderCaseData="orderCaseData"></order-case>
    <guide-register :guideRegisterData="guideRegisterData"></guide-register>
    <footer3></footer3>
  </div>
</template>

<script>
  import Header from '@/components/public/Header'
  import Jumbotron from '@/components/public/jumbotron'
  import OrderAdvantage from './orderAdvantage'
  import PromoteProcess from '@/components/public/promoteProcess'
  import OrderCase from './orderCase'
  import GuideRegister from '@/components/public/guideRegister'
  import Footer3 from '@/components/public/footer'


  export default {
        name: "MediaOrder",
        components:{
              Header,Jumbotron,OrderAdvantage,PromoteProcess,GuideRegister,OrderCase,Footer3
        },
        data(){
          return {
            jumbotronData:{
              imgPath:require("@/assets/images/Media_banner1.png"),
              title:"广告类型、广告位置和投放时间任意选择",
              desc:"充分利用剩余流量持续变现 随时提现",
              btn_text:"我要接单",
              url:"#"
            },
            processData:{
              title:"接单流程",
              list:[
                {id:1,text:"注册登录媒体主"},
                {id:2,text:"添加接单公众号"},
                {id:3,text:"媒体主自主选择广告"},
                {id:4,text:"媒体执行推广并提交链接"},
                {id:5,text:"申请结算并等待平台验收"},
                {id:6,text:"订单完成"}
              ]
            },
            guideRegisterData:{
              imgPath:require("@/assets/images/Login_bg.png"),
              btnList:[{id:1,text:"自助开启接单",url:"#"}]
            },
            orderAdvantageData:{
              img:require("@/assets/images/MediaImg1.png"),
              list:[
                {id:1,imgPath:"",title:"自由接单",desc:"自由设置广告位置，投放时间，想推就推"},
                {id:2,imgPath:"",title:"广告多样",desc:"海量广告资源，品类丰富，形式多样"},
                {id:3,imgPath:"",title:"操作简单",desc:"广告无需审核，推广文案一键复制，直接推广"},
                {id:4,imgPath:"",title:"持续变现",desc:"充分利用剩余流量，可持续变现，增加收益"},
                {id:5,imgPath:"",title:"成交担保",desc:"平台担保交易，7*24小时服务"}
              ]
            },
            orderCaseData:[
              {id:1,imgPath:require("@/assets/images/1.jpg"),name:"88***",typeName:"旅行摄影类",fansNum:100,area:100,manNum:30,womenNum:100,orderNum:1000,read:1000,receive:20000},
              {id:2,imgPath:require("@/assets/images/2.jpg"),name:"影视***",typeName:"娱乐八卦类",fansNum:100,area:100,manNum:30,womenNum:100,orderNum:1000,read:1000,receive:20000},
              {id:3,imgPath:require("@/assets/images/3.jpg"),name:"爱8***",typeName:"娱乐八卦类",fansNum:100,area:100,manNum:30,womenNum:100,orderNum:1000,read:1000,receive:20000},
              {id:4,imgPath:require("@/assets/images/4.jpg"),name:"读6***",typeName:"其他类",fansNum:100,area:100,manNum:30,womenNum:100,orderNum:1000,read:1000,receive:20000},
              {id:5,imgPath:require("@/assets/images/5.jpg"),name:"经典***",typeName:"幽默搞笑类",fansNum:100,area:100,manNum:30,womenNum:100,orderNum:1000,read:1000,receive:20000},
              {id:6,imgPath:require("@/assets/images/6.jpg"),name:"背包***",typeName:"旅行摄影类",fansNum:100,area:100,manNum:30,womenNum:100,orderNum:1000,read:1000,receive:20000},
              {id:7,imgPath:require("@/assets/images/7.jpg"),name:"追影***",typeName:"生活类",fansNum:100,area:100,manNum:30,womenNum:100,orderNum:1000,read:1000,receive:20000},
              {id:8,imgPath:require("@/assets/images/8.jpg"),name:"蛋蛋***",typeName:"金融财经类",fansNum:100,area:100,manNum:30,womenNum:100,orderNum:1000,read:1000,receive:20000}
            ]
          }
        }
  }
</script>

<style lang="stylus" scoped>

</style>
