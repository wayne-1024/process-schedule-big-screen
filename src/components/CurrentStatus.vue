<template>
   <div ref="chart" :style="{width:'100%', height:'100%'}"></div>
</template>

<script>
import axios from 'axios'

export default {
    name: "CurrentStatus",

    mounted() {
        axios.get("http://127.0.0.1:4523/m1/1761142-0-default/curr_status/A/act").then((rsp)=>{
            console.log(rsp)
            this.data = rsp.data
            for(var key in this.data) {
                this.key_list.push(key)
                this.val_list.push(this.data[key])
            }
        });
    },

    data() {
        return {
            data: null,
            key_list: [],
            val_list: []
        }
    },

    watch: {
        key_list: function(){
            this.drawBar()
        },

        val_list: function(){
            this.drawBar()
        }
    },

    methods:{
        drawBar() {
            const chart = this.$refs.chart
            if(chart) {
                const myChart = this.$echarts.init(chart)
                const option = {
                    title:{
                        text:'在工现况'
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                        type: 'cross',
                        crossStyle: {
                            color: '#999'
                        }
                        }
                    },

                    legend: {
                        data: ['实际在工']
                    },
                    xAxis: [
                        {
                        type: 'category',
                        data:this.key_list,
                        axisPointer: {
                            type: 'shadow'
                        }
                        }
                    ],
                    yAxis: [
                    {
                type: 'value',
                min: 0,
                max: 45000,
                interval: 15000,
                },
                    ],
                    series: [
                        {
                        name: '实际在工',
                        type: 'bar',
                        data: this.val_list,
                        },
                    ]
                }
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