<template>
  <div class="container">
    <Header></Header>
    <Content></Content>
    <footer4></footer4>
  </div>
</template>

<script>
  import Header from '@/components/Header'
  import Footer4 from '@/components/footer'
  import Content from './content'

  export default {
        name: "Help",
        components:{Header,Content,Footer4}
    }
</script>

<style scoped>

</style>
