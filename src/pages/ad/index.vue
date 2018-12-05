<template>
  <div class="container">
    <common-role-header></common-role-header>
    <common-nav></common-nav>
    <summary-component></summary-component>
  </div>
</template>

<script>
  import CommonRoleHeader from '@/components/commonRoleHeader'
  import CommonNav from '@/components/commonNav'
  import SummaryComponent from './summary'

  export default {
    name: "Ad",
    components:{
      CommonRoleHeader,CommonNav,SummaryComponent
    },
    data(){
      return {

      }
    }
  }
</script>

<style lang="stylus" scoped>

</style>
