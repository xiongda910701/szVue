<template>
  <div class="container">
    <h1>汇总图</h1>
    <input type="text" class="ad-name" placeholder="请输入广告ID或广告名称">
    <ul class="list-day">
      <li :class="index==0?'active':''" @click="changeDay(0)">7天</li>
      <li :class="index==1?'active':''"  @click="changeDay(1)">15天</li>
      <li :class="index==2?'active':''"  @click="changeDay(2)">30天</li>
    </ul>
    <ul class="list-date">
      <li class="">
        <el-date-picker v-model="selectDate"
                        type="daterange"
                        range-separator="-"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期">
        </el-date-picker>
        <button type="button" @click="searchHandle">查询</button>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "searchComponent",
    data(){
      return {
        index:0,
        selectDate:''
      }
    },
    methods:{
      searchHandle(){
        console.log(this.value6);
      },
      changeDay(indexValue){
        this.index = indexValue;
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .container
    margin 0 30px
    padding-bottom 15px
    overflow hidden
    border-bottom 1px solid #eef1f5
    border-radius 3px
    -webkit-border-radius 3px

    h1
      float left
      border-left 3px solid #4cb5ff
      color #4cb5ff
      font-size 16px
      line-height 16px
      margin 9px 0
      padding-left 10px

    .ad-name
      width 180px
      height 36px
      border 1px solid #eef1f5
      -webkit-border-radius 3px
      margin-left 204px
      padding-left 5px

    .list-day
      float right

      li
        float left
        width 64px
        height 36px
        line-height 34px
        text-align center
        border-radius 3px
        border 1px solid #eef1f5
        color #666
        margin-left 9px
        box-sizing border-box
        cursor pointer

        &.active
          background #4cb5ff
          color #fff
          border-color #4cb5ff

    .list-date
      float right

      li
        overflow hidden
        div
          float left
        button
          float left
          margin-left 10px
          width 72px
          height 36px
          border: solid 1px #eef1f5
          border-radius 3px
          background-color #fff
          color #666
          cursor pointer
</style>
