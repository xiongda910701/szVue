<template>
  <div class="container">
    <el-checkbox-group v-model="checkedItems" @change="handleCheckedItemsChange">
      <ul class="list" v-show="total">
        <li class="item" v-for="(item,index) in list" :key="item.id">
          <img :src="item.url" alt="">
          <div class="mask">
            <el-checkbox :label="item"><span v-show="false">{{item.name}}</span></el-checkbox>
            <i class="iconfont icon-shanchu1" @click.stop="deleteHandle(item.id)"></i>
          </div>
        </li>
      </ul>
    </el-checkbox-group>
    <div class="operate-box" v-show="total>0">
      <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
      <button type="button" class="btn-delete" @click="multipleDelete">删除</button>
      <div class="page-box" v-show="this.total>16">
        <el-pagination background
                       @current-change="handleCurrentChange"
                       :page-size=16
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
    name: "picList",
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
            var params = {token:token,pageIndex:1,pageSize:16,type:'image'};
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
      //分页点击事件函数
      handleCurrentChange(currentPage){
        let token = localStorage.getItem("accessToken");
        var params = {token:token,pageIndex:currentPage,pageSize:16,type:'image'};
        this.getMaterialList(params);
      },

      //单个点击删除事件函数
      deleteHandle(id) {
        this.$confirm('您确定要删除该项数据吗?', '美编', {confirmButtonText: '确定', cancelButtonText: '取消', type: 'warning'}).then(() => {
          let token = localStorage.getItem('accessToken');
          var params = {token:token,type:'image',ids:[id]};
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
            var params = {token:token,type:'image',ids:ids};
            this.deleteMaterial(params);
          }).then(()=>{
            console.log('执行了取消删除操作');
          })
        }
      }
    },
    mounted(){
      let token = localStorage.getItem("accessToken");
      var params = {token:token,pageIndex:this.currentPage,pageSize:16,type:'image'};
      this.getMaterialList(params);
    }
  }
</script>

<style lang="stylus" scoped>
  >>>.el-checkbox
      float left
      margin-left 0.16rem
  .list
    width 12rem
    min-height 4rem
    margin-top 0.4rem
    overflow hidden
    .item
      float left
      position relative
      width 2.5rem
      height 1.6rem
      line-height 1.8rem
      margin-bottom 0.4rem
      margin-right 0.4rem
      cursor pointer
      text-align center
      box-shadow 0 2px 10px 0 #EBF0F5
      &:last-child
        margin-right 0
      img
        display inline-block
        max-width 2.5rem
        max-height 1.6rem
      .mask
        position absolute
        display block
        left 0
        bottom  0
        width 100%
        height 0.35rem
        line-height 0.35rem
        background-color rgba(0, 0, 0, 0.3)
        .icon-shanchu1
          position absolute
          right 0.16rem
          color white
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
