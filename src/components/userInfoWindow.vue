<template>
  <div class="container" v-show="UserInfoWindow" @click.self="changeUserInfoWindowState">
    <div class="content" v-show="state">
      <div class="item">
        <span class="key">微信头像</span>
        <img :src="require('@/assets/images/360-icon.png')" alt="">
      </div>
      <div class="item">
        <span class="key">微信昵称</span>
        <span class="value">苦海无边</span>
      </div>
      <div class="item">
        <span class="key">手机号码</span>
        <span class="value">18702604270</span>
      </div>
      <div class="item">
        <span class="key">邮箱</span>
        <span class="value">shenzan@163.com</span>
      </div>
      <button type="button" class="btn-edit" @click="editHandle">编辑</button>
    </div>

    <div class="content-edit" v-show="!state">
      <div class="item">
        <span class="key">微信头像</span>
        <img :src="require('@/assets/images/360-icon.png')" alt="">
      </div>
      <div class="item">
        <span class="key">微信昵称</span>
        <span class="value">苦海无边</span>
      </div>
      <div class="item">
        <span class="key">手机号码</span>
        <span class="value">18702604270</span>
      </div>
      <div class="item">
        <span class="key">邮箱</span>
        <span class="value email" contenteditable="true">shenzan@163.com</span>
      </div>
      <button type="button" class="btn-edit" @click="saveHandle">保存</button>
    </div>

  </div>
</template>

<script>
  import {mapState, mapMutations} from 'vuex'

  export default {
    name: "userInfoWindow",
    data() {
      return {
        state: true
      }
    },
    computed: {
      ...mapState({
        UserInfoWindow: 'UserInfoWindow',
      })
    },
    methods: {
      ...mapMutations({
        changeUserInfoWindowState: 'changeUserInfoWindowState'
      }),
      //编辑按钮点击事件
      editHandle() {
        this.state = !this.state;
      },
      //保存按钮点击事件
      saveHandle() {
        this.state = true;
        this.changeUserInfoWindowState();
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .container
    position fixed
    left 0
    right 0
    top 0
    bottom 0
    background-color rgba(0, 0, 0, 0.5)
    z-index 1000

    .content, .content-edit
      position relative
      width 6.4rem
      height 2.12rem
      margin 3rem auto auto 6.4rem
      padding 0.27rem 0.4rem
      box-sizing border-box
      background-color white
      box-shadow 0 2px 10px 0 rgba(240, 245, 243, 0.35)
      border-radius 4px
      font-size 0.16rem
      font-family PingFang-SC-Medium
      font-weight 500

      .item
        display flex
        align-items center
        height 0.4rem
        line-height 0.4rem

        img
          width 0.4rem
          height 0.4rem
          border-radius 100%

        .key
          color #7A8A99
          display inline-block
          width 0.64rem
          text-align left
          margin-right 0.25rem

        .value
          color #475766
          display inline-block
          width 2rem
          height 0.4rem

      .btn-edit
        position absolute
        top 0.33rem
        right 0.4rem
        width 0.88rem
        height 0.4rem
        font-size 0.16rem
        color white
        background #177FE6
        border none
        box-shadow 0 1px 4px 0 #CFDCE6
        border-radius 2px
        cursor pointer

    .content-edit
      height 2.74rem

      .item
        margin-bottom 0.16rem

        .value
          width 2rem
          height 0.4rem
          color #7A8A99
          text-indent 0.15rem
          background #CFDAE6
          border 1px solid #CFDAE6
          border-radius 4px

        .email
          background-color white
</style>
