<template>
  <div class="container">
    <div class="box1">
      <div id="myChart"></div>
      <div id="myChart2"></div>
    </div>
    <div class="box2">
      <a-table class="MonReal" 
      :columns="MonRealcolumns"
      :data-source="MonRealData"
      :pagination=false
      bordered>
      <template slot="name" slot-scope="text">
        <a>{{ text }}</a>
      </template>
      </a-table>
    </div>
  </div>
</template>

<script>
const renderContent = (data, key) => {
    var spanArr = [];
    var position = 0;
    data.map((item, index) => {
        if(index === 0) {
            spanArr.push(1);
            position = 0;
        } else {
            if (data[index][key] === data[index - 1][key]) {
                spanArr[position] += 1;
                spanArr.push(0);
            } else {
                spanArr.push(1);
                position = index;
            }
        }
    });
    return spanArr;
}

export default {
  name: "MonthRealProgress",
  data(){
    const MonRealcolumns =[
      {
        title:'当月',
        dataIndex: 'put',
        customRender: (value, row, index) => {
          const obj = {
            children: value,
            attrs: {},
          };
          obj.attrs.rowSpan = renderContent(this.MonRealData, "put", index)[index];
          return obj;
        },
    },
    {
      title: 'Usage',
      dataIndex : 'usage',
    },
    {
      title:'月计划',
      dataIndex: 'plan',
    },
    {
      title:'实时计划',
      dataIndex: 'real_plan',
    },
    {
      title:'实际',
      dataIndex: 'act',
    },
    {
      title:'GAP',
      dataIndex: 'gap',
    }
  ];
    return{
      MonRealData: [
        {
          "put": '投入',
          "plan": 1092645,
          "real_plan": 281999,
          "act": 288959,
          "gap": 6960,
          "usage": "TTL"
        },
        {
          "put": '投入',
          "plan": 351878,
          "real_plan": 97760,
          "act": 98802,
          "gap": 1042,
          "usage": "TV"
        },
        {
          "put": '投入',
          "plan": 699500,
          "real_plan": 165006,
          "act": 172204,
          "gap": 7198,
          "usage": "MNT"
        },
        {
          "put": '入库',
          "plan": 1089871,
          "real_plan": 259253,
          "act": 261702,
          "gap": 2449,
          "usage": "TTL"
        },
        {
          "put": '入库',
          "plan": 351258,
          "real_plan": 96252,
          "act": 97115,
          "gap": 863,
          "usage": "TV"
        },
        {
          "put": '入库',
          "plan": 706528,
          "real_plan": 154222,
          "act": 156315,
          "gap": 2093,
          "usage": "MNT"
        }
      ],
      MonRealcolumns,
    }
  },
  mounted() {
    this.initCharts()
  },
  methods: {
    initCharts() {
      // 投入chart
      let myChart = this.$echarts.init(document.getElementById("myChart"))
      window.addEventListener('resize', ()=>{
        myChart.resize()
      })
      let option = {
        title: {
          text: '投入',
          x: "right",
          textStyle: {
            color: 'white',
            fontSize: 14
          }
        },
        tooltip:{
          trigger: 'axis',
          axisPointer: {
            type:'shadow'
          }
        },
        grid: {
          left: "0",
          top: "0",
          right: "0",
          bottom: "0",
          width: '85%',
          containLabel: true
        },
        xAxis: {
          type: 'value',
          splitLine: {show: false},
          axisLabel: {show: false},
          axisTick: {show: false},
          axisLine: {show: false}
        },
        yAxis: [
          {
            type: 'category',
            axisTick: {show:false},
            axisLine: {show: false},
            axisLabel: {
              color: "black",
              fontSize: 14,
              textStyle: {
                color: '#fff',
                align: 'right'
              }
            },
            data: ['MMT', 'TTL', 'TV'],
            max: 2,
            inverse: true
          },
          {
            type: 'category',
            axisTick: {show:false},
            axisLine: {show: false},
            axisLabel: {
              color: "black",
              fontSize: 14,
              textStyle: {
                color: '#fff',
                align: 'right'
              }
            },
            max: 10,
            inverse: true
          }
        ],
        series: [
          {
            name: "实际",
            type: "bar",
            barWidth: 19,
            data: [10, 40, 22],  // 进度数据
            barCategoryGap: 20,
            itemStyle:{
              normal:{
                barBorderRadius:10,
                color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                  offset: 0,
                  color: '#22b6ed'
                }, {
                  offset: 1,
                  color: '#3fE279'
                }]),
                label:{
                  show: true,
                  textStyle: {
                    color: 'white'
                  }
                }
              }
            },
            zlevel: 1
          },
          {
            name: "进度",
            type: "bar",
            barGap: "-100%",
            barWidth: 19,
            data:[40, 100, 38],  // 实际数据
            color: "#2e5384",
            itemStyle: {
              normal: {
                barBorderRadius: 10,
                label: {
                  show: true,
                  position: 'right',
                  textStyle: {
                    color: 'white'
                  }
                }
              }
            }
          }
        ]
      }
      option['title']['text'] = "投入"
      option['series'][0]['data'] = [25, 32, 44]
      option['series'][1]['data'] = [74, 56, 55]
      myChart.setOption(option)

      // 入库chart
      let myChart2 = this.$echarts.init(document.getElementById("myChart2"))
      window.addEventListener('resize', ()=>{
        myChart2.resize()
      })
      let option2= option
      option2['title']['text'] = "入库"
      option2['series'][0]['data'] = [20, 12, 32]
      option2['series'][1]['data'] = [44, 56, 78]
      myChart2.setOption(option2)
    }
  }
}
</script>

<style lang="less" scoped>
.container {
  width: 100%;
  height: 100%;
  // background: rgba(red, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .box1 {
    width: 80%;
    height: 50%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    position: relative;
    flex-direction: row;
    margin-bottom: 2px;

    #myChart {
      width: 40%;
      height: 80%;
      color: white;
      // position: absolute;
      // bottom: 15px;
      // background-color: rgba(blue, 0.1);
      border: 1px solid rgba(white, 0.5);
      border-right: 0;
    }

    #myChart2 {
      width:40%;
      height: 80%;
      // background-color: rgba(blue, 0.1);
      border: 1px solid rgba(white, 0.5);
      // position: absolute;
      // bottom: 15px;
    }
  }

  .box2 {
    width: 80%;
    height: 45%;
    // background-color: rgba(black, 0.2);
    display: flex;
    justify-content: center;

    .MonReal{
      width: 80%;
      height:80%;
      // 可以取消相对定位
      // position: relative;
      // bottom: -15px;
      // background-color: rgba(white, 0.1);
      & /deep/ .ant-table-thead > tr > th {
        color: white;
        background-color:rgba(rgb(56, 56, 202), 0.2);
        border-color: rgba(white, 0.5);
        // padding: 0px!important;
        text-align: center;
      }
      & /deep/ .ant-table-tbody > tr > td {
        color: white;
        border-color: rgba(white, 0.5);
        // background-color: red;
        height: 30px;
        padding: 0px!important;
        text-align: center;
      }
      & /deep/ .ant-table-tbody > tr:hover:not(.ant-table-expanded-row):not(.ant-table-row-selected) > td {
          background: rgba(rgb(56, 56, 202), 0.2);
      }
      & /deep/ .ant-table {
        // background-color: red;
        border-color: rgba(white, 0.5);
      }
    }
  }
}
</style>