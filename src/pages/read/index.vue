<template>
  <div class="container">
    <common-role-header></common-role-header>
    <common-nav></common-nav>
    <div class="content">
      <read-search></read-search>
      <read-table></read-table>
      <common-page></common-page>
    </div>
    <common-footer></common-footer>
  </div>
</template>

<script>
  import CommonRoleHeader from '@/components/commonRoleHeader'
  import CommonNav from '@/components/commonNav'
  import ReadSearch from './readSearch'
  import ReadTable from './readTable'
  import CommonPage from '@/components/commonPage'
  import CommonFooter from '@/components/commonFooter'

  export default {
    name: "Read",
    components:{
      CommonRoleHeader,CommonNav,ReadSearch,ReadTable,CommonPage,CommonFooter
    },
    data(){
      return {

      }
    }
  }
</script>

<style lang="stylus" scoped>
  .container
    .content
      width 1200px
      overflow hidden
      background #fff
      margin 30px auto
</style>
