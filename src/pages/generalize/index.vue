<template>
  <div class="container">
    <Header></Header>
    <jumbotron :jumbotronData="jumbotronData"></jumbotron>
    <promote-form></promote-form>
    <promote-advantage :promoteAdvantageData="promoteAdvantageData"></promote-advantage>
    <promote-process :processData="processData"></promote-process>
    <promote-case :promoteCaseData="promoteCaseData"></promote-case>
    <guide-register :guideRegisterData="guideRegisterData"></guide-register>
    <footer1></footer1>
  </div>
</template>

<script>
  import Header from '@/components/Header'
  import Jumbotron from '@/components/jumbotron'
  import PromoteForm from './promoteForm'
  import PromoteAdvantage from './promoteAdvantage'
  import PromoteProcess from '@/components/promoteProcess'
  import PromoteCase from './promoteCase'
  import GuideRegister from '@/components/guideRegister'
  import Footer1 from '@/components/footer'
  export default {
        name: "Generalize",
        components:{
          Header,Jumbotron,PromoteForm,PromoteAdvantage,
          PromoteProcess,PromoteCase,GuideRegister,Footer1
        },
        data(){
          return {
            jumbotronData:{
              imgPath:require("@/assets/images/Wechart_banner.png"),
              title:"以效果为导向 按真实阅读计费 转化成本可控风险更低",
              desc:"实时监测数据 科学严谨的算法 保障每个阅读真实有效",
              btn_text:"我要推广",
              url:"#"
            },
            guideRegisterData:{
              imgPath:require("@/assets/images/Login_bg.png"),
              btnList:[{id:1,text:"自助开启推广",url:"#"}]
            },
            promoteCaseData:[
              {id:1,imgPath:require("@/assets/images/Wechart_case1.jpg"),title:"【限时免费】英式英语口语免费学啦！！！",cycle:["2017-07-27","2017-09-01"],budgut:65185.38,price:0.30,fans:14458106,read:284891,typeName:"语言类"},
              {id:2,imgPath:require("@/assets/images/Wechart_case2.jpg"),title:"再见了！余额宝！",cycle:["2017-11-10","2017-11-24"],budgut:1578.2,price:0.23,fans:826991,read:354710,typeName:"理财类"},
              {id:3,imgPath:require("@/assets/images/Wechart_case3.jpg"),title:"风靡全球的《学习方法》,让孩子迅速提高",cycle:["2017-12-27","2018-01-01"],budgut:18795.21,price:0.21,fans:874125,read:5412354,typeName:"教育类"},
              {id:4,imgPath:require("@/assets/images/Wechart_case4.jpg"),title:"震惊：网红美女玩微信，月收入20几万..",cycle:["2018-02-10","2018-03-11"],budgut:25784.40,price:0.54,fans:1254785,read:2013547,typeName:"淘客类"},
              {id:5,imgPath:require("@/assets/images/Wechart_case5.png"),title:"竹演股票配资：我出钱，您炒股，盈利全..",cycle:["2018-04-10","2018-04-28"],budgut:89521.68,price:0.33,fans:3214587,read:689520,typeName:"金融类"},
              {id:6,imgPath:require("@/assets/images/Wechart_case6.jpg"),title:"有一个冰山冷美人做老婆,是一种怎样的..",cycle:["2018-06-15","2018-08-13"],budgut:102547.78,price:0.70,fans:9852147,read:147850,typeName:"小说类"},
              {id:7,imgPath:require("@/assets/images/Wechart_case7.png"),title:"英语烂，他1个方法逆袭成功！竟然还不..",cycle:["2018-10-07","2018-11-30"],budgut:33552.55,price:0.18,fans:25412547,read:698501,typeName:"语言类"},
              {id:8,imgPath:require("@/assets/images/Wechart_case8.jpg"),title:"哲学、诗歌、绘画，人生智慧，精彩文章..",cycle:["2018-11-10","2019-01-01"],budgut:41257.01,price:0.78,fans:6587402,read:15871,typeName:"贴片类"},
            ],
            promoteAdvantageData:{
              img:require("@/assets/images/WechartImg.png"),
              list:[
                {id:1,imgPath:"",title:"自动投放",desc:"一站式全自动匹配海量媒体，自动投放省心省力"},
                {id:2,imgPath:"",title:"灵活推广",desc:"自主设置投放周期、预算、单价，粉丝比例等条件，推广策略灵活掌控"},
                {id:3,imgPath:"",title:"费用透明",desc:"按阅读计费，数据公开费用消耗透明"},
                {id:4,imgPath:"",title:"成本可控",desc:"按真实阅读计费，成本可控，风险低"},
                {id:5,imgPath:"",title:"真实流量",desc:"实时跟踪数据，科学严谨算法，保障真量投放"},
                {id:6,imgPath:"",title:"成交担保",desc:"平台担保交易，7*24小时服务"}
              ]
            },
            processData:{
              title:"推广流程",
              list:[
                {id:1,text:"注册登录广告主"},
                {id:2,text:"推广条件设置及添加推广文案"},
                {id:3,text:"平台审核"},
                {id:4,text:"媒体主接单并执行"},
                {id:5,text:"平台质检验收"},
                {id:6,text:"广告完成"}
                ]
            }
          }
        }
    }
</script>
<style lang="stylus" scoped>

</style>
