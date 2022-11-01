<template>
  <div class="container">
    <div id="checkBox">
      <a-radio-group name="radioGroup" :default-value="1">
        <a-radio :value="1">
          A
        </a-radio>
        <a-radio :value="2">
          B
        </a-radio>
        <a-radio :value="3">
          C
        </a-radio>
      </a-radio-group>
    </div>
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
        // legend: {
        //   textStyle: {color: 'white'}
        // },
        xAxis: {
          type: 'category',
          // splitLine: {show: false},
          // axisTick: {show: false},
          // axisLine: {show: false},
          data: Object.keys(this.currData),
          axisLabel: {
            interval: 0,
            rotate: 40,
            color: 'white'
          }  // 设置倾斜角度
        },
        yAxis: {
          // axisTick: {show:false},
          // axisLine: {show: false},
          splitLine: {show: false},
          axisLabel: {
            color: 'white'
          }
        },
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

  #checkBox{
    width: 170px;
    height: 30px;
    position: absolute;
    right: 0px;
    top:45px;
    color: white;

    & /deep/ .ant-radio-wrapper {
      color: white;
    }
  }

  .myChart{
    width: 80%;
    height:100%;
    // 可以取消相对定位
    position: relative;
    bottom: -15px;
    // background-color: rgba(white, 0.1);
  }
}

</style>