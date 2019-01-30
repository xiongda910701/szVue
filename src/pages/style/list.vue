<template>
  <div class="waterfall">
    <div class="item" v-for="item in styleList" :key="item.id">
      <div class="item-content" v-html="item.content" :id="item.id"></div>
      <div class="tool-box">
        <span class="title">#{{item.title}}#</span>
        <button type="button" class="btn-collect"
                :class="item.is_collected?'active':''"
                @click="collectHandle(item.is_collected,item.id,item.conid)"
        >
          {{item.is_collected?'已收藏':'收藏'}}
        </button>
        <button type="button" class="btn-copy" @click="copyHandle(item.id)">复制</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "styleTitle",
    props:["styleList"],
    methods:{
      //点击收藏事件
      collectHandle(status,id,conid){
        if(status===0){
          var params = {status:status,id:parseInt(id)};
          this.$emit('getParams',params);//未收藏
        }else {
          var params = {status:status,conid:parseInt(conid)};
          this.$emit('getParams',params);//已收藏
        }
      },
      //复制函数
      copyFun(element){
        this.$message({type:'success',message:'复制成功!'});
        $("#"+element).children().css("max-width",'100%');
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
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .waterfall
    column-count 3
    column-gap 0.26rem
    padding 0.4rem
    margin-top 3.2rem
    z-index 1
    .item
      width 3.44rem
      box-sizing border-box
      break-inside avoid
      margin-bottom 0.4rem
      background-color white
      box-shadow 0 2px 10px 0 #EBF0F5
      z-index 1
      .item-content
        position relative
        width 3.44rem
        display flex
        flex-direction column
        justify-content center
        align-items center
        height auto
        font-size 0.16rem
        color #475766
        box-sizing border-box
        box-shadow 0 2px 10px 0 #EBF0F5
        padding 0.2rem
        z-index 1
      .tool-box
        width 100%
        bottom 0
        height 0.6rem
        line-height 0.6rem
        padding 0 0.24rem
        box-sizing border-box
        background-color #FAFBFC
        .title
          font-size 0.16rem
          color #475766
        button
          width 0.64rem
          height 0.24rem
          line-height 0.24rem
          font-size 0.14rem
          margin-top 0.2rem
          border-radius 2px
          cursor pointer
          border none
          float right
          background-color #E6EBF0
          color #7A8A99
          &:hover
            background-color #177FE6
            color white
        .btn-copy
          margin-right 0.12rem
        .active
          background-color #177FE6
          color white
          margin-right 0.12rem
</style>
