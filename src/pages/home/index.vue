<template>
  <div class="container">
    <common-header></common-header>
    <banner></banner>
    <tablist></tablist>
    <find-more></find-more>
    <user-case></user-case>
    <common-footer></common-footer>
    <user-info-window></user-info-window>
  </div>
</template>

<script>
  import CommonHeader from '@/components/commonHeader'
  import Banner from './banner'
  import Tablist from './tabList'
  import FindMore from './findMore'
  import UserCase from './userCase'
  import CommonFooter from '@/components/commonFooter'
  import UserInfoWindow from '@/components/userInfoWindow'

  export default {
    name: 'Home',
    components: {CommonHeader,Banner,Tablist,FindMore,UserCase,CommonFooter,UserInfoWindow},
  }
</script>

<style lang="stylus" scoped>
  .container
    margin 0
    padding 0
</style>
