<template>
  <div class="container">
    <common-header></common-header>
    <div class="content">
      <div class="left">
        <div class="title">帮助中心</div>
        <p class="item" :class="index==1?'active':''" @click="changeState(1)">美编简介</p>
        <p class="item" :class="index==2?'active':''" @click="changeState(2)">联系方式</p>
      </div>
      <div class="right">
        <div class="box" v-show="type">
          <img :src="require('@/assets/images/introduce@2x.png')" alt="">
          <div class="desc">
            美编介绍美编介绍美编介绍美编介绍美编介绍美编介绍美编介绍美编介绍美编介绍美编
            介绍美编介绍美编介绍美编介绍美编介绍美编介绍美编介绍美编介绍美编介绍美编介绍
            美编介绍美编介绍美编介绍美编介绍美编介绍美编介绍美编介绍美编介绍美编介绍美编
            介绍美编介绍美编介绍美编介绍美编介绍美编介绍美编介绍美编介绍美编介绍美编介绍
            美编介绍美编介绍美编介绍美编介绍美编介绍美编介绍美编介绍美编介绍美编介绍美编
            介绍美编介绍美编介绍美编介绍美编介绍美编介绍美编介绍美编介绍美编介绍美编介绍
            美编介绍美编介绍美编介绍美编介绍美编介绍美编介绍美编介绍美编介绍美编介绍美编
            介绍美编介绍美编介绍美编介绍美编介绍美编介绍美编介绍美编介绍美编介绍美编介绍
            美编介绍美编介绍美编介绍美编介绍美编介绍美编介绍美编介绍美编介绍美编介绍美编
            介绍美编介绍美编介绍美编介绍美编介绍美编介绍美编介绍美编介绍美编介绍美编介绍
            美编介绍美编介绍美编介绍美编介绍美编介绍美编介绍美编介绍美编介绍美编介绍美编
            介绍美编介绍美编介绍美编介绍美编介绍美编介绍美编介绍美编介绍美编介绍美编介绍
            美编介绍美编介绍美编介绍美编介绍美编介绍美编介绍美编介绍美编介绍美编介绍美编
            介绍美编介绍美编介绍美编介绍美编介绍美编介绍美编介绍美编介绍美编介绍美编介绍
            美编介绍美编介绍美编介绍美编介绍美编介绍美编介绍美编介绍美编介绍美编介绍美编
          </div>
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

  export default {
    name: "about",
    components:{CommonHeader,BaiduMap,CommonFooter},
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

    }
  }
</script>

<style lang="stylus" scoped>
  .container
    overflow hidden
    background-color #FAFBFC
    .content
      box-sizing border-box
      display flex
      width 12rem
      margin 0.4rem  auto 1.6rem auto
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
          .desc
            font-size 0.14rem
            font-family PingFang-SC-Medium
            font-weight 500
            color #475766
            margin-top 0.4rem
            text-indent 0.15rem
            line-height 0.28rem
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
              img
                width 80%
                margin 0 auto 0.05rem auto
              .text
                font-size 0.13rem
                color #CFDAE6
                line-height 0.2rem
          .map-box
            margin-top 0.4rem
            .map
              width 100%
              height 3.58rem

</style>
