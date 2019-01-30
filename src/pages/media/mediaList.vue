<template>
  <ul class="list" v-show="list.length">
    <li class="item addMedia" :data-id="item.ghid?item.ghid:''" :data-username="item.username?item.username:''" v-for="item in list" :key="item.id">
      <div class="img-box"><img :src="item.avatar?item.avatar:defaultHead" alt=""></div>
      <div class="info-box">
        <span class="name">{{item.name}}</span><br>
        <span class="desc">{{item.username}}</span>
      </div>
      <a class="btn-state active" v-show="item.access_token===1">已授权</a>
      <a class="btn-state" v-show="item.access_token===0" @click.stop="handleSQ">未授权</a>
    </li>
  </ul>
</template>

<script>
  export default {
    name: "mediaList",
    props:["list"],
    data(){
      return {
        defaultHead:require('@/assets/images/defaultHead.png')
      }
    },
    methods:{
      handleSQ(){
        window.open('/home/common/wx','sq');
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .list
    width 12rem
    margin-top 0.2rem
    margin-bottom 0.2rem
    min-height 3.5rem
    overflow hidden
    .item
      float left
      display flex
      align-content center
      width 3.6rem
      height 0.94rem
      margin 0.4rem 0.2rem 0.15rem 0
      padding 0.24rem 0.24rem 0.2rem 0.26rem
      box-sizing border-box
      border 1px solid #f0f5fa
      box-shadow 0 2px 10px 0 rgba(240, 245, 243, 0.35)
      border-radius 4px
      cursor pointer
      &:last-child
        margin-right 0
      &:hover
        background-color #f0f5fa
        border none
      &:hover .btn-state
        background-color #f0f5fa
      .img-box
        margin-right 0.17rem
        img
          width 0.44rem
          height 0.44rem
          border-radius 100%
      .info-box
        font-family PingFang-SC-Medium
        font-weight 500
        .name
          height 0.16rem
          color #475766
          line-height 0.18rem
        .desc
          height 0.14rem
          font-size 0.14rem
          color #6B8399
          line-height 0.2rem
      .btn-state
        width 0.8rem
        height 0.32rem
        line-height 0.32rem
        text-align center
        color #475766
        background-color white
        border 1px solid #475766
        border-radius 0.16rem
        cursor pointer
        margin-left auto
        &.active
          color #12B362
          border 1px solid #12B362
</style>
