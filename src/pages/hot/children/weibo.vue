<template>
  <div class="container">
    <ul class="type-box">
      <li class="title">热搜分类</li>
      <li class="item" v-for="item in typeData" :class="item.type===Index?'active':''" :key="item.type"
          @click="changeType(item.type)">{{item.name}}
      </li>
    </ul>
    <table class="table" id="table">
      <thead>
        <tr>
          <th class="index-box">序号</th>
          <th class="keyword">关键词</th>
          <th class="hot" v-show="Index===1">搜索热度</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item,index) in list">
          <td class="index-box">
            <span class="index" :class="index<11?'active':''" v-if="item.num">{{item.num}}</span>
            <i class="el-icon-upload2" v-show="item.num===''"></i>
            <span class="dot" v-show="Index===2"></span>
          </td>
          <td class="keyword">
            <a :href="item.link" target="_blank">
              <p class="title" v-html="item.title"></p>
              <div class="sign">
                <p v-if="item.sign === '新'" class="sign-new">{{item.sign}}</p>
                <p v-else-if="item.sign === '热'" class="sign-hot">{{item.sign}}</p>
                <p v-else-if="item.sign === '沸'" class="sign-boil">{{item.sign}}</p>
                <p v-else-if="item.sign === '荐'" class="sign-rec">{{item.sign}}</p>
                <p v-else></p>
              </div>
            </a>
          </td>
          <td class="hot">{{item.hotNum}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import {hotApi} from "@/request/api"

  export default {
    name: "weibo",
    data() {
      return {
        Index: 1,
        list: [],
        typeData: [
          {type: 1, name: '热搜榜', isActive: false},
          {type: 2, name: '新时代', isActive: false}
        ]
      }
    },
    methods: {
      //获取列表函数
      getList(params) {
        hotApi(params).then(res => {
          console.log(res);
          if (res.errcode === 1) {
            this.list = res.data;
            this.$nextTick(()=>{
              $('#table').find('img').css({'width':'18px','height':'18px'});//处理title里面图片宽高
              let index = $('tbody .index');
              for(var i = 0;i<10;i++){
                let total = 1;
                $(index[i]).css('opacity',total-0.08*i);
              }
            });
          } else {
            this.$message({message: res.errmsg, type: 'error'});
          }
        })
      },
      //分类切换事件
      changeType(type) {
        this.Index = type;
        let params = {chooseType: 2, type: type, page: 1};
        this.getList(params);
      },
      //滚动监听事件
      handleScroll() {
        let scrollTop = $(document).scrollTop();
        if (scrollTop > 0) {
          $('.type-box').css({"position": 'fixed', 'top': '0.8rem', 'left': '3.6rem'});
        } else {
          $('.type-box').css({"position": 'absolute', 'top': '0', 'left': '0'});
        }
      }
    },
    mounted() {
      let params = {chooseType: 2, type: 1, page: 1};
      this.getList(params);
      window.addEventListener('scroll', this.handleScroll);
    }
  }
</script>

<style lang="stylus" scoped>
  .container
    position relative
    width 12rem
    margin 0 auto
    display flex
    justify-content space-between
    box-sizing border-box

    .type-box
      position absolute
      left 0
      top 0
      width 1.5rem
      background-color white
      box-sizing border-box
      text-indent 0.2rem
      .title
        height 0.4rem
        line-height 0.4rem
        border-bottom 1px solid #CFDAE6
        margin-bottom 0.15rem

      .item
        height 0.4rem
        line-height 0.4rem
        font-size 0.14rem
        cursor pointer

        &.active
          color #177FE6

        &:hover
          background-color #CFDAE6
          color #177FE6

    .table
      position relative
      left 1.7rem
      width 10.3rem
      margin-bottom 0.4rem
      background-color white
      text-align left
      color #7A8A99
      thead
        height 0.4rem
        line-height 0.4rem
        border-bottom 1px solid #EBEBEB
        th
          font-weight 500
          &.index-box
            width 1.2rem
            padding-left 0.2rem
            box-sizing border-box
          &.keyword
            width 8rem
          &.hot
            width 2.8rem
            text-align center
      tbody
        tr
          height 0.6rem
          line-height 0.6rem
          border-bottom 1px solid #F5F8FA
          td
            &.index-box
              width 1.2rem
              padding-left 0.2rem
              box-sizing border-box
              .dot
                display inline-block
                width 0.08rem
                height 0.08rem
                border-radius 100%
                background-color #E51717
              .index
                display flex
                justify-content center
                align-items center
                width 0.2rem
                height 0.2rem
                background-color #fff
                border 1px solid #B8C4CC
                color #666
                font-size 0.12rem
                border-radius 2px
              .active
                background-color #177FE6
                border 1px solid #177FE6
                color white
              i
                font-size 0.24rem
                color #E51717
            &.keyword
              width 8rem
            &.hot
              width 2.8rem
              text-align center
            a
              display flex
              align-items center
              width 100%
              height 100%
              .title
                width 65%
                display inline-block
                img
                  width 0.18rem
                  height 0.18rem
                &:hover
                  color #177FE6
              .sign
                width 35%
                display inline-block
                p
                  width 0.25rem
                  height 0.25rem
                  line-height 0.25rem
                  text-align center
                  color white
                  border-radius 100%
                  font-size 0.12rem
                  &.sign-new
                    background-color #177FE6
                  &.sign-hot
                    background-color #E51717
                  &.sign-rec
                    background-color #FFAA00
                  &.sign-boil
                    background-color #12B362
</style>
