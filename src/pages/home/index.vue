<template>
  <div class="container">
    <common-header></common-header>
    <banner></banner>
    <tablist id="tableList"></tablist>
    <find-more></find-more>
    <user-case></user-case>
    <common-footer></common-footer>
    <tool></tool>
  </div>
</template>

<script>
  import CommonHeader from '@/components/commonHeader'
  import Banner from './banner'
  import Tablist from './tabList'
  import FindMore from './findMore'
  import UserCase from './userCase'
  import CommonFooter from '@/components/commonFooter'
  import Tool from '@/components/tool'

  export default {
    name: 'Home',
    components: {CommonHeader,Banner,Tablist,FindMore,UserCase,CommonFooter,Tool},
    mounted(){
      let p = this.$route.query.p;
      console.log(p);
      localStorage.setItem("p",p);
    }
  }
</script>

<style lang="stylus" scoped>

</style>
