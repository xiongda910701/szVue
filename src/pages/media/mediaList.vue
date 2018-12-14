<template>
  <ul class="list">
    <li class="item" v-for="item in list" :key="item.id">
      <div class="img-box"><img :src="item.imgPath" alt=""></div>
      <div class="info-box">
        <span class="name">{{item.name}}</span><br>
        <span class="desc">{{item.desc}}</span>
      </div>
      <div class="state-box">
        <span class="state">状态：<span :class="item.state==1?'success':'error'">{{item.state==1?'正常':'失效'}}</span></span>
        <span class="iconfont icon-tongbu reload"></span><br>
        <button class="btn-state" :class="item.state==1?'btn-success':'btn-error'">{{item.state==1?'进入':'登录'}}</button>
      </div>
    </li>
  </ul>
</template>

<script>
  export default {
    name: "mediaList",
    data() {
      return {
        list: [
          {id: 1, name: '我有一头小毛驴', desc: '我从来都不骑', state: 1, imgPath: require('@/assets/images/360-icon.png')},
          {id: 2, name: '我有一头小毛驴', desc: '我从来都不骑', state: 0, imgPath: require('@/assets/images/360-icon.png')},
          {id: 3, name: '我有一头小毛驴', desc: '我从来都不骑', state: 1, imgPath: require('@/assets/images/360-icon.png')},
          {id: 4, name: '我有一头小毛驴', desc: '我从来都不骑', state: 1, imgPath: require('@/assets/images/360-icon.png')},
          {id: 5, name: '我有一头小毛驴', desc: '我从来都不骑', state: 0, imgPath: require('@/assets/images/360-icon.png')},
          {id: 6, name: '我有一头小毛驴', desc: '我从来都不骑', state: 1, imgPath: require('@/assets/images/360-icon.png')},
          {id: 7, name: '我有一头小毛驴', desc: '我从来都不骑', state: 1, imgPath: require('@/assets/images/360-icon.png')},
          {id: 8, name: '我有一头小毛驴', desc: '我从来都不骑', state: 1, imgPath: require('@/assets/images/360-icon.png')},
          {id: 9, name: '我有一头小毛驴', desc: '我从来都不骑', state: 0, imgPath: require('@/assets/images/360-icon.png')},
          {id: 10, name: '我有一头小毛驴', desc: '我从来都不骑', state: 0, imgPath: require('@/assets/images/360-icon.png')},
          {id: 11, name: '我有一头小毛驴', desc: '我从来都不骑', state: 1, imgPath: require('@/assets/images/360-icon.png')},
          {id: 12, name: '我有一头小毛驴', desc: '我从来都不骑', state: 0, imgPath: require('@/assets/images/360-icon.png')},
          {id: 13, name: '我有一头小毛驴', desc: '我从来都不骑', state: 1, imgPath: require('@/assets/images/360-icon.png')},
          {id: 14, name: '我有一头小毛驴', desc: '我从来都不骑', state: 0, imgPath: require('@/assets/images/360-icon.png')},
          {id: 15, name: '我有一头小毛驴', desc: '我从来都不骑', state: 1, imgPath: require('@/assets/images/360-icon.png')},
        ]
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .list
    display flex
    flex-wrap wrap
    justify-content space-between
    margin-top 0.2rem
    margin-bottom 0.2rem
    .item
      display flex
      align-content center
      width 3.6rem
      height 0.94rem
      margin 0.4rem 0 0.15rem 0
      padding 0.24rem 0.24rem 0.2rem 0.26rem
      box-sizing border-box
      background-color #FAFBFC
      border 1px solid #FAFBFC
      border-radius 4px
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
      .state-box
        margin-left 0.4rem
        .state
          width 0.69rem
          height 0.14rem
          font-size 0.14rem
          color #475766
          line-height 0.18rem
          .success
            font-size 0.14rem
            color #12B362
          .error
            font-size 0.14rem
            color #E61739
        .reload
          font-size 0.12rem
          margin-left 0.03rem
          cursor pointer
        .btn-state
          width 0.72rem;
          height 0.24rem
          background-color white
          border-radius: 0.12rem
          font-size 0.14rem
          margin-top 0.11rem
          cursor pointer
        .btn-success
          color #12B362
          border 1px solid #12B362
        .btn-error
          color #E61739
          border 1px solid #E61739
</style>
