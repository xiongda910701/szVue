<template>
  <div class="container">
    <common-header></common-header>
    <help-content></help-content>
    <tool></tool>
    <common-footer></common-footer>
  </div>
</template>

<script>
  import CommonHeader from '@/components/commonHeader'
  import CommonFooter from '@/components/commonFooter'
  import HelpContent from './helpContent'
  import Tool from '@/components/tool'


  export default {
        name: "Help",
        components:{CommonHeader,HelpContent,CommonFooter,Tool}
    }
</script>

<style scoped>

</style>
