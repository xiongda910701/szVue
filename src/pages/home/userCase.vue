<template>
  <div class="container">
    <div class="content">
      <div class="title">TA们都在用</div>
      <div class="sub-title">更多大咖的选择</div>
      <ul class="list">
        <li class="item" v-for="item in list" :key="item.id">
          <img :src="item.imgPath" alt="">{{item.name}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "userCase",
    data(){
      return{
        list:[
          {id:1,imgPath:require('@/assets/images/360-2-icon.png'),name:'阿里巴巴'},
          {id:2,imgPath:require('@/assets/images/360-icon.png'),name:'京东'},
          {id:3,imgPath:require('@/assets/images/qq-icon.png'),name:'考拉'},
          {id:4,imgPath:require('@/assets/images/liebao-icon.png'),name:'唯品会'},
          {id:5,imgPath:require('@/assets/images/chrome-icon.png'),name:'亚马逊'},
          {id:6,imgPath:require('@/assets/images/qq-icon.png'),name:'蚂蚁金服'},
          {id:7,imgPath:require('@/assets/images/360-icon.png'),name:'天猫商城'},
          {id:8,imgPath:require('@/assets/images/360-2-icon.png'),name:'当当'},
        ]
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .container
    width 19.2rem
    overflow hidden
    background-color #177FE6
    .content
      width 12rem
      margin 0 auto
      padding 1.2rem 0
      color white
      .title
        font-size 0.48rem
        font-family PingFang-SC-Heavy
        font-weight 800
        text-align center
      .sub-title
        font-size 0.32rem
        font-family PingFang-SC-Heavy
        font-weight 800
        text-align center
        margin-top 0.3rem
      .list
        display flex
        flex-wrap wrap
        justify-content space-between
        margin-top 0.8rem
        .item
          display flex
          justify-content center
          align-items center
          width 2.8rem
          height 1.2rem
          margin-bottom 0.24rem
          background-color white
          font-size 0.24rem
          color #475766
          img
            width 0.48rem
            height 0.48rem
</style>
