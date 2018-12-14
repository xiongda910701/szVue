<template>
  <ul class="list">
    <li class="item" v-for="item in list" :key="item.id">
      <img :src="item.imgPath" alt="">
      <div class="mask">
        <el-checkbox v-model="select" class="checkbox"></el-checkbox>
        <i class="iconfont icon-shanchu1"></i>
      </div>
    </li>
  </ul>
</template>

<script>
  export default {
    name: "videoList",
    data() {
      return {
        select:false,
        list: [
          {id: 1, imgPath: require('@/assets/images/pic/pic1.jpg')},
          {id: 2, imgPath: require('@/assets/images/pic/pic2.jpg')},
          {id: 3, imgPath: require('@/assets/images/pic/pic3.jpg')},
          {id: 4, imgPath: require('@/assets/images/pic/pic4.jpg')},
          {id: 5, imgPath: require('@/assets/images/pic/pic5.jpg')},
          {id: 6, imgPath: require('@/assets/images/pic/pic6.jpg')},
          {id: 7, imgPath: require('@/assets/images/pic/pic7.jpg')},
          {id: 8, imgPath: require('@/assets/images/pic/pic8.jpg')},
          {id: 9, imgPath: require('@/assets/images/pic/pic9.jpg')},
          {id: 10, imgPath: require('@/assets/images/pic/pic10.jpg')},
          {id: 11, imgPath: require('@/assets/images/pic/pic11.jpg')},
          {id: 12, imgPath: require('@/assets/images/pic/pic12.jpg')},
          {id: 13, imgPath: require('@/assets/images/pic/pic13.jpg')},
          {id: 14, imgPath: require('@/assets/images/pic/pic14.jpg')},
          {id: 15, imgPath: require('@/assets/images/pic/pic15.jpg')},
          {id: 16, imgPath: require('@/assets/images/pic/pic16.jpg')}
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
    margin-top 0.4rem
    .item
      position relative
      width 2.5rem
      height 1.6rem
      margin-bottom 0.4rem
      cursor pointer
      &:hover .mask
        display block
      img
        width 100%
        height 100%
      .mask
        position absolute
        display none
        left 0
        top 0
        width 100%
        height 100%
        background-color rgba(0,0,0,0.5)
        .checkbox
          position absolute
          left 0.16rem
          top 0.16rem
        .icon-shanchu1
          position absolute
          right 0.16rem
          bottom 0.16rem
          color white
</style>
