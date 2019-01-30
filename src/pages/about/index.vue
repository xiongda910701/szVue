<template>
  <div class="container">
    <common-header></common-header>
    <tool></tool>
    <div class="content">
      <div class="left">
        <div class="title">关于美编</div>
        <p class="item" :class="index==1?'active':''" @click="changeState(1)">美编简介</p>
        <p class="item" :class="index==2?'active':''" @click="changeState(2)">联系方式</p>
      </div>
      <div class="right">
        <div class="box" v-show="type">
          <img :src="require('@/assets/images/introduce@2x.png')" alt="">
          <div class="desc">
            杭州神赞网络技术有限公司旗下品牌美编，是一款简单高效的新媒体运营工具，
            致力于提升新媒体运营与变现效率。其拥有强大的编辑器，丰富精美的样式，
            多账号一键切换，热点追踪、素材获取，数据分析等实用功能，同时还提供持久稳定的变现服务。
          </div>
          <div class="desc1">美编，为新媒体而生！</div>
        </div>
        <div class="box" v-show="!type">
          <ul class="list">
            <li class="item">
              <img :src="require('@/assets/images/position.png')" alt="" class="img">
              <p class="text">杭州市拱墅区丰潭路508号天行国际2号楼11楼</p>
            </li>
            <li class="item">
              <img :src="require('@/assets/images/phone.png')" alt="" class="img">
              <p class="text">
                <span>0571-87881699</span><br>
                <span>(周一至周五9:00-18:00)</span>
              </p>
            </li>
            <li class="item">
              <img :src="require('@/assets/images/message.png')" alt="" class="img">
              <p class="text">qsw@shenzan.com</p>
            </li>
            <li class="item">
              <img :src="require('@/assets/images/email.png')" alt="" class="img">
              <p class="text">0571-87889622</p>
            </li>
          </ul>
          <div class="map-box">
            <baidu-map class="map" ak="67jMQ5DmYTe1TLMBKFUTcZAR" :center="center" :zoom="15" @ready="showMap"></baidu-map>
          </div>
        </div>
      </div>
    </div>
    <common-footer></common-footer>
  </div>
</template>

<script>

  import BaiduMap from 'vue-baidu-map/components/map/Map.vue'
  import CommonHeader from '@/components/commonHeader'
  import CommonFooter from '@/components/commonFooter'
  import Tool from '@/components/tool'

  export default {
    name: "about",
    components:{CommonHeader,BaiduMap,CommonFooter,Tool},
    data(){
      return {
        index:1,
        imgPath:require('@/assets/images/UsImg.png'),
        type:true,
        center:{
           lng:0,
           lat:0
        }
      }
    },
    methods:{
      changeState(indexValue){
        this.index = indexValue;
        this.type = !this.type;
      },
      showMap({BMap, map}) {
        console.log(BMap, map);
        this.center.lng = 120.112558;
        this.center.lat = 30.30906;
      }
    },
    mounted() {
      let type = this.$route.query.type;
      if(type==="introduce"){
        this.type = true;
        this.index= 1;
      }else{
        this.type = false;
        this.index= 2;

      }
    }
  }
</script>

<style lang="stylus" scoped>
  .container
    .content
      box-sizing border-box
      display flex
      width 12rem
      margin 1.2rem  auto 1.6rem auto
      overflow hidden
      background-color white
      .left
        width 1.99rem
        height 6.92rem
        border-right 1px solid #CFDAE6
        .title
          height 0.64rem
          line-height 0.64rem
          padding-left 0.4rem
          font-size 0.16rem
          color #475766
          border-bottom 1px solid #CFDAE6
        .item
          margin 0.24rem auto 0.24rem 0.4rem
          font-size 0.14rem
          color #475766
          font-weight 500
          cursor pointer
          &.active
            color #177FE6
      .right
        width 10rem
        background-color white
        padding 0.4rem
        .box
          width 100%
          img
            display block
            width 100%
          .desc,.desc1
            font-size 0.14rem
            font-family PingFang-SC-Medium
            font-weight 500
            color #475766
            margin-top 0.4rem
            line-height 0.28rem
          .desc1
            margin-top 0
          .list
            display flex
            justify-content space-between
            align-items center
            text-align center
            .item
              box-sizing border-box
              width 1.78rem
              height 2.14rem
              padding 0.15rem
              border 1px solid #CFDAE6
              border-radius 3px
              img
                width 80%
                margin 0 auto 0.05rem auto
              .text
                font-size 0.13rem
                color #7A8A99
                line-height 0.2rem
          .map-box
            margin-top 0.4rem
            .map
              width 100%
              height 3.58rem

</style>
