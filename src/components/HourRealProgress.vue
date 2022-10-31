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
// eslint-disable-next-line no-unused-vars
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

const columns = [
  {
    title: '工程',
    dataIndex: 'name',
  },
  {
    title: '中板切',
    dataIndex: 'money',
  },
  {
    title: '实装',
    dataIndex: 'address',
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    money: '￥300,000.00',
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    money: '￥1,256,000.00',
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    money: '￥120,000.00',
    address: 'Sidney No. 1 Lake Park',
  },
];

export default {
  name: 'HourRealProgress',
  mounted() {
    for(var index in Object.keys(this.hourRealProgress[0])) {
      let item = Object.keys(this.hourRealProgress[0])[index]
      if(item == 'step') {
        continue
      }
      this.hourRealData.push({key: index, step: item})
    }
    console.log(this.hourRealData)

    this.hourRealColumn.push({title: '工程', dataIndex: 'step'})
    for(var i in this.hourRealProgress){
      let item = this.hourRealProgress[i]['step']
      console.log(item)
      this.hourRealColumn.push({title: titleMap[item], dataIndex: item})
    }
    console.log(this.hourRealColumn)
  },
  data() {
    return {
      data,
      columns,
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
  }
}
</script>

<style lang="less" scoped>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  // background-color: rgba(aliceblue, 0.1);

  .hourReal{
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
    }

    & /deep/ .ant-table-tbody > tr > td {
      color: white;
      border-color: rgba(white, 0.5);
      // background-color: red;
      height: 30px;
      padding: 0px!important;
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
</style>