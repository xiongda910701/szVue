<template>
  <div class="container">
    <common-role-header></common-role-header>
    <common-nav></common-nav>
    <summary-component></summary-component>
    <div class="content">
      <ad-search></ad-search>
      <title-data></title-data>
      <ad-chart></ad-chart>
      <ad-table></ad-table>
    </div>
    <common-footer></common-footer>
  </div>
</template>

<script>
  import CommonRoleHeader from '@/components/commonRoleHeader'
  import CommonNav from '@/components/commonNav'
  import SummaryComponent from './summary'
  import AdSearch from './adSearch'
  import TitleData from './titleData'
  import AdChart from './adChart'
  import AdTable from './adTable'
  import CommonFooter from '@/components/commonFooter'

  export default {
    name: "Ad",
    components:{
      CommonRoleHeader,CommonNav,SummaryComponent,
      AdSearch,TitleData,AdChart,AdTable,CommonFooter
    },
    data(){
      return {

      }
    }
  }
</script>

<style lang="stylus" scoped>
  .content
    width 1200px
    margin 0 auto
    background #fff
    padding 40px 0
    margin-bottom 30px
</style>
