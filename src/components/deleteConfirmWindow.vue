<template>
    <div class="container" v-show="deleteWindow">
      <div class="content">
        <div class="title-box">
          <i class="iconfont icon-yiwen"></i>删除提示
        </div>
        <div class="desc">您确定要删除选中的内容吗？</div>
        <div class="btn-box">
          <button type="button" class="btn-confirm" @click="confirmHandle">确定</button>
          <button type="button" class="btn-cancel" @click="hideDeleteWindow">取消</button>
        </div>
      </div>
    </div>
</template>

<script>
  import { mapState, mapMutations} from 'vuex'
  export default {
    name: "deleteConfirmWindow",
    computed:{
      ...mapState('material',{
        deleteWindow:'deleteWindow'
      })
    },
    methods:{
      ...mapMutations('material',{
        hideDeleteWindow:'hideDeleteWindow'
      }),
      //确定操作
      confirmHandle(){
        alert('删除成功');
        this.hideDeleteWindow();
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .container
    position fixed
    top 0
    left 0
    bottom 0
    right 0
    background-color rgba(0,0,0,0.5)
    z-index 1001
    .content
      position absolute
      width 6.4rem
      height 2.06rem
      background-color white
      top 3rem
      left 6.4rem
      border-radius 4px
      padding 0.4rem
      padding-top 0.47rem
      box-sizing border-box
      .title-box
        font-size 0.18rem
        color #475766
        .icon-yiwen
          font-size 0.22rem
          color #E61739
          margin-right 0.16rem
          vertical-align middle
      .desc
        font-size 0.16rem
        margin-top 0.22rem
        margin-left 0.4rem
        color #7A8A99
      .btn-box
        text-align right
        margin-top 0.24rem
        button
          width 0.88rem
          height 0.4rem
          border 1px solid #177FE6
          border-radius 4px
          font-size 0.18rem
          cursor pointer
        .btn-confirm
          background-color #177FE6
          color white
          margin-right 0.24rem
        .btn-cancel
          background-color white
          color #177FE6
</style>
