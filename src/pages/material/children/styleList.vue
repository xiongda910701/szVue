<template>
  <div class="container">
    <el-checkbox-group v-model="checkedItems" @change="handleCheckedItemsChange">
      <div class="list" v-show="total">
        <div class="item" v-for="item in list" :key="item.id">
          <div class="item-content" v-html="item.content" :id="item.id"></div>
          <div class="mask">
            <el-checkbox :label="item"><span v-show="false">{{item.name}}</span></el-checkbox>
            <i class="iconfont icon-shanchu1" @click.stop="deleteHandle(item.id)"></i>
            <!--<button type="button" class="btn-copy" @click="copyHandle(item.id)">复制</button>-->
          </div>
        </div>
      </div>
    </el-checkbox-group>
    <div class="operate-box" v-show="total>0">
      <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
      <button type="button" class="btn-delete" @click="multipleDelete">删除</button>
      <div class="page-box" v-show="this.total>50">
        <el-pagination background
                       @current-change="handleCurrentChange"
                       :page-size=50
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
    name: "styleList",
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
    methods:{
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
            var params = {token:token,pageIndex:1,pageSize:50,type:'style'};
            this.getMaterialList(params);
          }else{
            this.$message.error(res.errmsg);
          }
        })
      },
      //全选
      handleCheckAllChange(val) {
        console.log('val:'+val);
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
        var params = {token:token,pageIndex:currentPage,pageSize:50,type:'style'};
        this.getMaterialList(params);
      },

      //复制函数
      copyFun(element){
        this.$message({type:'success',message:'复制成功!'});
        var text = document.getElementById(element);
        if(document.body.createTextRange) {
          var range = document.body.createTextRange();
          range.moveToElementText(text);
          range.select();
        } else if(window.getSelection) {
          var selection = window.getSelection();
          var range = document.createRange();
          range.selectNodeContents(text);
          selection.removeAllRanges();
          selection.addRange(range);
        } else {
          alert("none");
        }
        document.execCommand('Copy', 'false', null);
      },
      //复制点击事件
      copyHandle(id){
        this.copyFun(id);
      },


      //单个点击删除事件函数
      deleteHandle(id,belong) {
        this.$confirm('您确定要删除该项数据吗?', '美编', {confirmButtonText: '确定', cancelButtonText: '取消', type: 'warning'}).then(() => {
          let token = localStorage.getItem('accessToken');
          var params = {token:token,type:'style',ids:[id]};
          this.deleteMaterial(params);
        }).then(()=>{
          console.log('执行了取消删除操作');
        })
      },

      //删除按钮事件
      multipleDelete(){
        debugger;
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
            var params = {token:token,type:'style',ids:ids};
            this.deleteMaterial(params);
          }).then(()=>{
            console.log('执行了取消删除操作');
          })
        }
      },

      //控制元素宽度
      handleElementWidth(){
        let item_content = $('.item-content');
        let children = item_content.children();
        children.css({'max-width':'3.44rem','box-sizing':'border-box'});
        let allNode = children.find('*');
        allNode.css({'max-width':'100%','box-sizing':'border-box'});
      }
    },
    mounted(){
      let token = localStorage.getItem("accessToken");
      var params = {token:token,pageIndex:this.currentPage,pageSize:50,type:'style'};
      this.getMaterialList(params);
      this.handleElementWidth();
    },
    updated() {
      this.handleElementWidth();
    }
  }
</script>

<style lang="stylus" scoped>
  >>>.el-checkbox
    margin-left 0.16rem
  .list
    width 11.2rem
    min-height 4rem
    box-sizing border-box
    column-count 4
    column-gap 0.4rem
    margin-top 0.4rem
    margin-bottom 0.4rem
    .item
      position relative
      width 2.5rem
      min-height 1rem
      box-sizing border-box
      break-inside avoid
      margin-bottom 0.4rem
      background-color white
      cursor pointer
      box-shadow 0 2px 10px 0 #EBF0F5
      padding 0.15rem
      .item-content
        font-size 0.16rem
        img
          width 2.5rem
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
        .btn-copy
          position absolute
          right  0.45rem
          bottom 0.04rem
          width 0.64rem
          height 0.24rem
          font-size 0.14rem
          color white
          border 1px solid white
          border-radius 2px
          cursor pointer
          background-color rgba(0,0,0,0.1)
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
