import Vue from 'vue'
import App from './App.vue'
// 将自动注册所有组件为全局组件
import dataV from '@jiaminghi/data-view'
import * as echarts from 'echarts'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css';

Vue.use(Antd)
Vue.prototype.$echarts = echarts;
Vue.use(dataV)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
