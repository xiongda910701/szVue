<template>
  <div class="container">
    <common-header></common-header>
    <div class="tab-box" id="tab-box">
      <ul class="list">
        <li class="item" :class="index===1?'active':''" @click="changeType(1)">搜狗微信</li>
        <li class="item" :class="index===2?'active':''" @click="changeType(2)">微博热搜</li>
        <li class="item" :class="index===3?'active':''" @click="changeType(3)">百度热榜</li>
      </ul>
      <div class="search-box">
        <input type="text" v-model="searchWord" placeholder="搜索文章、关键字" @keyup.enter="goPage">
        <i class="el-icon-search" @click="goPage()"></i>
      </div>
    </div>
    <router-view v-show="state"></router-view>
    <iframe id="tab-content" scrolling="yes" :height="height" v-show="!state" :src="src"></iframe>
    <!--<common-footer></common-footer>-->
  </div>
</template>

<script>
  import CommonHeader from '@/components/commonHeader'
  import CommonFooter from '@/components/commonFooter'
  export default {
    name: "hot",
    data() {
      return {
        index: 1,
        searchWord: '',
        state: true,
        src: '',
        height: ''
      }
    },
    components: {CommonHeader, CommonFooter},
    methods: {
      //切换类型
      changeType(index) {
        this.state = true;
        this.index = index;
        let path = '';
        if (index === 1) {
          path = '/hot/sougou';
        } else if (index === 2) {
          path = '/hot/weibo';
        } else {
          path = '/hot/baidu';
        }
        this.$router.push({
          path: path
        })
      },
      goPage() {
        let searchWord = this.searchWord;
        let activeSearch = $('#tab-box').find('.active').text();
        if (!searchWord) {
          this.$message({message: '请输入要查询的内容!', type: 'error'});
        } else {
          this.state = false;
          switch (activeSearch) {
            case '搜狗微信':
              this.src = 'https://weixin.sogou.com/weixin?p=42341200&query=' + searchWord + '&type=2&ie=utf8';
              break;
            case '微博热搜':
              this.src = 'https://s.weibo.com/weibo?q=' + searchWord + "&Refer=top_summary";
              break;
            case '百度热榜':
              this.src = 'https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&tn=baidu&wd=' + searchWord + '&oq=' + searchWord + '&rqlang=cn';
              break;
          }
        }
      }
    },
    mounted(){
      let index = location.href.lastIndexOf("\/");
      let page = location.href.substr(index+1);
      if(page==='sougou'){
        this.index = 1;
      }else if(page==='weibo'){
        this.index = 2;
      }else{
        this.index = 3;
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .tab-box
    display flex
    align-items center
    justify-content space-between
    width 12rem
    height 0.6rem
    margin 1rem auto 0.2rem auto
    padding 0 0.2rem
    box-sizing border-box
    background-color white
    border 1px solid #CFDAE6

    .list
      display flex

      .item
        margin-right 0.4rem
        color #7A8A99
        font-size 0.16rem
        cursor pointer

      .active
        color #177FE6

    .search-box
      display flex
      align-items center
      position relative
      width 2.5rem
      height 0.4rem

      input
        width 100%
        height 100%
        text-indent 0.15rem
        padding-right 0.4rem
        box-sizing border-box
        border 1px solid #CFDAE6
        border-radius 3px
        color #7A8A99

      i
        position absolute
        right 0.15rem
        color #CFDAE6
        cursor pointer

  #tab-content
    width 12rem
    height 100%
    min-height 12rem
    margin 0 3.6rem
    padding 0.2rem 0
    background-color white
    box-sizing border-box
  #tab-content::-webkit-scrollbar
    width: 10px;
    background-color: rgba(0, 0, 0, 0.34);

</style>
