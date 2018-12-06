<template>
  <div class="container">
    <table>
      <thead>
        <tr>
          <th style="width:80px;">广告ID</th>
          <th style="width:195px;">广告名称</th>
          <th style="width:76px;">广告形式</th>
          <th style="width:115px;"><span>广告单价</span></th>
          <th style="width:115px;"><span>投放周期</span></th>
          <th style="width:115px;"><span>广告预算</span></th>
          <th style="width:115px;"><span>广告金额</span></th>
          <th style="width:115px;"><span>质检返款</span></th>
          <th style="width:115px;"><span>实际消费</span></th>
          <th style="width:80px;">广告状态</th>
          <th style="width:100px;">操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in tableList" :key="item.adId">
          <td>{{item.adId}}</td>
          <td><span>{{item.name}}</span></td>
          <td>{{item.typeName}}</td>
          <td>{{item.unit}}</td>
          <td>
            <span style="display:block;">{{item.startTime}}</span>
            <span style="display:block;">{{item.endTime}}</span>
          </td>
          <td>{{item.budget}}</td>
          <td>{{item.total}}</td>
          <td>{{item.back}}</td>
          <td>{{item.real}}</td>
          <td>{{item.state}}</td>
          <td><router-link to="/" class="btn">设置</router-link></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: "readTable",
    data(){
      return {
        tableList:[
          {id:1,adId:1,name:'test name',typeName:'图文',unit:2,startTime:'2018-10-12',endTime:'2018-11-10',budget:1000,total:1000,back:200,real:800,state:'待支付'},
          {id:2,adId:2,name:'test name',typeName:'图文',unit:2,startTime:'2018-10-12',endTime:'2018-11-10',budget:1000,total:1000,back:200,real:800,state:'待支付'},
          {id:3,adId:3,name:'test name',typeName:'图文',unit:2,startTime:'2018-10-12',endTime:'2018-11-10',budget:1000,total:1000,back:200,real:800,state:'待支付'},
          {id:4,adId:4,name:'test name',typeName:'图文',unit:2,startTime:'2018-10-12',endTime:'2018-11-10',budget:1000,total:1000,back:200,real:800,state:'待支付'},
          {id:5,adId:5,name:'test name',typeName:'图文',unit:2,startTime:'2018-10-12',endTime:'2018-11-10',budget:1000,total:1000,back:200,real:800,state:'待支付'},
          {id:6,adId:6,name:'test name',typeName:'图文',unit:2,startTime:'2018-10-12',endTime:'2018-11-10',budget:1000,total:1000,back:200,real:800,state:'待支付'},
          {id:7,adId:7,name:'test name',typeName:'图文',unit:2,startTime:'2018-10-12',endTime:'2018-11-10',budget:1000,total:1000,back:200,real:800,state:'待支付'},
          {id:8,adId:8,name:'test name',typeName:'图文',unit:2,startTime:'2018-10-12',endTime:'2018-11-10',budget:1000,total:1000,back:200,real:800,state:'待支付'},
          {id:9,adId:9,name:'test name',typeName:'图文',unit:2,startTime:'2018-10-12',endTime:'2018-11-10',budget:1000,total:1000,back:200,real:800,state:'待支付'},
          {id:10,adId:10,name:'test name',typeName:'图文',unit:2,startTime:'2018-10-12',endTime:'2018-11-10',budget:1000,total:1000,back:200,real:800,state:'待支付'}
        ]
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .container
    color #333
    margin 30px
    margin-top 20px
    overflow hidden
    font-size 14px
    table
      thead
        background: #f0f0f0
        border-radius 3px
        height: 42px
        line-height 42px
      tbody tr
        border-bottom 1px solid #eef1f5
        margin 20px 0
        td
          padding 20px 0
          line-height 18px
          text-align center
          display: table-cell;
          vertical-align: middle;

          span
            display: inline-block
            max-height 36px
            line-height 18px
            overflow hidden
            text-overflow ellipsis
            display -webkit-box
            -webkit-line-clamp 2
            -webkit-box-orient vertical
          .btn
            line-height 18px
            padding 4px 8px
            font-size 12px
            border-radius 3px
            border 1px solid #4cb5ff
            color #4cb5ff
            display inline-block
            margin 0 2px
</style>
