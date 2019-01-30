<template>
  <div class="container">
    <common-header></common-header>
    <div class="content">
      <div class="left">
        <div class="title">帮助中心</div>
        <dl>
            <dt></dt>
            <dd><a :class="index==1?'active':''" @click="scrollTop(1,'viedo')">视频教程</a></dd>
          <div class="divider"></div>
          <dt>安装问题</dt>
          <dd><a  :class="index==2?'active':''" @click="scrollTop(2,'toChrome')">谷歌浏览器</a></dd>
          <dd><a  :class="index==3?'active':''" @click="scrollTop(3,'toQQ')">QQ浏览器</a></dd>
          <dd><a  :class="index==4?'active':''" @click="scrollTop(4,'to2345')">2345浏览器</a></dd>
          <dd><a  :class="index==5?'active':''" @click="scrollTop(5,'toLb')">猎豹浏览器</a></dd>
          <dd><a  :class="index==6?'active':''" @click="scrollTop(6,'to360js')">360极速浏览器</a></dd>
          <dd><a  :class="index==7?'active':''" @click="scrollTop(7,'to360aq')">360安全浏览器</a></dd>
          <div class="divider"></div>
          <dt>常见问题</dt>
          <dd><a  :class="index==8?'active':''" @click="scrollTop(8,'howToWork')">美编插件如何工作</a></dd>
          <dd><a  :class="index==9?'active':''" @click="scrollTop(9,'toBrowser')">插件支持的浏览器</a></dd>
          <dd><a  :class="index==10?'active':''" @click="scrollTop(10,'addMoreAccount')">添加多个公众号</a></dd>
          <dd><a  :class="index==11?'active':''" @click="scrollTop(11,'styleKG')">样式开关显示页面</a></dd>
          <dd><a  :class="index==12?'active':''" @click="scrollTop(12,'styleEdit')">样式是否可以编辑</a></dd>
          <dd><a  :class="index==13?'active':''" @click="scrollTop(13,'update')">更新美编插件</a></dd>
          <div class="divider"></div>
          <dt>安全问题</dt>
          <dd><a :class="index==14?'active':''" @click="scrollTop(14,'dataSafety')">是否影响数据安全</a></dd>
          <dd><a :class="index==15?'active':''" @click="scrollTop(15,'use')">是否影响微信公众平台自身功能的使用</a></dd>
        </dl>
      </div>
      <div class="right" ref="right">
        <p class="desc-title" style="color: #475766;font-size: 0.16rem;padding: 0.2rem 0.4rem" id="viedo">新手指南视频教程</p>
        <div class="video-box">
          <video :src="require('@/assets/video/video.mp4')" type="video/mp4" onplay="this.currentTime=6" controls="controls">
            抱歉，你的浏览器不支持video标签。。
          </video>
        </div>
        <div class="title"><img :src="icon_question" alt="">如何安装美编助手插件</div>
        <div class="desc-content">
          <!--chrome-->
          <p class="desc-title" id="toChrome">1.谷歌浏览器</p>
          <p class="desc-text">
            (1) 浏览器输入网址<span class="color-text">https://www.mbian.com/#/download</span>，
            选择谷歌浏览器，点击“立即下载”，打开安装文件所在文件夹;
          </p>
          <img :src="require('@/assets/images/help/chrome1@2x.png')" alt="" style="max-width: 100%;height: auto;">
          <p class="desc-text">
            (2) 浏览器输入，
            <span class="color-text">chrome://extensions/</span>
            ，或打开更多工具-扩展程序，拖拽安装文件到扩展程序页面;
          </p>
          <img :src="require('@/assets/images/help/chrome2@2x.png')" alt="">
          <p class="desc-text" id="toQQ">
            (3) 弹窗点击，
            <span class="color-text">“添加扩展程序”</span>
            ，完成安装。点击查看详细安装教程
          </p>
          <img :src="require('@/assets/images/help/chrome3@2x.png')" alt="">

          <!--qq-->
          <p class="desc-title" >2.QQ浏览器</p>
          <p class="desc-text">
            (1) 浏览器输入网址<span class="color-text">https://www.mbian.com/#/download</span>，
            选择QQ浏览器，点击“立即下载”，打开安装文件所在文件夹;
          </p>
          <img :src="require('@/assets/images/help/qq1@2x.png')" alt="" style="max-width: 100%;height: auto;">
          <p class="desc-text">
            (2) 浏览器输入
            <span class="color-text">qqbrowser://extensions/index</span>
            ，或打开菜单-应用中心，拖拽安装文件到应用中心页面;
          </p>
          <img :src="require('@/assets/images/help/qq2@2x.png')" alt="">
          <p class="desc-text" id="to2345">
            (3) 弹窗点击，
            <span class="color-text">“添加扩展程序”</span>
            ，完成安装。点击查看详细安装教程
          </p>
          <img :src="require('@/assets/images/help/qq3@2x.png')" alt="">


          <!--2345-->
          <p class="desc-title" >3.2345浏览器</p>
          <p class="desc-text">
            (1) 浏览器输入网址<span class="color-text">https://www.mbian.com/#/download</span>，
            选择2345浏览器，点击“立即下载”，打开安装文件所在文件夹;
          </p>
          <img :src="require('@/assets/images/help/23451@2x.png')" alt="" style="max-width: 100%;height: auto;">
          <p class="desc-text" id="toLb">
            (2) 拖拽安装文件到到浏览器任意页面，弹窗点击“添加”，完成安装。
            <span class="color-text">点击查看详细安装教程</span>
          </p>
          <img :src="require('@/assets/images/help/23452@2x.png')" alt="">


          <!--猎豹-->
          <p class="desc-title" >4.猎豹浏览器</p>
          <p class="desc-text">
            (1) 浏览器输入网址<span class="color-text">https://www.mbian.com/#/download</span>，
            选择猎豹浏览器，点击“立即下载”，打开安装文件所在文件夹;
          </p>
          <img :src="require('@/assets/images/help/lb1@2x.png')" alt="" style="max-width: 100%;height: auto;">
          <p class="desc-text" id="to360js">
            (2) 拖拽安装文件到到浏览器任意页面，弹窗勾选“访问您的敏感页面”，点击“安装”，完成安装。
            <span class="color-text">点击查看详细安装教程</span>，
          </p>
          <img :src="require('@/assets/images/help/lb2@2x.png')" alt="">


          <!--360极速-->
          <p class="desc-title" >5.360极速浏览器</p>
          <p class="desc-text">
            (1) 浏览器输入网址<span class="color-text">https://www.mbian.com/#/download</span>，
            选择360极速浏览器，点击“立即下载”，打开安装文件所在文件夹;
          </p>
          <img :src="require('@/assets/images/help/360js1@2x.png')" alt="" style="max-width: 100%;height: auto;">
          <p class="desc-text" id="to360aq">
            (2) 拖拽安装文件到到浏览器任意页面，弹窗点击“添加”，完成安装。
            <span class="color-text">点击查看详细安装教程</span>
          </p>
          <img :src="require('@/assets/images/help/360js2@2x.png')" alt="">

          <!--360安全-->
          <p class="desc-title" >6.360安全浏览器</p>
          <p class="desc-text">
            (1) 浏览器输入网址<span class="color-text">https://www.mbian.com/#/download</span>，
            选择360安全浏览器，点击“立即下载”，打开安装文件所在文件夹;
          </p>
          <img :src="require('@/assets/images/help/360aq1@2x.png')" alt="" style="max-width: 100%;height: auto;">
          <p class="desc-text" id="howToWork">
            (2) 拖拽安装文件到到浏览器任意页面，弹窗点击“添加”，完成安装。
            <span class="color-text">点击查看详细安装教程</span>
          </p>
          <img :src="require('@/assets/images/help/360aq2@2x.png')" alt="">
        </div>
        <!--============================================================================================-->
        <div class="title" ><img :src="icon_question" alt="">美编助手是如何工作的</div>
        <div class="desc-content">
          <div class="desc-text">美编助手是一款运行在浏览器上的插件，可以在 Windows 和 Mac系统的浏览器上运行，由于浏览器内核的不同，美编助手现只支持谷歌浏
            览器、QQ浏览器、2345浏览器、猎豹浏览器、360极速浏览器、360安全浏览器。下载安装成功后，会在浏览器的导航栏（部分浏览器是在
            搜索栏上），有一个蓝色的“”图标，点击即可打开。以下是美编助手的功能介绍：
          </div>
          <!--===========================================================================-->
          <p class="desc-title">1.会员登录</p>
          <p class="desc-text">
            (1) 默认显示登录页面，输入账号密码，点击登录；
          </p>
          <img :src="require('@/assets/images/help/login1@2x.png')" alt="">
          <p class="desc-text">
            (2) 如果在美编个人中心登陆过，点击助手插件图标之后会自动登录。
          </p>
          <img :src="require('@/assets/images/help/login2@2x.png')" alt="">
          <!--===========================================================================-->
          <p class="desc-title">2. 公众号添加与管理</p>
          <p class="desc-text">
            (1) 登录后默认显示公众号页面，已经添加过的公众号会出现在列表里，如需添加新的公众号，点击“添加公众号”跳转至微信公众号平台进
            行添加，添加成功后会自动出现在公众号列表顶部，各公众号之间可自由来回切换，无需重复扫码;
          </p>
          <img :src="require('@/assets/images/help/login3@2x.png')" alt="">
          <p class="desc-text">
            (2) 鼠标移入公众号，右边会显示授权状态，并有文字提示。授权为绿色图标，未授权为灰色图标;
          </p>
          <img :src="require('@/assets/images/help/login4@2x.png')" alt="">
          <img :src="require('@/assets/images/help/login5@2x.png')" alt="">
          <p class="desc-text">
            (3) 默认排序是新添加的公众号显示在前面，可进行置顶操作。
          </p>
          <img :src="require('@/assets/images/help/login6@2x.png')" alt="">
          <img :src="require('@/assets/images/help/login7@2x.png')" alt="">
          <!--===========================================================================-->
          <p class="desc-title">3. 订单</p>
          <p class="desc-text">
            (1) 显示所有订单收益金额和发布中的订单数以及待发布的订单数，以便快速查看收益和了解订单状态;
          </p>
          <img :src="require('@/assets/images/help/order1@2x.png')" alt="">
          <p class="desc-text">
            (2) 设置了订单管理和接单中心的快速入口，点击后分别跳转至订单管理页面和接单中心页面。
          </p>
          <img :src="require('@/assets/images/help/order2@2x.png')" alt="">
          <!--===========================================================================-->
          <p class="desc-title">4. 设置</p>
          <p class="desc-text">
            设置里是插件的功能开关，对微信文章的编辑增强功能，目前放置了模板样式功能，如暂时不想在页面上显示这项功能，可以选择关闭。
          </p>
          <img :src="require('@/assets/images/help/set1@2x.png')" alt="" style="max-width: 100%;height: auto;">
          <img :src="require('@/assets/images/help/set2@2x.png')" alt="" style="max-width: 100%;height: auto;">
          <!--===========================================================================-->
          <p class="desc-title">5. 关于</p>
          <p class="desc-text">
            (1) 查看美编助手版本信息;
          </p>
          <img :src="require('@/assets/images/help/about@2x.png')" alt="">
          <p class="desc-text">
            (2) 对于美编助手的问题及建议可在此反馈，通过帮助查看一些常见问题的解决方法；
          </p>
          <img :src="require('@/assets/images/help/back@2x.png')" alt="">
          <p class="desc-text" id="toBrowser">
            (3) 有关插件的相关问题，可在帮助中查看。
          </p>
          <img :src="require('@/assets/images/help/help@2x.png')" alt="" style="max-width: 100%;height: auto;">
          <!--===========================================================================-->
        </div>
        <!--============================================================================================-->
        <div class="title" ><img :src="icon_question" alt="">为什么火狐浏览器安装不了插件？美编助手支持的浏览器有哪些？</div>
        <div class="desc-content">
          <div class="desc-title">美编助手是基于Chromium内核的浏览器插件，目前只支持在谷歌浏览器、QQ浏览器、2345浏览器、猎豹浏览器、360极速浏览器、360安
            全浏览器上稳定运行。火狐浏览器及其它浏览器目前不在支持范围内。
          </div>
          <!--===========================================================================-->
          <img :src="require('@/assets/images/help/agree@2x.png')" alt="" style="max-width: 100%;height: auto;">
          <!--===========================================================================-->
        </div>
        <!--============================================================================================-->
        <div class="title" id="addMoreAccount"><img :src="icon_question" alt="">如何添加多个公众号？</div>
        <div class="desc-content">
          <div class="desc-title">美编支持高效管理多个公众号，需要添加多个公众号时，点击“添加公众号 ”依次添加即可。可在不同的公众号之间来回切换，无需再次扫码。</div>
        </div>
        <!--============================================================================================-->
        <div class="title" id="styleKG"><img :src="icon_question" alt="">模板样式功能在哪里显示？为什么打开了模板样式功能开关却看不见？</div>
        <div class="desc-content">
          <div class="desc-title">模板样式是针对微信文章编辑的增强功能，只有在微信公众号平台上编辑文章时才会出现，其他页面一律不显示。</div>
        </div>
        <!--============================================================================================-->
        <div class="title" id="styleEdit"><img :src="icon_question" alt="">样式怎么添加到文章里？可以对样式进行编辑吗？</div>
        <div class="desc-content">
          <p class="desc-title">1. 鼠标点击样式会自动出现在文章编辑器里；</p>
          <img :src="require('@/assets/images/help/style1@2x.png')" alt="" style="max-width: 100%;height: auto;">
          <p class="desc-text">
            2. 选择样式后，有删除、清除样式、前空行、后空行、现有颜色
          </p>
          <img :src="require('@/assets/images/help/style2@2x.png')" alt="">
          <p class="desc-text">
            (1) 删除即删除整个样式；
          </p>
          <p class="desc-text">
            (2) 清除样式则删除样式的框架布局，保留图片和文字信息；
          </p>
          <img :src="require('@/assets/images/help/style3@2x.png')" alt="" style="max-width: 100%;height: auto;">
          <p class="desc-text">
            (3) 前、后空行增加样式上、下方的空行；
          </p>
          <p class="desc-text">
            (4) 现有颜色只有有颜色选择时才可修改颜色，纯图片和清除样式后无可修改颜色。
          </p>
          <img :src="require('@/assets/images/help/style4@2x.png')" alt="" style="max-width: 100%;height: auto;">
        </div>
        <!--============================================================================================-->
        <div class="title"><img :src="icon_question" alt="">模板样式怎么添加我的分组？如何把样式添加到对应的分组里？</div>
        <div class="desc-content">
          <p class="desc-title">1. 在我的里面有添加分组的功能，点击右上角的设置图标，会弹出下拉框，点击添加分组，输入分组名称，点击保存；</p>
          <img :src="require('@/assets/images/help/group1@2x.png')" alt="" style="max-width: 100%;height: auto;">
          <p class="desc-text">
            2. 鼠标移入样式，点击“添加到我的样式”，该样式会出现在我的-未分组里，鼠标再次移入样式会出现“移动样式”字样，点击“移动样式”，
            选择分组，点击确定。
          </p>
          <img :src="require('@/assets/images/help/group2@2x.png')" alt="" style="max-width: 100%;height: auto;">
        </div>
        <!--============================================================================================-->
        <div class="title" id="update"><img :src="icon_question" alt="">如何更新美编助手？</div>
        <div class="desc-content">
          <p class="desc-title">当助手插件需要更新的时候，会在插件的图标上有一个红色“</p>
          <img :src="require('@/assets/images/help/version1@2x.png')" alt="">
        </div>
        <!--============================================================================================-->
        <div class="title" id="dataSafety"><img :src="icon_question" alt="">美编助手在使用助手的过程中，会不会影响到我的数据安全？</div>
        <div class="desc-content">
          <p class="desc-title">美编助手对于公众号数据遵循微信公众平台第三方平台的接口使用规范，不会获取用户密码、Cookie 等信息，不会对微信公众平台以及日
            常浏览器的本身使用造成影响。</p>
        </div>
        <!--============================================================================================-->
        <div class="title" id="use"><img :src="icon_question" alt="">美编助手是否会影响到微信公众号平台功能的使用？</div>
        <div class="desc-content">
          <p class="desc-title">美编助手是一款基于浏览器插件技术制作的工具，它符合Google的浏览器插件开发规范，并且已经通过了Google的审核发布到了官方的
            Chrome应用商店，不会影响到微信公众号平台功能的使用。</p>
        </div>
        <!--============================================================================================-->
      </div>
    </div>
    <tool></tool>
  </div>
</template>

<script>
  import CommonHeader from '@/components/commonHeader'
  import CommonFooter from '@/components/commonFooter'
  import Tool from '@/components/tool'

  export default {
    name: "help",
    components:{CommonHeader,CommonFooter,Tool},
    data(){
      return {
        index:1,
        icon_question:require('@/assets/images/question@2x.png'),
        scroll:''
      }
    },
    methods:{
      scrollTop(indexValue,element){
        this.index  = indexValue;
        document.querySelector("#"+element).scrollIntoView({behavior: "smooth", block: "start", inline: "center"});
      },
      handleScroll () {
        let scrollTop = $(document).scrollTop();
        if(scrollTop>0){
          $('.left').css({"position":'fixed','top':'0.8rem','left':'3.6rem'});
        }else{
          $('.left').css({"position":'fixed','top':'1.2rem','left':'3.6rem'});
        }
      }
    },
    mounted(){
      let position = this.$route.query.position;
      if(position==='install'){
        this.scrollTo(1,'toChrome');
        this.index = 1;
      }else if(position==='common'){
        this.scrollTo(7,'howToWork');
        this.index = 7;
      }else if(position==='safety'){
        this.scrollTo(13,'dataSafety');
        this.index = 13;
      }
      window.addEventListener('scroll', this.handleScroll)
    }
  }
</script>

<style lang="stylus" scoped>
  .container
    .content
      position relative
      display flex
      width 12rem
      margin 0 3.6rem 0.8rem 3.6rem
      clear both
      overflow visible
      .left
        position fixed
        left 3.6rem
        top 1.2rem
        width 1.99rem
        height 7.52rem
        border-right 1px solid #CFDAE6
        background-color white
        clear both
        .title
          height 0.64rem
          line-height 0.64rem
          padding-left 0.4rem
          font-size 0.16rem
          color #475766
          border-bottom 1px solid #CFDAE6
        dl
          font-size 0.14rem
          color #475766
          .divider
            border-bottom 1px solid #CFDAE6
          dt
            position relative
            margin-top 0.2rem
            margin-bottom 0.16rem
            padding-left 0.4rem
            &:before
              content ""
              position absolute
              width 0.06rem
              height 0.06rem
              background-color #177FE6
              left 0.3rem
              top 0.03rem
          dd
            margin-bottom 0.13rem
            padding-left 0.4rem
            padding-right 0.15rem
            line-height 0.2rem
            cursor pointer
            a
              color #7a8a99
              &.active
                color #177FE6
      .right
        position absolute
        top 1.2rem
        right 0
        width 10rem
        height auto
        overflow hidden
        padding-bottom 0.4rem
        box-sizing border-box
        background-color white
        z-index 100
        .divider
          width 9.2rem
          margin-left 0.4rem
          box-sizing border-box
          height 1px
          border-bottom 1px solid #CFDAE6
        .video-box
          width 8.44rem
          height 5.73rem
          box-sizing border-box
          margin 0 0 0.2rem 0.4rem
          video
            width 100%
            height 100%
        .title
          display flex
          align-items center
          padding 0.3rem 0.4rem 0 0.4rem
          font-size 0.16rem
          color #475766
          img
            width 0.2rem
            height 0.2rem
            margin-right 0.09rem
        .desc-content
          padding 0 0.73rem 0 0.7rem
          .desc-title,.desc-text
            margin-top 0.15rem
            font-size 0.14rem
            font-family PingFang-SC-Medium
            font-weight 500
            line-height 0.28rem
            color #475766
          .desc-title
            margin-bottom 0.16rem
          .desc-text
            .color-text
              color #177FE6
</style>
