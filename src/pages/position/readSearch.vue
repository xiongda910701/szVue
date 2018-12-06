<template>
  <div class="container">
    <form>
      <ul>
        <li><input type="text" placeholder="广告ID/广告名称" value=""></li>
        <li>
          <select>
            <option value="">所有状态</option>
            <option value="1">待支付</option>
            <option value="2">待审核</option>
            <option value="3">投放中</option>
            <option value="5">暂停中</option>
            <option value="4">已完成</option>
          </select>
        </li>
        <li><button type="button">查询</button></li>
      </ul>
    </form>
    <div class="btn-box"><router-link to="/"><em>+</em><span>选号直投</span></router-link></div>
  </div>
</template>

<script>
    export default {
        name: "readSearch"
    }
</script>

<style lang="stylus" scoped>
  .container
    padding-top 50px
    margin 0 30px
    overflow hidden
    form
      ul
        float left
        overflow hidden
        li
          float left
          margin-left 10px
          input,select,button
            height 36px
            color #666
            background-color #fff
            border-radius 3px
            border 1px solid #eef1f5
            cursor pointer
          input
              width 240px
              padding-left 5px
          select
              width 120px
              padding-left 5px
          button
              width 72px
    .btn-box
      float right
      line-height 20px
      background #32c5d2
      border-radius 21px
      a
        display block
        color #fff
        padding 9px 20px
        em
          font-size 18px
        span
          line-height 24px
          display inline-block
</style>
