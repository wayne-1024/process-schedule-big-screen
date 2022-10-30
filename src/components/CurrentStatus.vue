<template>
  <div class="container">
    <div class="myChart" id="currentStatus"></div>
  </div>
</template>

<script>
export default {
  name: "CurrentStatus",
  mounted() {
    this.initCharts()
  },
  methods: {
    initCharts(){
      // let myChart = this.$echarts.init(this.$refs.currentStatus)
      let myChart = this.$echarts.init(document.getElementById("currentStatus"))
      // console.log(myChart)
      // window.onresize = () => { myChart.resize() }  // 此方法只能触发一次
      window.addEventListener('resize', ()=>{
        myChart.resize()
      })
      let option = {
        legend: {},
        tooltip: {},
        dataset: {
          // 用 dimensions 指定了维度的顺序。直角坐标系中，如果 X 轴 type 为 category，
          // 默认把第一个维度映射到 X 轴上，后面维度映射到 Y 轴上。
          // 如果不指定 dimensions，也可以通过指定 series.encode
          // 完成映射，参见后文。
          dimensions: ['product', '2015', '2016', '2017'],
          source: [
            { product: 'Matcha Latte', '2015': 43.3, '2016': 85.8, '2017': 93.7 },
            { product: 'Milk Tea', '2015': 83.1, '2016': 73.4, '2017': 55.1 },
            { product: 'Cheese Cocoa', '2015': 86.4, '2016': 65.2, '2017': 82.5 },
            { product: 'Walnut Brownie', '2015': 72.4, '2016': 53.9, '2017': 39.1 }
          ]
        },
        xAxis: { type: 'category' },
        yAxis: {},
        series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }]
      }
      myChart.setOption(option)
    }
  }
}
</script>

<style lang="less" scoped>

.container {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;

  .myChart{
    width: 80%;
    height:80%;
    // 可以取消相对定位
    position: relative;
    bottom: -15px;
    // background-color: rgba(white, 0.1);
  }
}

</style>