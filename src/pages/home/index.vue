<template>
  <div class="container">
    <common-header></common-header>
    <banner></banner>
  </div>
</template>

<script>
  import CommonHeader from '@/components/commonHeader'
  import Banner from './banner'
  export default {
    name: 'Home',
    components: {CommonHeader,Banner},
  }
</script>

<style lang="stylus" scoped>
  .container
    margin 0
    padding 0
</style>
