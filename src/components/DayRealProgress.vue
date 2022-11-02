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
    <div class="myChart" id="dayReal"></div>
  </div>
</template>

<script>
export default {
  name: "CurrentStatus",
  data() {
    return {
      dayRealData: [
          {
              "step": "OLB",
              "plan": 33213,
              "real_plan": 21590,
              "act": 20421
          },
          {
              "step": "MMT",
              "plan": 16800,
              "real_plan": 11490,
              "act": 1672
          },
          {
              "step": "LCM_BANK",
              "plan": 0,
              "real_plan": 0,
              "act": 3942
          }
      ]  // 日别实时数据
    }
  },
  mounted() {
    this.initCharts()
  },
  methods: {
    initCharts(){
      // let myChart = this.$echarts.init(this.$refs.dayReal)
      let myChart = this.$echarts.init(document.getElementById("dayReal"))
      // console.log(myChart)
      // window.onresize = () => { myChart.resize() }  // 此方法只能触发一次
      window.addEventListener('resize', ()=>{
        myChart.resize()
      })
      // TODO 测试数据
      let option = {
        legend: {
          textStyle: {color: 'white'}
        },
        tooltip: {},
        dataset: {
          // 用 dimensions 指定了维度的顺序。直角坐标系中，如果 X 轴 type 为 category，
          // 默认把第一个维度映射到 X 轴上，后面维度映射到 Y 轴上。
          // 如果不指定 dimensions，也可以通过指定 series.encode
          // 完成映射，参见后文。
          dimensions: Object.keys(this.dayRealData[0]),
          source: this.dayRealData
        },
        xAxis: { 
          type: 'category',
          axisLabel: {
            color: 'white'
          }
        },
        yAxis: {
          splitLine: {show: false},
          axisLabel: {
            color: 'white'
          }
        },
        series: [
          { 
            type: 'line', 
            name: '计划', 
            color: 'orange' 
          }, 
          { 
            type: 'line', 
            name: '实时计划', 
            itemStyle:{
              color:'#9FE080',
            }
          }, 
          { 
            type: 'bar', 
            name: '实时进度', 
            barWidth: 25,
            itemStyle:{
              color:'#5C7BD9',
              barBorderRadius:[5,5,0,0],
              normal: {
                label: {
                  show: true,
                  position: 'top',
                  textStyle: {
                    color: 'white',
                    fontSize: 12
                  }
                }
              }
            } 
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
  position: relative;

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
    width: 100%;
    height:80%;
    // 可以取消相对定位
    position: relative;
    bottom: -15px;
    // background-color: rgba(white, 0.1);
  }
}

</style>