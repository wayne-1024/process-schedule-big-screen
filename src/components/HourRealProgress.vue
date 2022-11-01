<template>
  <div class="container">
    <a-table class="hourReal" 
      :columns="hourRealColumn"
      :data-source="hourRealData"
      :pagination=false
      bordered>
      <template slot="name" slot-scope="text">
        <a>{{ text }}</a>
      </template>
    </a-table>
  </div>
</template>

<script>

const titleMap = {
  step: '工程',
  plan: '计划',
  real_plan: '实时计划',
  act: '实际',
  gap: 'GAP',
  gy: 'GY',
  day: 'DAY',
  sw: 'SW',
  h1: '14:00-15:00',
  h2: '14:00-15:00',
  h3: '14:00-15:00',
  h4: '14:00-15:00',
  h5: '14:00-15:00',
  h6: '14:00-15:00',
  h7: '14:00-15:00',
  h8: '14:00-15:00',
  OLB: '实装',
  MMT: '检查'
}

export default {
  name: 'HourRealProgress',
  mounted() {
    for(let index in Object.keys(this.hourRealProgress[0])) {
      let item = Object.keys(this.hourRealProgress[0])[index]
      if(item == 'step') {
        continue
      }
      this.hourRealData.push({key: index, step: titleMap[item], stepIndex: item})
    }

    var realData = []
    for(let i in this.hourRealProgress) {
      // console.log(this.hourRealProgress[i])
      let step = this.hourRealProgress[i]['step']
      realData.push({[step]: this.hourRealProgress[i]})
    }
    console.log(realData)

    for(let i in this.hourRealData){
      // console.log(this.hourRealData[i])
      // console.log(this.hourRealData[i]['stepIndex'])
      for(let key in realData){
        // console.log('key:-->', Object.keys(realData[key])[0])
        // console.log('val:-->', realData[key][Object.keys(realData[key])[0]][this.hourRealData[i]['stepIndex']])
        this.hourRealData[i][Object.keys(realData[key])[0]] = realData[key][Object.keys(realData[key])[0]][this.hourRealData[i]['stepIndex']]
      }
    }
    console.log(this.hourRealData)

    this.hourRealColumn.push({title: '工程', dataIndex: 'step'})
    for(let i in this.hourRealProgress){
      let item = this.hourRealProgress[i]['step']
      // console.log(item)
      this.hourRealColumn.push({title: titleMap[item], dataIndex: item})
    }
    // console.log(this.hourRealColumn)
  },
  data() {
    return {
      hourRealProgress: [
          {
              "step": "OLB",
              "plan": 33213,
              "real_plan": 21590,
              "act": 20421,
              "gap": -1169,
              "gy": 10904,
              "day": 9517,
              "sw": 11372,
              "h1": 1425,
              "h2": 1374,
              "h3": 1343,
              "h4": 1631,
              "h5": 1496,
              "h6": 1256,
              "h7": 1217,
              "h8": 1162
          },
          {
              "step": "MMT",
              "plan": 16800,
              "real_plan": 11490,
              "act": 1672,
              "gap": -9818,
              "gy": 10904,
              "day": 9517,
              "sw": 11372,
              "h1": 1425,
              "h2": 1374,
              "h3": 1343,
              "h4": 1631,
              "h5": 1496,
              "h6": 1256,
              "h7": 1217,
              "h8": 1162
          }
      ],  // 小时别进度
      hourRealColumn: [],  // 列名
      hourRealData: [],
      stepColumn: []
    }
  },
  methods: {
    getDataByType(type) {
      // console.log(this.hourRealProgress)
      for(let i in this.hourRealProgress) {
        console.log('--')
        console.log(this.hourRealProgress[i][type])
      }
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
  // background-color: rgba(aliceblue, 0.1);

  .hourReal{
    width: 96%;
    height:80%;
    // 可以取消相对定位
    position: relative;
    bottom: 15px;
    // background-color: rgba(white, 0.1);

    & /deep/ .ant-table-thead > tr > th {
      color: white;
      background-color:rgba(rgb(56, 56, 202), 0.4);
      border-color: rgba(white, 0.5);
      // padding: 0.3vh!important;
    }

    & /deep/ .ant-table-tbody > tr > td {
      color: white;
      border-color: rgba(white, 0.5);
      // background-color: red;
      padding: 0.1vh!important;
    }

    & /deep/ .ant-table-tbody > tr:hover:not(.ant-table-expanded-row):not(.ant-table-row-selected) > td {
        background: rgba(rgb(56, 56, 202), 0.2);
    }

    & /deep/ .ant-table {
      // background-color: red;
      border-color: rgba(white, 0.5);
      height: 80px;
    }
  }
}
</style>