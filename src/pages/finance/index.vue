<template>
  <div class="container">
    <common-role-header></common-role-header>
    <common-nav></common-nav>
  </div>
</template>

<script>
  import CommonRoleHeader from '@/components/commonRoleHeader'
  import CommonNav from '@/components/commonNav'

  export default {
    name: "Finance",
    components:{
      CommonRoleHeader,CommonNav
    },
    data(){
      return {

      }
    }
  }
</script>

<style lang="stylus" scoped>

</style>
