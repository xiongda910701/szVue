<template>
  <div class="container">
    <ul class="type-box">
      <li class="title">文章分类</li>
      <li class="item" v-for="item in typeData" :class="item.type===index?'active':''" :key="item.type"
          @click="changeType(item.type)">{{item.name}}
      </li>
    </ul>
    <div class="list-box">
      <ul class="list">
        <li class="item" v-for="item in list">
          <img :src="item.img" alt="">
          <div class="info">
            <p class="title"><a :href="item.link" target="_blank">{{item.title}}</a></p>
            <p class="introduce">{{item.introduce}}</p>
            <p class="author-box">
              <span class="author">{{item.author}}|</span>
              <span class="time">{{item.time}}</span>
            </p>
          </div>
        </li>
      </ul>
      <div class="page-box">
        <el-pagination background
                       @current-change="handleCurrentChange"
                       :page-size=20
                       :current-page.sync="currentPage"
                       layout="prev, pager, next, jumper"
                       :total="total"
        >
        </el-pagination>
      </div>
    </div>

    <ul class="rank-box">
      <li class="title">热搜TOP10</li>
      <li class="item" v-for="item in rank">
        <span class="index">{{item.num}}</span>
        <a :href="item.link" target="_blank">{{item.title}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
  import {hotApi} from "@/request/api"

  export default {
    name: "sougou",
    data() {
      return {
        currentPage: 1,
        total: 100,
        index: 1,
        list: [],
        rank: [],
        typeData: [
          {type: 1, name: '热门', isActive: false}, {type: 2, name: '搞笑', isActive: false}, {
            type: 3,
            name: '养生堂',
            isActive: false
          },
          {type: 4, name: '私房话', isActive: false}, {type: 5, name: '八卦精', isActive: false}, {
            type: 6,
            name: '科技咖',
            isActive: false
          },
          {type: 7, name: '财经迷', isActive: false}, {type: 8, name: '汽车控', isActive: false}, {
            type: 9,
            name: '生活家',
            isActive: false
          },
          {type: 10, name: '时尚圈', isActive: false}, {type: 11, name: '育儿', isActive: false}, {
            type: 12,
            name: '旅游',
            isActive: false
          },
          {type: 13, name: '职场', isActive: false}, {type: 14, name: '美食', isActive: false}, {
            type: 15,
            name: '历史',
            isActive: false
          },
          {type: 16, name: '教育', isActive: false}, {type: 17, name: '星座', isActive: false}, {
            type: 18,
            name: '体育',
            isActive: false
          },
          {type: 19, name: '军事', isActive: false}, {type: 20, name: '游戏', isActive: false}, {
            type: 21,
            name: '萌宠',
            isActive: false
          }
        ]
      }
    },
    methods: {
      //获取列表函数
      getList(params) {
        hotApi(params).then(res => {
          console.log(res);
          if (res.errcode === 1) {
            let str = "data:image/jpeg;base64,";
            let list = res.article;
            $.each(res.img, (key, value) => {
              list[parseInt(key)].img = str + value;
              let time = list[parseInt(key)].time;
              time = this.timetrans(time);
              list[parseInt(key)].time = time;
            });
            this.list = list;
            localStorage.setItem("rank", JSON.stringify(res.rank));
            this.rank = JSON.parse(localStorage.getItem("rank"));
            this.$nextTick(() => {
              let index = $('.rank-box .index');
              for (var i = 0; i < index.length; i++) {
                let total = 1;
                $(index[i]).css('opacity', total - 0.08 * i);
              }
            })
          } else {
            this.$message({message: res.errmsg, type: 'error'});
          }
        })
      },
      timetrans(date) {
        var date = new Date(date * 1000);//如果date为13位不需要乘1000
        var Y = date.getFullYear() + '-';
        var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
        var D = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate()) + ' ';
        var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
        var m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
        var s = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
        return Y + M + D + h + m + s;
      },


      //分类切换事件
      changeType(type) {
        this.index = type;
        let params = {chooseType: 1, type: type, page: 1};
        this.getList(params);
      },
      //分页点击事件
      handleCurrentChange(currentPage) {
        let params = {chooseType: 1, type: this.index, page: currentPage};
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
      let params = {chooseType: 1, type: 1, page: 1};
      this.getList(params);
      window.addEventListener('scroll', this.handleScroll)
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
      height auto
      margin-bottom 0.4rem
      background-color white
      box-sizing border-box
      text-indent 0.2rem
      overflow hidden

      .title
        height 0.4rem
        line-height 0.4rem
        border-bottom 1px solid #CFDAE6
        margin-bottom 0.15rem

      .item
        height 0.35rem
        line-height 0.35rem
        font-size 0.14rem
        cursor pointer

        &.active
          color #177FE6

        &:hover
          background-color #CFDAE6
          color #177FE6

    .list-box
      position relative
      left 1.7rem
      width 7.1rem
      padding-bottom 0.4rem

      .list
        .item
          display flex
          flex-wrap nowrap
          width 100%
          height auto
          padding 0.2rem
          box-sizing border-box
          background-color white
          border 1px solid #CFDAE6
          margin-bottom 0.15rem
          border-radius 3px

          img
            display block
            max-width 1.2rem
            max-height 1rem
            margin-right 0.1rem

          .title
            width 5.5rem
            font-size 0.16rem
            margin-top 0.15rem
            overflow hidden
            white-space nowrap
            text-overflow ellipsis

          .introduce
            width 5.5rem
            font-size 0.14rem
            margin 0.15rem 0
            overflow hidden
            white-space nowrap
            text-overflow ellipsis

          .author-box
            font-size 0.12rem

      .page-box
        width 100%
        margin-top 0.4rem
        padding 0.2rem 0
        background-color white

    .rank-box
      position relative
      right 0
      width 3rem
      height 5.2rem
      background-color white
      padding-bottom 0.4rem

      .title
        height 0.4rem
        line-height 0.4rem
        font-size 0.16rem
        border-bottom 1px solid #CFDAE6
        text-indent 0.2rem

      .item
        display flex
        align-items center
        margin-top 0.3rem

        a
          &:hover
            color #177FE6
            cursor pointer

        .index
          display flex
          justify-content center
          align-items center
          width 0.2rem
          height 0.2rem
          margin 0 0.1rem 0 0.2rem
          background-color #177FE6
          color white
          font-size 0.12rem
</style>
