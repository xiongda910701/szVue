<template>
  <div class="container">
    <person-header></person-header>
    <div class="content">
      <div class="title-box">
        <span>素材管理</span>
        <ul class="tab-list">
          <router-link class="item" to="/material/picture" tag="li">图片</router-link>
          <router-link class="item" to="/material/video" tag="li">视频</router-link>
          <router-link class="item" to="/material/style" tag="li">样式</router-link>
          <router-link class="item" to="/material/article" tag="li">文章</router-link>
        </ul>
      </div>
      <router-view></router-view>
    </div>
    <common-footer></common-footer>
    <tool></tool>
  </div>
</template>

<script>
  import PersonHeader from '@/components/personHeader'
  import CommonFooter from '@/components/commonFooter'
  import Tool from '@/components/tool'

  export default {
    name: "material",
    components:{PersonHeader,CommonFooter,Tool},
    methods:{
      //控制元素宽度
      handleElementWidth(){
        let item_content = $('.item-content');
        let children = item_content.children();
        children.css({'max-width':'3.44rem','box-sizing':'border-box'});
        let allNode = children.find('*');
        allNode.css({'max-width':'100%','box-sizing':'border-box'});
      }
    },
    mounted(){
      this.handleElementWidth();
    },
    updated() {
      this.handleElementWidth();
    }
  }
</script>

<style lang="stylus" scoped>
  .content
    width 12rem
    margin 1.31rem auto 0.6rem auto
    padding 0.4rem
    box-sizing border-box
    background #fff
    box-shadow 0 2px 10px 0 #F0F3F5
    border-radius 4px
    .title-box
      font-size 0.28rem
      font-family PingFang-SC-Medium
      font-weight 500
      color #475766
      padding-bottom 0.4rem
      box-sizing border-box
      border-bottom 1px solid #CFDAE6

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
          cursor pointer
          &:nth-child(1)
            border-right none
            border-radius 3px 0 0 3px
          &:nth-child(2)
            border-right none
          &:nth-child(3)
            border-right none
          &:nth-child(4)
            border-radius 0 3px 3px 0
        .router-link-active
          background-color #177FE6
          border 1px solid #177FE6
          color white
</style>
