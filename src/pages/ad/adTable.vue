<template>
  <table class="container">
    <thead>
    <tr>
      <td>日期</td>
      <td>发布订单数</td>
      <td>覆盖粉丝数</td>
      <td>实际阅读数</td>
      <td>广告金额</td>
      <td>质检返款</td>
      <td>实际消费</td>
    </tr>
    </thead>
    <tbody>
      <tr v-for="item in tableList" :key="item.id">
        <td>{{item.date}}</td>
        <td>{{item.order}}</td>
        <td>{{item.fans}}</td>
        <td>{{item.read}}</td>
        <td>{{item.price}}</td>
        <td>{{item.back}}</td>
        <td>{{item.real}}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
  export default {
    name: "adTable",
    data(){
      return {
        tableList:[
          {id:1,date:"2018-11-30",order:10,fans:1000,read:1000,price:200,back:50,real:150},
          {id:2,date:"2018-11-31",order:20,fans:1000,read:1000,price:200,back:50,real:150},
          {id:3,date:"2018-12-01",order:30,fans:1000,read:1000,price:200,back:50,real:150},
          {id:4,date:"2018-12-02",order:14,fans:1000,read:1000,price:200,back:50,real:150},
          {id:5,date:"2018-12-03",order:7,fans:1000,read:1000,price:200,back:50,real:150},
          {id:6,date:"2018-12-04",order:57,fans:1000,read:1000,price:200,back:50,real:150},
          {id:7,date:"2018-12-05",order:63,fans:1000,read:1000,price:200,back:50,real:150},
          {id:8,date:"2018-12-06",order:21,fans:1000,read:1000,price:200,back:50,real:150},
          {id:9,date:"2018-12-07",order:2,fans:1000,read:1000,price:200,back:50,real:150},
          {id:10,date:"2018-12-08",order:35,fans:1000,read:1000,price:200,back:50,real:150},
        ]
      }
    }

  }
</script>

<style lang="stylus" scoped>
  .container
    text-align center
    border 1px solid #eef1f5
    border-radius 5px
    width 1140px
    margin 0 30px
    font-size 13px
    color #666
    border-collapse collapse
    border-spacing 0

    tr
      height 35px
      line-height 35px

      td
        border 1px solid #eef1f5
</style>
