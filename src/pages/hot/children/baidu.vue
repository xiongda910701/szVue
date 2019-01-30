<template>
  <div class="container">
    <ul class="type-box">
      <li class="title">热点榜单</li>
      <li class="item" v-for="item in typeData" :class="item.type===index?'active':''" :key="item.type"
          @click="changeType(item.type)">{{item.name}}
      </li>
    </ul>
    <table class="table">
      <thead>
      <tr>
        <th class="index-box">序号</th>
        <th class="keyword">关键词</th>
        <th class="link">相关链接</th>
        <th class="exponent">搜索指数</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item,index) in list">
        <td class="index-box">
          <span class="index" :class="index<10?'active':''">{{index+1}}</span>
        </td>
        <td class="keyword"><a :href="item.link" target="_blank">{{item.title}}</a></td>
        <td>
          <a :href="item.pic" target="_blank" class="href">新闻</a>
          <a :href="item.new" target="_blank" class="href">视频</a>
          <a :href="item.video" target="_blank" class="href">图片</a>
        </td>
        <td class="exponent">
          {{item.searchNum}}
          <i v-if="item.upOrdown === 'icon-rise'" class="iconfont icon-shangsheng"></i>
          <i v-else-if="item.upOrdown === 'icon-fall'" class="iconfont icon-xiajiang"></i>
          <i v-else class="el-icon-minus"></i>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import {hotApi} from "@/request/api"

  export default {
    name: "baidu",
    data() {
      return {
        index: 1,
        list: [],
        typeData: [
          {type: 1, name: '实时热点', isActive: false},
          {type: 2, name: '今日热点', isActive: false},
          {type: 3, name: '七日热点', isActive: false},
          {type: 4, name: '民生热点', isActive: false},
          {type: 5, name: '娱乐热点', isActive: false},
          {type: 6, name: '体育热点', isActive: false}
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
        this.index = type;
        let params = {chooseType: 3, type: type, page: 1};
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
      let params = {chooseType: 3, type: 1, page: 1};
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
      margin-bottom 0.4rem
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
            width 5rem
          &.link
            width 3rem
          &.exponent
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
            &.keyword
              width 5rem
            &.link
              width 3rem
            &.exponent
              width 2.8rem
              text-align center
            .href
              color #177FE6
              margin-right 0.1rem
            a
              &:hover
                color #177FE6
            .icon-shangsheng
              color #177FE6
            .icon-xiajiang
              color #FFAA00
            .el-icon-minus
              color #12B362
</style>
