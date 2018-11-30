<template>
    <div class="container">
      <div class="title">合作客户</div>
      <div class="slider-box">
        <el-carousel trigger="click" indicator-position="none" type="card" height="54px">
          <el-carousel-item v-for="item in clientsList" :key="item.id">
            <img :src="item.imgPath" :alt="item.name" class="img-clients">
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Clients",
        props:["clientsList"]
    }
</script>

<style lang="stylus" scoped>
  .container
    width 100%
    padding 80px 0
    background-color #f5f5f5
    .title
      text-align center
      font-size 30px
      color #4D555D
      margin-bottom 50px
    .slider-box
      width 1200px
      height 54px
      margin 0 auto
      .img-clients
        width 200px
        height 54px
</style>
