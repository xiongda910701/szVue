<template>
  <div class="container">
    <el-pagination
      background
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage"
      layout="prev, pager, next, jumper"
      :total="1000"
    >
    </el-pagination>
  </div>
</template>

<script>
  export default {
    name: "commonPage",
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    },
    data() {
      return {
        currentPage: 1,
      };
    }
  }
</script>

<style lang="stylus" scoped>
  .container
    width 100%
    padding 0 0 30px 0
    text-align center
    .el-pagination
      width 55%
      margin-left 45%
</style>
