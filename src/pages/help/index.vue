<template>
  <div class="container">
    <Header></Header>
    <Content></Content>
    <tool></tool>
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from '@/components/Header'
  import Footer from '@/components/footer'
  import Content from './content'
  import Tool from '@/components/tool'


  export default {
        name: "Help",
        components:{Header,Content,Footer,Tool}
    }
</script>

<style scoped>

</style>
