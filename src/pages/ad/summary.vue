<template>
  <ul class="list">
    <li class="item">
      <img :src="require('@/assets/images/IndexImg.png')" alt="">
      <div class="data-box fr">
        <div class="Advertiser_DataList fl">
          <span>0</span>
          <h4>待发布</h4>
        </div>
        <div class="Advertiser_DataList fl">
          <span>0</span>
          <h4>发布中</h4>
        </div>
      </div>
    </li>
    <li class="item">
      <img :src="require('@/assets/images/IndexImg1.png')" alt="">
      <div class="data-box fr">
        <div class="Advertiser_DataList fl">
          <span>0</span>
          <h4>已完成</h4>
        </div>
        <div class="Advertiser_DataList fl">
          <span>0</span>
          <h4>已取消</h4>
        </div>
      </div>
    </li>
    <li class="item">
      <img :src="require('@/assets/images/IndexImg2.png')" alt="">
      <div class="data-box fr">
        <div class="Advertiser_DataList fl">
          <span>0.00</span>
          <h4>实际消费</h4>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
  export default {
    name: "summary"
  }
</script>

<style lang="stylus" scoped>
  .list
    width 1200px
    margin 0 auto
    padding 30px
    overflow hidden
    display flex
    justify-content space-between
    flex-wrap nowrap
    .item
      width 370px
      height 92px
      position relative
      border-radius 3px
      img
        position absolute
        width 100%
        height 100%
        left 0
        top 0
      .data-box
        position absolute
        top 0
        right 0
</style>
