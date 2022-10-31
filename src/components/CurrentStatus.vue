<template>
  <div class="container">
    <div class="myChart" id="currentStatus"></div>
  </div>
</template>

<script>
export default {
  name: "CurrentStatus",
  data() {
    return {
      currData : {
          "ttl": 12418,
          "zb": 0,
          "cp_OLB": 5043,
          "pg": 2894,
          "bz": 4976,
          "mt": 17866,
          "l_PACK": 7204,
          "l_BANK": 20277,
          "w2_BANK": 8885,
          "rw": 3533,
          "taball": 0
      }  // 在工现况数据
    }
  },
  mounted() {
    this.initCharts()
    console.log(Object.keys(this.currData))
    console.log(Object.values(this.currData))
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
        xAxis: {
          type: 'category',
          data: Object.keys(this.currData),
          axisLabel: {
            interval: 0,
            rotate: 40
          }  // 设置倾斜角度
        },
        yAxis: {},
        series: [
          {
            type: 'bar',
            name: 'act',
            data: Object.values(this.currData)
          }
        ]
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