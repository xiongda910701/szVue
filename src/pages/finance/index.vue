<template>
  <div class="container">
    <common-role-header></common-role-header>
    <common-nav></common-nav>
    <div class="content">
      <tab-component></tab-component>
      <router-view></router-view>
    </div>
    <common-footer></common-footer>
  </div>
</template>

<script>
  import CommonRoleHeader from '@/components/commonRoleHeader'
  import CommonFooter from '@/components/commonFooter'
  import CommonNav from '@/components/commonNav'
  import TabComponent from './tabComponent'

  export default {
    name: "Finance",
    components:{
      CommonRoleHeader,CommonNav,TabComponent,CommonFooter
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
    margin 30px auto
    background #fff
    border-radius 3px
    min-height 450px
</style>
