<template>
    <div >
        <a-table
            :columns = "columns" 
            :dataSource = "data"
            :pagination=false>

        </a-table>
    </div>
</template>

<script>
import axios from 'axios'

const columns =[
    {
        title:'当月',
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
    }
];

export default {
    data(){
        return {
            data: [],
            columns,
        }
    },
    mounted(){
        axios.get('http://127.0.0.1:4523/m1/1761142-0-default/realtime_progress_month/in')
        .then((rsp)=>{
            var putIn = []
            this.data = rsp.data
            for(var key in this.data){
                this.putIn.push(this.data[key])
            }
            console.log(putIn)
        })
    },
    methods: {
    }
}
</script>

<style>
/* .mytable{
    font-size: 20px;
    font-weight: 700;
    text-align: center;
    border: 3px solid black;
    background-color: aquamarine;
} */
.ant-table-thead > tr > th{
    font-size: 20px;
    text-align: center;
    color: white;
    background: #3071b9 !important;
}
.ant-table-tbody > tr > td{
    font-size: 15px;
    font-weight: 700;
    text-align: center;
    color: white;
}
          
</style>
