<template>
  <div class="container">
    <Header></Header>
    <jumbotron :jumbotronData="jumbotronData"></jumbotron>
    <upfans-type :offlinelist="offlinelist" :onlinelist="onlinelist"></upfans-type>
    <upfans-case :upfansCaselist="upfansCaselist"></upfans-case>
    <contact-us></contact-us>
    <footer2></footer2>
  </div>
</template>

<script>
  import Header from '@/components/Header'
  import Jumbotron from '@/components/jumbotron'
  import UpfansType from './upfansType'
  import UpfansCase from './upfansCase'
  import ContactUs from './contactUs'
  import Footer2 from '@/components/footer'

  export default {
    name: "UpFans",
    components: {Header, Jumbotron, UpfansType, UpfansCase, ContactUs, Footer2},
    data() {
      return {
        jumbotronData: {
          imgPath: require("@/assets/images/Fans_banner1.png"),
          title: "线下WIFI+照片打印机或线上图文+贴片",
          desc: "立体式全方位覆盖涨粉 粉丝质量高 活跃度强",
          btn_text: "我要涨粉",
          url: "#"
        },
        offlinelist: {
          title: "线下张粉",
          list: [
            {
              id: 1,
              imgPath: require("@/assets/images/FunsImg1.png"),
              name: "免费WiFi涨粉",
              desc: "为各类商业场所提供免费WiFi，全场覆盖，客户根据自己的需求，可选择粉丝的性别、地域、涨粉时间等进行需求匹配，给客户提供精准、粘性高、价值高的涨粉方案。",
              dayNum: 50000,
              keepRate: "70%",
              price: 1
            },
            {
              id: 2,
              imgPath: require("@/assets/images/FunsImg2.png"),
              name: "照片打印机涨粉",
              desc: "铺设在大型商场、超市，餐厅，用户的覆盖范围大，扫描商家微信公众号并关注，发送一张照片给微信公众号，输入打印码即可获得高清照片，日均用户人群可达100万+，可不间断的持续涨粉。",
              dayNum: 50000,
              keepRate: "70%",
              price: 1
            }
          ]
        },
        onlinelist: {
          title: "线上张粉",
          list: [
            {
              id: 1,
              imgPath: require("@/assets/images/FunsImg3.png"),
              name: "文案涨粉",
              desc: "我们提供专业的带号图文定制，带号以二维码和明确的标题和创意文案的方式出现在公众号推送图文中，从而高效引流，提升带号的曝光率，实现粉丝的大幅度转化，粉丝质量更优质。文案涨粉是按推文的实际阅读量来计费的，广告每天的阅读量可高达100000+，带号涨粉更精准，粉丝存留率为80%左右，价格为0.2~0.5元每阅读。",
              dayNum: 50000,
              keepRate: "70%",
              price: 1
            },
            {
              id: 2,
              imgPath: require("@/assets/images/FunsImg4.png"),
              name: "贴片涨粉",
              desc: "带号以二维码的形式搭配创意的吸粉图片出现在接单账号推文的顶部或者底部，从而实现带号的海量曝光，吸引目标用户的关注，贴片涨粉成本更低，效果更好，粉丝活跃度高。",
              dayNum: 50000,
              keepRate: "70%",
              price: 1
            }
          ]
        },
        upfansCaselist:[
          {id:1,imgPath:require("@/assets/images/Exa_1.png"),title:"免费WiFi涨粉案例",subTitle:"涨粉账号--表***(金融类)",desc:"通过线下wifi渠道在全国范围内为客户增涨了12000个真实活跃粉丝，粉丝存留率为74%，涨粉安全不被封号，粉丝质量高。"},
          {id:2,imgPath:require("@/assets/images/Exa_2.png"),title:"照片打印机涨粉案例",subTitle:"涨粉账号--青***(旅游类)",desc:"通过照片打印机涨粉方式在特定场景进行涨粉，多地段，精准投放，短时间聚集了人气，涨粉10000个，为公众号带来了最大的效益。"},
          {id:3,imgPath:require("@/assets/images/Exa_3.png"),title:"文案涨粉案例",subTitle:"涨粉账号--投***(游戏类)",desc:"通过带号涨粉的方式在全国范围内有针对性的图文投放，总的阅读量为16410阅读，涨粉更精准，曝光率大幅度提高，吸收了大量的优质活跃粉丝。"},
          {id:4,imgPath:require("@/assets/images/Exa_4.png"),title:"贴片涨粉案例",subTitle:"涨粉账号--表***(金融类)",desc:"通过二维码+创意图片的形式有针对性的全国投放，大量的吸引了活跃的用户关注，有效阅读量为32378阅读，大大减少了涨粉成本。"},
        ]
      }
    }
  }
</script>

<style lang="stylus" scoped>

</style>
