<template>
  <div class="container">
    <div class="content">
      <div class="title">TA们都在用</div>
      <div class="sub-title">更多大咖的选择</div>
      <el-carousel indicator-position="none" :autoplay=false arrow="hover">
        <el-carousel-item v-for="item in list" :key="item.page">
          <ul class="list">
            <li class="item" v-for="secondItem in item.list" :key="secondItem.id">
              <img :src="secondItem.imgPath" alt="">{{secondItem.name}}
            </li>
          </ul>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
  export default {
    name: "userCase",
    data(){
      return{
        list:[
              {
                page:1,
                list:[
                  {id:1,imgPath:require('@/assets/images/case/01.png'),name:'海狸先生'},
                  {id:2,imgPath:require('@/assets/images/case/02.png'),name:'十年校园'},
                  {id:3,imgPath:require('@/assets/images/case/03.png'),name:'百思不得姐'},
                  {id:4,imgPath:require('@/assets/images/case/04.png'),name:'萌闪表情'},
                  {id:5,imgPath:require('@/assets/images/case/05.jpg'),name:'音乐情歌经典'},
                  {id:6,imgPath:require('@/assets/images/case/06.png'),name:'杂志之旅'},
                  {id:7,imgPath:require('@/assets/images/case/07.png'),name:'花样大武汉'},
                  {id:8,imgPath:require('@/assets/images/case/08.png'),name:'ONE文艺生活'},
                  {id:9,imgPath:require('@/assets/images/case/09.png'),name:'教育营'},
                  {id:10,imgPath:require('@/assets/images/case/10.png'),name:'睡前避风港'},
                  {id:11,imgPath:require('@/assets/images/case/11.png'),name:'诸葛兵'},
                  {id:12,imgPath:require('@/assets/images/case/12.png'),name:'南木大叔'}
                ]
              },
              {
                page:2,
                list:[
                  {id:1,imgPath:require('@/assets/images/case/13.png'),name:'小资星球'},
                  {id:2,imgPath:require('@/assets/images/case/14.png'),name:'一个守夜人'},
                  {id:3,imgPath:require('@/assets/images/case/15.png'),name:'七书先生'},
                  {id:4,imgPath:require('@/assets/images/case/16.png'),name:'故姐'},
                  {id:5,imgPath:require('@/assets/images/case/17.png'),name:'上海全攻略'},
                  {id:6,imgPath:require('@/assets/images/case/18.png'),name:'睡前伴读'},
                  {id:7,imgPath:require('@/assets/images/case/19.png'),name:'诗词天地'},
                  {id:8,imgPath:require('@/assets/images/case/20.png'),name:'铁血军事'},
                  {id:9,imgPath:require('@/assets/images/case/21.png'),name:'农合论坛网'},
                  {id:10,imgPath:require('@/assets/images/case/22.png'),name:'了不起我的国'},
                  {id:11,imgPath:require('@/assets/images/case/23.png'),name:'今日防务观察'},
                  {id:12,imgPath:require('@/assets/images/case/24.png'),name:'中青网教育'},
                ]
              }
            ]
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @media screen and (max-width: 768px)
    @import "./css/userCaseCss/mobile.styl"
  @media screen and (min-width: 769px)
    @import "./css/userCaseCss/pc.styl"
</style>
