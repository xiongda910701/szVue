<template>
  <div class="container">
    <div class="block">
      <el-carousel trigger="click" height="600px">
        <el-carousel-item v-for="item in sliderList" :key="item.id" :style="{backgroundImage:'url(' + item.bgImg +')',backgroundRepeat:'noRepeat'}">
          <div class="title-box">
            <p class="title">{{item.title}}</p>
            <p class="sub-title">{{item.subTitle}}</p>
          </div>
          <div class="nav-container">
            <ul class="nav-list">
              <li class="nav-item" v-for="itemList in item.navList" :key="itemList.id">
                <img :src="itemList.imgPath" class="icon-img" alt="">
                <p class="nav-list-title">{{itemList.title}}</p>
                <p class="nav-list-desc">{{itemList.desc}}</p>
              </li>
            </ul>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>

    export default {
        name: "slider",
        props:["sliderList"]
    }
</script>

<style lang="stylus" scoped>
  .block
    position relative
  >>>.el-carousel__indicators
    bottom 138px
  .el-carousel__item
      .title-box
        width 1200px
        margin 120px auto
        font-size 40px
        line-height 48px
        color #fff
        .sub-title
          font-size 28px
          margin-top 10px
      .nav-container
        position absolute
        bottom 0
        margin 0 auto
        width 100%
        height 128px
        color white
        background-color rgba(256,256,256,0.1)
        .nav-list
          width 1200px
          margin 0 auto
          .nav-item
            width 300px
            height 128px
            float left
            text-align center
            .icon-img
              margin-top 16px
            .nav-list-title
              font-size 18px
              line-height 24px
            .nav-list-desc
              font-size 14px
</style>
