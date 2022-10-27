import Vue from 'vue'
import App from './App.vue'
import dataV from '@jiaminghi/data-view'
import Antd from 'ant-design-vue';

import * as  echarts from 'echarts';

import 'ant-design-vue/dist/antd.css';

Vue.config.productionTip = false

Vue.use(dataV)
Vue.use(Antd);

Vue.prototype.$echarts = echarts

new Vue({
  render: h => h(App),
}).$mount('#app')
