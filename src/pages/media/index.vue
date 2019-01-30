<template>
  <div class="container">
    <person-header></person-header>
    <div class="content">
      <div class="title-box">
        <div class="btn-box">
          <span>媒体账号</span>
          <button type="button" class="btn-add addMedia">+添加媒体</button>
          <button type="button" class="btn-add addMultiple" @click="multipleBox=true">+批量添加</button>
        </div>
        <div class="tool-box">
          <div  class="select-box" @click="showOptionBox">
            <div class="select">
              {{text}}
              <i class="el-icon-caret-bottom"></i>
            </div>
            <div class="option-box" v-show="optionBox">
              <div class="item" v-for="item in options" @click="changeType(item.value,item.label)">{{item.label}}</div>
            </div>
          </div>
          <div class="search-box">
            <input type="text" class="search-input" v-model="search" placeholder="搜索媒体" @input="checkInput" @keyup.enter="searchHandle"/>
            <div class="icon-box" @click="searchHandle"><i class="el-icon-search"></i></div>
          </div>
        </div>
      </div>
      <media-list :list="list" :showdownloadbox='showDownLoadBox'></media-list>
      <div class="noData" v-show="nodata">
        <img :src="require('@/assets/images/kong.png')" alt="">
        <p>暂无数据！</p>
      </div>
      <div class="page-box">
        <el-pagination background @current-change="handleCurrentChange"
          :page-size=15
          :current-page.sync="currentPage"
          layout="prev, pager, next, jumper"
          :total="total"
          v-show="total>15"
        >
        </el-pagination>
      </div>
      <!--添加媒体弹窗开始-->
      <div class="add-media-box">
        <div class="content">
          <i class="el-icon-close close" @click="hideDownLoadBox"></i>
          <div class="title-box-1">
            <i class="iconfont icon-yiwen"></i>温馨提示
          </div>
          <div class="desc-window">请先下载安装美编插件！</div>
          <div class="btn-box">
            <a href="https://www.mbian.com/#/download" class="btn-confirm">下载</a>
          </div>
        </div>
      </div>
      <!--添加媒体弹窗结束-->

      <!--批量添加弹窗开始-->
      <div class="multiple-box" v-show="multipleBox">
        <div class="multiple-content">
          <div class="multiple-content-title">
            <span>批量添加公众号</span>
            <i class="el-icon-close" @click="multipleBox=false"></i>
          </div>
          <div class="multiple-content-body">
            <div class="btn-box">
              <input type="file" class="file" @change="selectFile"/>
              <button type="button" class="button active">上传公众号表格</button>
              <a href="https://www.shenzan.com/down/mb.xlsx" class="button cancel">下载模板表格</a>
            </div>
            <div class="desc-box">
              <i class="el-icon-warning"></i>
              <span>请先下载模板表格，按照模板填写好后再上传，单个表格请勿大于5M</span>
            </div>
          </div>
        </div>
      </div>
      <!--批量添加弹窗结束-->
    </div>
    <common-footer></common-footer>
    <tool></tool>
  </div>
</template>

<script>
  import PersonHeader from '@/components/personHeader'
  import CommonFooter from '@/components/commonFooter'
  import MediaList from './mediaList'
  import Tool from '@/components/tool'
  import {getMediaListApi,uploadApi } from '@/request/api'
  import {mapMutations} from 'vuex'
  import axios from 'axios'
  export default {
    name: "media",
    components: {PersonHeader,CommonFooter, MediaList,Tool},
    data(){
      return{
        currentPage:0,
        list:[],
        total:0,
        download:true,
        nodata:false,
        text:'全部',
        value:0,
        options: [{value: 0, label: '全部'}, {value: 1, label: '已授权'}, {value: 2, label: '未授权'}],
        type:0,
        search:'',
        optionBox:false,
        multipleBox:false
      }
    },
    methods: {
      ...mapMutations('login',{
        checkLoginState:'checkLoginState',
      }),
      //获取媒体列表函数
      getMediaList(params){
        getMediaListApi(params).then((res)=>{
          console.log(res);
          if(res.errcode===1){
            this.list = res.data;
            this.total = parseInt(res.total);
            if(!res.data.length){
              this.nodata = true;
            }else{
              this.nodata = false;
            }
          }else if(res.errcode===101){
            localStorage.removeItem("accessToken");
            this.$router.push({path:'/login'});
          }else{
            this.$message.error(res.errmsg);
          }
        })
      },
      //选择框选中事件
      changeType(value,label){
        this.type = parseInt(value);
        this.text = label;
        $('.option-box').css('display','none');
        var params = {token:localStorage.getItem("accessToken"),firstNum:0,limitNum:12,type:this.type,search:this.search};
        this.getMediaList(params);
      },
      showOptionBox(){
        this.optionBox = !this.optionBox;
      },
      //分页点击事件
      handleCurrentChange(currentPage){
        let firstNum = (currentPage-1)*12;
        var params = {token:localStorage.getItem("accessToken"),firstNum:firstNum,limitNum:12,type:this.type,search:this.search};
        this.getMediaList(params);
      },

      //搜索按钮点击事件
      searchHandle(){
        var params = {token:localStorage.getItem("accessToken"),firstNum:0,limitNum:12,type:this.type,search:this.search};
        this.getMediaList(params);
      },
      //搜索框输入检测事件
      checkInput(){
        if(this.search === ""){
          var params = {token:localStorage.getItem("accessToken"),firstNum:0,limitNum:12,type:0,search:this.search};
          this.getMediaList(params);
        }
      },
      //点击添加媒体事件
      showDownLoadBox() {
        $(".add-media-box").css('display',"block");
      },
      //隐藏选择框
      hideDownLoadBox(){
        $(".add-media-box").hide();
      },
      //选择文件
      selectFile(e){
        debugger;
        console.log(e);
        let _this= this;
        let formData = new FormData();
        formData.append('file', document.querySelector('input[type=file]').files[0]);
        formData.append('token', localStorage.getItem('accessToken'));
        axios.post('https://www.mbian.com/api/User/importMediaPublic',formData)
          .then(function (response) {
            console.log(response);
            $('.file').val('');//清空上次选中的文件名，避免选择同一个文件无法触发事件
            var params = {token:localStorage.getItem("accessToken"),firstNum:0,limitNum:12,type:0,search:_this.search};
            _this.getMediaList(params);
            if(response.status===200){
              if(response.data.errcode===1){
                _this .multipleBox = false;
                _this.$message({message:"上传成功!",type:'success'});
              }else{
                if(response.data.errmsg1){
                  let errmsg1 = response.data.errmsg1;
                  let errmsg2 = response.data.errmsg2;
                  _this.$message({message:errmsg1+'<br/>'+errmsg2,type:'error'});
                }else{
                  _this.$message({message:response.data.errmsg,type:'error'});
                }
              }
            }
          }).catch(function (error) {
            console.log(error);
          });
      }
    },
    mounted(){
      var params = {token:localStorage.getItem("accessToken"),firstNum:0,limitNum:12,type:0,search:this.search};
      this.getMediaList(params);
      $(document).on("click",".addMedia",function () {
        if($(this).hasClass('plugin-check')){
          return false;
        }
        if($(this).attr('data-id') || $(this).attr('data-username')){
          $(".desc-window").text('请先下载安装美编插件！')
        }else{
          $(".desc-window").text('请在美编插件中添加媒体账号!')
        }
        $(".add-media-box").show();
      })
    }
  }
</script>

<style lang="stylus" scoped>
  .content
    width 12rem
    height auto
    margin 1.31rem auto 0.8rem auto
    padding 0.4rem
    background #fff
    box-shadow 0 2px 10px 0 #F0F3F5
    border-radius 4px
    box-sizing border-box

    .title-box
      display flex
      justify-content space-between
      font-size 0.28rem
      font-family PingFang-SC-Medium
      font-weight 500
      color #475766
      padding-bottom 0.4rem
      border-bottom 1px solid #CFDAE6
      .btn-box
        .btn-add
          width 1.2rem
          height 0.4rem
          background-color white
          font-size 0.16rem
          color #177FE6
          border 1px solid #177FE6
          border-radius 0.2rem
          cursor pointer
          margin-left 0.4rem
        .addMultiple
          color #CFDAE5
          border 1px solid #CFDAE5
          cursor pointer
          &:hover
            color #177FE6
            border 1px solid #177FE6
      .tool-box
        display flex
        .select-box
          position relative
          width 1.04rem
          height 0.38rem
          line-height 0.38rem
          margin-right 0.14rem
          font-size 0.14rem
          color #475766
          .select
            display flex
            align-items center
            justify-content space-between
            color #475766
            border 1px solid #cfdae6
            border-radius 4px
            cursor pointer
            padding 0 0.1rem
            i
              justify-content right
          .option-box
            position absolute
            top 0.5rem
            width 1.04rem
            text-align center
            border 1px solid #cfdae6
            border-radius 4px
            background-color white
            &:before
              position absolute
              top -0.21rem
              left 0.45rem
              content ''
              border 0.1rem solid transparent
              border-bottom 0.1rem solid #fff
            .item
              cursor pointer
              &:hover
                color #177FE6
                background-color #ececec
        .search-box
          position relative
          .search-input
            width 2.5rem
            height 0.4rem
            color #475766
            background-color #FFFFFF
            border 1px solid #CFDAE6
            border-radius:4px;
            text-indent 0.17rem
            padding-right 0.6rem
            box-sizing border-box
          .icon-box
            position absolute
            top 0
            right 0
            display flex
            justify-content center
            align-items center
            width 0.6rem
            height 100%
            cursor pointer
          .el-icon-search
            font-size 0.18rem
            color #475766
    .page-box
      text-align right
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
    .add-media-box
      display none
      position fixed
      top 0
      left 0
      bottom 0
      right 0
      background-color rgba(0,0,0,0.5)
      z-index 1001
      .content
        position relative
        width 6.4rem
        height 2.06rem
        background-color white
        border-radius 4px
        padding 0.4rem
        margin-top 3.5rem
        box-sizing border-box
        box-shadow none
        .close
          position absolute
          right 0.24rem
          top 0.15rem
          font-size 0.24rem
          cursor pointer
        .title-box-1
          font-size 0.18rem
          color #475766
          .icon-yiwen
            font-size 0.22rem
            color #FFAA00
            margin-right 0.16rem
            vertical-align middle
        .desc-window
          font-size 0.16rem
          margin-top 0.22rem
          margin-left 0.4rem
          color #7A8A99
        .btn-box
          margin-top 0.24rem
          a
            display block
            float right
            width 1.2rem
            height 0.4rem
            line-height 0.4rem
            border 1px solid #177FE6
            border-radius 4px
            font-size 0.18rem
            text-align center
            cursor pointer
            color white
          .btn-confirm
            background-color #177FE6
            color white
            margin-right 0.24rem
    .multiple-box
      position fixed
      left 0
      right 0
      top 0
      bottom 0
      display flex
      justify-content center
      align-items center
      background-color rgba(0,0,0,0.5)
      z-index 1001
      .multiple-content
        width 6.4rem
        height 2.45rem
        font-size 0.16rem
        background-color white
        border-radius 4px
        box-sizing border-box
        .multiple-content-title
          display flex
          align-items center
          justify-content space-between
          width 100%
          height 0.64rem
          padding 0 0.4rem
          box-sizing border-box
          color #475766
          border-bottom 1px solid #CFDAE5
          i
            font-size 0.24rem
            cursor pointer
        .multiple-content-body
          padding 0 0.4rem
          box-sizing border-box
          .btn-box
            margin-top 0.4rem
            position relative
            .button,a
              display inline-block
              width 1.366rem
              height 0.4rem
              line-height 0.4rem
              text-align center
              background #fff
              border-radius 2px
              font-size 0.14rem
              color #177FE6
              border 1px solid #177FE6
              margin-right 0.24rem
              cursor pointer
              &.active
                position absolute
                left 0
                top 0
                background #177FE6
                color white
                z-index 1001
            .file
              position absolute
              left 0
              top 0
              width 1.36rem
              height 0.4rem
              z-index 1002
              opacity 0
              cursor pointer
            .cancel
              margin-left 1.6rem
          .desc-box
            font-family MicrosoftYaHei
            font-size 0.12rem
            color #7A8A99
            margin-top 0.23rem
            i
              color #FFAA00
              margin-right 0.1rem

</style>
