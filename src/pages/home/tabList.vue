<template>
  <div class="container">
    <div class="content">
      <ul class="list">
        <li class="item" :class="initialIndex===0?'active':''" @click="clickTabHandle(0)">
          <i class="iconfont icon-zhanghaoguanli1"></i>
          <p>账号管理</p>
        </li>
        <li class="item" :class="initialIndex===1?'active':''" @click="clickTabHandle(1)">
          <i class="iconfont icon-tuijianyangshi1"></i>
          <p>丰富样式</p>
        </li>
        <li class="item" :class="initialIndex===2?'active':''" @click="clickTabHandle(2)">
          <i class="iconfont icon-neirongpaiban1"></i>
          <p>内容排版</p>
        </li>
        <li class="item" :class="initialIndex===3?'active':''" @click="clickTabHandle(3)">
          <i class="iconfont icon-wenzhangdaoru1"></i>
          <p>图文导入</p>
        </li>
        <li class="item" :class="initialIndex===4?'active':''" @click="clickTabHandle(4)">
          <i class="iconfont icon-tupiansousuo"></i>
          <p>图片搜索</p>
        </li>
        <li class="item" :class="initialIndex===5?'active':''" @click="clickTabHandle(5)">
          <i class="iconfont icon-tuwencaiji"></i>
          <p>素材采集</p>
        </li>
      </ul>
      <div class="item-slider-content">
        <el-carousel trigger="click" :initial-index="initialIndex"	@change="changeHandle" ref="carousel" indicator-position="none">
          <el-carousel-item v-for="item in list" :key="item.id">
            <div class="img-box"><img :src="item.imgPath" alt=""></div>
            <div class="desc">{{item.desc}}</div>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "tabList",
    data() {
      return {
        initialIndex:0,
        list: [
          {
            id: 1,
            imgPath: require('@/assets/images/accountManage@2x.png'),
            desc: '登录插件自动获取已添加公众号，一经扫码登录，可在各公众号之间自由来回切换'
          },
          {
            id: 2,
            imgPath: require('@/assets/images/style@2x.png'),
            desc: '海量样式任君选择，各种分类应有尽有，支持样式编辑，一键开启最美文章'
          },
          {
            id: 3,
            imgPath: require('@/assets/images/contentCompose@2x.png'),
            desc: '告别手动调整，一键调节内容字间距和两端缩进距离，使排版更加简单'},
          {
            id: 4,
            imgPath: require('@/assets/images/articleImport@2x.png'),
            desc: '多途径导入图文素材，从线上到线下，三种导入方式满足你的编辑需求'
          },
          {
            id: 5,
            imgPath: require('@/assets/images/imageSearch@2x.png'),
            desc: '图片、动态、表情包，全方位供你选择，图片想用就用，不用担心版权问题'
          },
          {
            id: 6,
            imgPath: require('@/assets/images/tuwencaiji@2x.png'),
            desc: '采集心水图片、文章、样式等，素材编辑随用随凋，实现高效编辑'
          },
        ]
      }
    },
    methods:{
      //轮播图切换事件
      changeHandle(index){
        this.initialIndex = index;
      },
      //导航栏点击事件
      clickTabHandle(index){
        //this.initialIndex = index;
        this.$refs.carousel.setActiveItem(index)
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @media screen and (max-width: 768px)
    @import "./css/tabListCss/mobile.styl"

  @media screen and (min-width: 769px)
    @import "./css/tabListCss/pc.styl"
</style>
