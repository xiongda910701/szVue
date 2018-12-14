<template>
  <div class="container">
    <person-header></person-header>
    <user-info-window></user-info-window>
    <div class="content">
      <div class="title-box">
        <span>素材管理</span>
        <ul class="tab-list">
          <li class="item" :class="index==1?'active':''" @click="changeTab(1)">图片</li>
          <li class="item" :class="index==2?'active':''" @click="changeTab(2)">视频</li>
          <li class="item" :class="index==3?'active':''" @click="changeTab(3)">样式</li>
          <li class="item" :class="index==4?'active':''" @click="changeTab(4)">文章</li>
        </ul>
        <pic-list v-show="index==1"></pic-list>
        <video-list v-show="index==2"></video-list>
        <div class="operate-box">
          <el-checkbox v-model="checked_all">全选</el-checkbox>
          <button type="button" class="btn-delete">删除</button>
          <common-page></common-page>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import PersonHeader from '@/components/personHeader'
  import UserInfoWindow from '@/components/userInfoWindow'
  import CommonPage from "@/components/commonPage";
  import PicList from './picList'
  import VideoList from './videoList'

  export default {
    name: "material",
    components:{CommonPage, PersonHeader,UserInfoWindow,PicList,VideoList},
    data(){
      return {
        index:1,
        checked_all:false
      }
    },
    methods:{
      changeTab(indexValue){
        this.index = indexValue;
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .content
    width 12rem
    margin 0.51rem auto
    padding 0.4rem
    background #fff
    box-shadow 0 2px 10px 0 #F0F3F5
    border-radius 4px
    box-sizing border-box
    .title-box
      font-size 0.28rem
      font-family PingFang-SC-Medium
      font-weight 500
      color #475766
      .tab-list
        float right
        display flex
        font-family PingFang-SC-Medium
        font-weight 500
        color #475766
        .item
          width 0.8rem
          height 0.4rem
          line-height 0.4rem
          font-size 0.16rem
          text-align center
          background #fff
          border 1px solid #CFDAE6
          border-radius 0 2px 2px 0
          cursor pointer
          &:nth-child(1)
            border-right none
          &:nth-child(2)
            border-right none
          &:nth-child(3)
            border-right none
          &.active
            background-color #177FE6
            color white
      .operate-box
        display flex
        height 0.4rem
        line-height 0.4rem
        margin-top 0.3rem
        .btn-delete
          width 0.88rem
          height 0.4rem
          font-size 0.16rem
          color white
          margin-left 0.4rem
          margin-bottom 0.3rem
          background-color #E61717
          border-radius 2px
          border none
          cursor pointer

</style>
