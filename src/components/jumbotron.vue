<template>
    <div class="container">
      <img :src="jumbotronData.imgPath" class="bg-img" alt="">
      <div class="content">
        <p class="title">{{jumbotronData.title}}</p>
        <p class="desc">{{jumbotronData.desc}}</p>
      </div>
      <router-link :to="jumbotronData.url">{{jumbotronData.btn_text}}</router-link>
    </div>
</template>

<script>
    export default {
        name: "jumbotron",
        props:["jumbotronData"],
    }
</script>

<style lang="stylus" scoped>
  .container
    position relative
    width: 100%;
    height: 460px;
    text-align: center;
    color: #fff;
    margin-top 82px
    .bg-img
      position absolute
      top 0
      left 0
      width 100%
      height auto
      z-index -10
    .content
      padding-top 136px
      width 1200px
      margin 0 auto
      .title
        font-size 40px
      .desc
        font-size 28px
        margin-top 15px
    a
      border 1px solid #b2dfff
      color #fff
      font-size 16px
      margin-top 30px
      padding 13px 45px
      background-color: rgba(76,181,255,0.1)
      display inline-block
</style>
