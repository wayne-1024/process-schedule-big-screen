<template>
    <div ref="chart" :style="{width:'100%', height:'100%'}"></div>
</template>

<script>
import axios from 'axios'

export default {
    mounted (){
        axios.get("http://127.0.0.1:4523/m1/1761142-0-default/realtime_progress_day/A").then((rsp)=>{
            // var dayData = []
            this.dayData = rsp.data
            console.log(rsp)
            // for(var key in this.data){
            //     this.dayData.push(this.data[key])
            // }
            // console.log(dayData)
        })
    },

    data (){
        return{
            data:null,
            dayData: null,
        }
    },

    watch: {
        dayData: function(){
            this.drawDay()
        },
    },

    methods:{
        drawDay (){
            const chart = this.$refs.chart
            if(chart) {
                const myChart = this.$echarts.init(chart)
                const option = {
                    legend: {},
                    tooltip: {},
                    dataset: {
                        dimensions: ['step', 'plan', 'real_plan', 'act'],
                        source: this.dayData
                    },
                    xAxis: { type: 'category' },
                    yAxis: {},
                    series: [{ type: 'bar' }, { type: 'line' }, { type: 'line' }]
                };
                myChart.setOption(option)
                window.addEventListener("resize",function(){
                myChart.resize()
                })
                this.$on('hook:destroyed',()=>{
                window.removeEventListener("resize",function(){
                myChart.resize();
                });
            })
        }
    },
}
}
</script>

<style>

</style>