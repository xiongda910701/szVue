<template>
  <div class="container">
    <person-header></person-header>
    <user-info-window></user-info-window>
    <div class="content">
      <div class="title-box">
        <span>媒体账号</span>
        <button type="button" class="btn-add">+添加媒体</button>
      </div>
      <media-list></media-list>
      <common-page></common-page>
    </div>
  </div>
</template>

<script>
  import PersonHeader from '@/components/personHeader'
  import UserInfoWindow from '@/components/userInfoWindow'
  import MediaList from './mediaList'
  import CommonPage from "@/components/commonPage";

  export default {
    name: "media",
    components:{CommonPage, PersonHeader,UserInfoWindow,MediaList}
  }
</script>

<style lang="stylus" scoped>
  .content
    width 12rem
    height auto
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
      .btn-add
        width 1.2rem
        height 0.4rem
        background: #177FE6
        border-radius 2px
        font-size 0.16rem
        color white
        border none
        cursor pointer
        float right
</style>
