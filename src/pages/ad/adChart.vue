<template>
  <div class="container">
    <e-charts :options="polar"></e-charts>
  </div>
</template>

<script>
  import Vue from 'vue'
  import ECharts from 'vue-echarts/components/ECharts.vue'
  Vue.use(ECharts);

  export default {
    name: "adChat",
    components: {
      ECharts
    },
    props:["options"],
    data() {
      let data = [];
      for (let i = 0; i <= 360; i++) {
        let t = i / 180 * Math.PI;
        let r = Math.sin(2 * t) * Math.cos(2 * t);
        data.push([r, i])
      }
      return {
          polar: {
            title: {
              text: '极坐标双数值轴'
            },
            legend: {
              data: ['line']
            },
            polar: {
              center: ['50%', '54%']
            },
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                type: 'cross'
              }
            },
            angleAxis: {
              type: 'value',
              startAngle: 0
            },
            radiusAxis: {
              min: 0
            },
            series: [
              {
                coordinateSystem: 'polar',
                name: 'line',
                type: 'line',
                showSymbol: false,
                data: data
              }
            ],
            animationDuration: 2000
          }
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .container
    min-width 310px
    width 1160px
    height 400px
    margin 0 auto
</style>
