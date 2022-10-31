<template>
    <div class="container">
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
</template>

<script>

export default {
    data(){
        const MonRealcolumns =[
            {
                title:'当月',
                dataIndex: 'put',
                key: 'put',
                customRender(_, row){
                    return{
                        children: row.put,
                        attrs: {
                            rowSpan: row.putRowSpan,
                        }
                    }
                }
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
  //background-color: rgba(aliceblue, 0.1);

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
</style>