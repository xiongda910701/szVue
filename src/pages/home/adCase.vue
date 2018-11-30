<template>
    <div class="container">
      <div class="title">真实广告投放案例</div>
      <div class="content">
        <div class="tab-list">
          <a class="item" :class="isCurrent==$index?'active':''" v-for="(item,$index) in tab" @click="changeTab($index)">{{item.text}}</a>
        </div>
        <ul class="case_option">
          <li class="case_Items" v-for="item in list" :key="item.index" v-show="item.isShow">
            <div class="case_text">{{item.text}}</div>
            <div class="case_img"><img :src="item.imgPath"></div>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
    export default {
        name: "AdCase",
        data(){
          return {
            isCurrent:0,
            tab:[{text:"图文广告"},{text:"贴片广告"},{text:"线上涨粉"},{text:"线下涨粉"}],
            list:[
              {id:1,imgPath:require("@/assets/images/Case_Education.png"),isShow:true,text:"GoGoTalk青少外教在线英语：将目标人群定位在全国范围的家长教育类公众号，提升品牌的知名度并带来更多的预约订单，352W+粉丝覆盖量，10.6W+阅读量。"},
              {id:2,imgPath:require("@/assets/images/Case_Paster.png"),isShow:false,text:"西班牙旅游：通过二维码和创意图片的形式把该广告投放在拥有海量活跃粉丝群的旅游类公众号上推广，准确挖掘优质客群，提高潜在目标受众群的订单转化率，246W+粉丝覆盖量，11.3W+阅读量。"},
              {id:3,imgPath:require("@/assets/images/Case_Fans.png"),isShow:false,text:"线上涨粉：根据公众号的性质调整投放策略，沉浸式体验吸引用户阅读并关注，精准锁定优质潜客，顺畅的浏览体验大幅降低广告跳出率，成功引导10000+精准用户关注其公众号。"},
              {id:4,imgPath:require("@/assets/images/Case_Wifi.png"),isShow:false,text:"线下涨粉：利用免费WiFi吸引用户关联，关注公众号上网， 根据WiFi热点区域，短时间内迅速获得粉丝，通过线下Wifi渠道为客户增加了14000个粉丝。"},
            ]
          }
        },
        methods:{
          changeTab(index){
            this.list.forEach((item) =>{
               item.isShow = false;
            });
            this.list[index].isShow = true;
            this.isCurrent = index;
          }
        }
    }
</script>

<style lang="stylus" scoped>
  .container
    background-color #fff
    padding: 80px 0
    .title
      text-align center
      font-size 30px
      color #4D555D
      margin-bottom 50px
    .content
      width 1200px;
      margin 0 auto
      .tab-list
        text-align center
        font-size 18px
        color #111
        margin 0 auto
        position relative
        &::after
          content: "";
          display: block;
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 1px;
          background-color: #e6e6e6;
        .item
          position relative
          padding 0 15px
          margin 0 20px
          padding-bottom 10px
          display inline-block
          color #333
          cursor pointer
          &.active
            color: #4cb5ff
          &.active::after
            content: "";
            display: block;
            position: absolute;
            bottom: -1px;
            left: 0;
            width: 100%;
            height: 4px;
            z-index: 9;
            background-color: #4cb5ff;
      .case_text
          color #333
          text-align center
          height 52px
          padding 50px 130px 25px
          line-height 26px
      .case_img
        text-align center
        width: 1100px
        margin: 0 50px
        img
          width 100%
</style>
