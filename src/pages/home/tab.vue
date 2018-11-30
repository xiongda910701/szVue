<template>
  <ul class="tab-list">
    <li class="item"
        :class="item.isActive?'active':''"
        v-for="item in tab"
        :key="item.id"
        @click="changeTab(item.id)"
    >
      {{item.text}}
    </li>
  </ul>
</template>

<script>
  export default {
    name: "Tab",
    data() {
      return {
        tab: [
          {id: 0, text: "生活", isActive: true},
          {id: 1, text: "时尚潮流", isActive: false},
          {id: 2, text: "金融财经", isActive: false},
          {id: 3, text: "情感心理", isActive: false},
          {id: 4, text: "母婴亲子", isActive: false},
          {id: 5, text: "教育培训", isActive: false}
        ]
      }
    },
    methods: {
      //tab点击事件
      changeTab(num) {
        this.tab.forEach((item, index) => {
          item.isActive = false;
        });
        this.tab[num].isActive = true;
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .tab-list
    width 100%
    height 50px
    .item
      position relative
      width 198px
      line-height 50px
      background-color #ebebeb
      margin-right 2px
      text-align center
      font-size 16px
      float left
      cursor pointer
      &.active
        background-color #4cb5ff
        color #fff
      &.active::after
        content ""
        display block
        z-index 9
        position absolute
        left 50%
        margin-left: -16px
        width: 0
        height 0
        border-left 10px solid transparent
        border-right 10px solid transparent
        border-top 10px solid #4cb5ff
</style>
