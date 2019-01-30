<template>
  <div class="container" id="tool">
    <div class="box">
      <div class="card card-qq">
        <a style="width: 144px;" @click="openQQ">
          <i class="iconfont icon-QQ"></i>
          <span class="card-content">客服咨询</span>
        </a>
      </div>
    </div>
    <div class="box">
      <div class="card card-phone">
        <a style="width: 189px;">
          <i class="iconfont icon-dianhua1"></i>
          <span class="card-content">0571-87881699</span>
        </a>
      </div>
    </div>
    <div class="box">
      <div class="card">
        <a href="#">
          <span class="card-content card-content-back">
            <i class="iconfont icon-fanhuidingbu"></i>
          </span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  import { getQQApi } from '@/request/api'
  export default {
    name: "tool",
    data(){
      return{
        qq:'',
        href:''
      }
    },
    methods:{
      getQQ(){
        getQQApi().then(res=>{
            console.log(res);
            if(res.errcode===1){
              this.qq = res.data;
              this.href = 'http://wpa.qq.com/msgrd?v=3&uin='+res.data+'&site=qq&menu=yes';
              localStorage.setItem("qq",res.data);
            }else{
              this.$message.error(res.errmsg);
            }
        })
      },
      openQQ(){
        window.open(this.href);
      }
    },
    mounted(){
      let qq = localStorage.getItem("qq");
      console.log(qq);
      if(qq&&qq!=='null'){
        this.qq = qq;
        this.href = 'http://wpa.qq.com/msgrd?v=3&uin='+qq+'&site=qq&menu=yes';
      }else{
        this.getQQ();
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .container
    position fixed
    right 0
    bottom 1rem
    width 0
    overflow visible
    z-index 10000
    .box
      display inline-block
      float left
      clear both
      position relative
      height 45px
      line-height 45px
      .card-qq,.card-phone
        &:hover
          position relative
          right 100%
          transition all .3s ease-in-out
      .card
        position relative
        right 54px
        transition all .3s ease-in-out .1s
        overflow hidden
        cursor pointer
        a
          font-size 18px
          font-family Helvetica
          overflow hidden
          display block
          padding-right 15px
          padding-left 15px
          text-decoration none
          i
            font-size 0.32rem
            width 54px
            height 54px
            line-height 54px
            display block
            float left
            color #177FE6
            mix-blend-mode overlay
          .icon-3fankuiyijiancheng
            font-size 0.28rem
            margin-left 15px
          .card-content
            float left
            color #475766
            font-family 'Droid Sans',sans-serif
            font-size 18px
            white-space nowrap
            display inline-block
            line-height 54px
            margin-left -15px
          .card-content-back
            margin-left 0
</style>
