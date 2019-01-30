<template>
  <div class="container">
    <el-checkbox-group v-model="checkedItems" @change.stop="handleCheckedItemsChange">
      <ul class="list" v-show="total">
        <li class="item" v-for="item in list" :key="item.id">
          <div class="img-box"><img :src="item.cover" alt=""></div>
          <div class="detail-box">
            <div class="title" @click.stop="checkArticle(item.url)">{{item.title}}</div>
            <div class="desc">{{item.desc}}</div>
            <div class="name">{{item.name}}</div>
          </div>
          <div class="mask">
            <el-checkbox :label="item" @change.self="getValue"><span v-show="false">{{item.name}}</span></el-checkbox>
          </div>
          <i class="iconfont icon-shanchu1" @click.stop="deleteHandle(item.id)"></i>
        </li>
      </ul>
    </el-checkbox-group>
    <div class="operate-box" v-show="total>0">
      <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
      <button type="button" class="btn-delete" @click="multipleDelete">删除</button>
      <div class="page-box" v-show="this.total>10">
        <el-pagination background
                       @current-change="handleCurrentChange"
                       :page-size=10
                       :current-page.sync="currentPage"
                       layout="prev, pager, next, jumper"
                       :total="total"
        >
        </el-pagination>
      </div>
    </div>
    <div class="noData" v-show="nodata">
      <img :src="require('@/assets/images/kong.png')" alt="">
      <p>暂无数据！</p>
    </div>
  </div>
</template>

<script>
  import { getMaterialListApi,MaterialDeleteApi } from '@/request/api'
  export default {
    name: "articleList",
    data(){
      return{
        currentPage:1,
        total:0,
        checkAll: false,
        checkedItems: [],
        list: [],
        isIndeterminate: true,
        nodata:false
      }
    },
    methods: {
      //获取素材数据列表函数
      getMaterialList(params){
        getMaterialListApi(params).then(res=>{
          console.log(res);
          if(res.errcode===1){
            this.total = parseInt(res.data.total);
            this.list = res.data.data;
            if(parseInt(res.data.total)){
              this.nodata = false;
            }else{
              this.nodata = true;
            }
          }else{
            this.$message.error(res.errmsg);
          }
        })
      },
      //素材删除接口
      deleteMaterial(params){
        MaterialDeleteApi(params).then(res=>{
          console.log(res);
          if(res.errcode===1){
            this.checkedItems = [];
            this.$message({type:'success',message:'删除成功'});
            let token = localStorage.getItem("accessToken");
            var params = {token:token,pageIndex:1,pageSize:10,type:'article'};
            this.getMaterialList(params);
          }else{
            this.$message.error(res.errmsg);
          }
        })
      },
      //全选
      handleCheckAllChange(val) {
        this.checkedItems = val ? this.list : [];
        this.isIndeterminate = false;
      },
      //单选
      handleCheckedItemsChange(value) {
        console.log(value);
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.list.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.list.length;
      },
      //单选阻止冒泡
      getValue(value){
        console.log(value);
      },
      //分页点击事件函数
      handleCurrentChange(currentPage){
        let token = localStorage.getItem("accessToken");
        var params = {token:token,pageIndex:currentPage,pageSize:10,type:'article'};
        this.getMaterialList(params);
      },

      //单个点击删除事件函数
      deleteHandle(id) {
        this.$confirm('您确定要删除该项数据吗?', '美编', {confirmButtonText: '确定', cancelButtonText: '取消', type: 'warning'}).then(() => {
          let token = localStorage.getItem('accessToken');
          var params = {token:token,type:'article',ids:[id]};
          this.deleteMaterial(params);
        }).then(()=>{
          console.log('执行了取消删除操作');
        })
      },

      //删除按钮事件
      multipleDelete(){
        console.log(this.checkedItems);
        let len = this.checkedItems.length;
        if(!len){
          this.$message({type:'warning',message:'请至少选中一项!'});
        }else{
          this.$confirm('您确定要删除该项数据吗?', '美编', {confirmButtonText: '确定', cancelButtonText: '取消', type: 'warning'}).then(() => {
            let ids = [];
            this.checkedItems.forEach(item=>{
              ids.push(item.id);
            });
            let token = localStorage.getItem('accessToken');
            var params = {token:token,type:'article',ids:ids};
            this.deleteMaterial(params);
          }).then(()=>{
            console.log('执行了取消删除操作');
          })
        }
      },
      //跳转页面查看文章
      checkArticle(url) {
        window.open(url);
      }
    },
    mounted(){
      let token = localStorage.getItem("accessToken");
      var params = {token:token,pageIndex:this.currentPage,pageSize:10,type:'article'};
      this.getMaterialList(params);
    }
  }
</script>

<style lang="stylus" scoped>
  >>>.el-checkbox
    margin-left 0.16rem
  .list
    margin-top 0.4rem
    margin-bottom 0.4rem
    min-height 4rem
    .item
      position relative
      display flex
      box-sizing border-box
      width 11.2rem
      height 2rem
      padding 0.2rem 0
      &:last-child
        margin-bottom 0
      &:hover
        background-color #F0F2F5
      &:hover .icon-shanchu1
        display block
      .img-box
        width 2.5rem
        height 1.6rem
        margin-right 0.4rem
        text-align center
        img
          max-width 2.5rem
          max-height 1.6rem
      .mask
        position absolute
        display block
        left 0
        bottom  0.2rem
        width 2.5rem
        height 0.35rem
        line-height 0.35rem
        background-color rgba(0, 0, 0, 0.3)
      .detail-box
        font-family PingFang-SC-Medium
        font-weight 500
        .title
          width 6.01rem
          height 0.24rem
          font-size 0.24rem
          color #475766
          margin-top 0.16rem
          overflow hidden
          text-overflow ellipsis
          white-space nowrap
          cursor pointer
        .desc
          width 8.28rem
          height 0.48rem
          font-size 0.16rem
          color #7A8A99
          line-height 0.32rem
          margin-top 0.25rem
          margin-bottom 0.26rem
          .name
            font-size 0.16rem
            color #475766
            line-height 0.18rem
      .icon-shanchu1
        position absolute
        right 0.4rem
        bottom 0.2rem
        display none
        color #E61717
  .operate-box
    height 0.4rem
    line-height 0.4rem
    color #475766
    font-size 0.16rem
    .btn-delete
      width 0.88rem
      height 0.4rem
      font-size 0.16rem
      color white
      margin-left 0.4rem
      margin-bottom 0.3rem
      background-color #E61717
      border-radius 2px
      border none
      cursor pointer
    .page-box
      float right
  .noData
    display flex
    flex-wrap wrap
    justify-content center
    align-content center
    height 4rem
    font-size 0.16rem
    color #475766
    img
      width 1.6rem
      height 1.6rem
    p
      width 100%
      text-align center
      margin-left 8px
</style>
