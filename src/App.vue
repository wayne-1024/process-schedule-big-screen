<template>
  <!-- 全局容器布局 -->
  <div id="app">
    <!-- 头部容器 -->
    <dv-border-box-10 id="header">
      生产进度现况板
    </dv-border-box-10>

    <!-- 月别实时进度容器 -->
    <dv-border-box-11 class="item" title="月别实时进度">
      <!-- <HelloWorld></HelloWorld> -->
    </dv-border-box-11>

    <!-- 日别实时进度容器 -->
    <dv-border-box-11 title="日别实时进度">
      <DayRealProgress></DayRealProgress>
    </dv-border-box-11>

    <!-- 在工现况容器 -->
    <dv-border-box-11 title="在工现况">
      <CurrentStatus></CurrentStatus>
    </dv-border-box-11>

    <!-- 小时别进度容器 -->
    <dv-border-box-11 title="小时别实时进度">
      <HourRealProgress></HourRealProgress>
    </dv-border-box-11>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
    CurrentStatus: () => import("./components/CurrentStatus.vue"),
    DayRealProgress: () => import("./components/DayRealProgress.vue"),
    HourRealProgress: () => import("./components/HourRealProgress.vue")
  }
}
</script>

<style lang="less">
*{
  margin: 0;
  padding: 0;
}

#app{
  width: 100vw;
  height: 100vh;
  background-image: url('../src/assets/screen.png');
  display: grid;
  color: white;

  // 1) 绘制网格线
  // grid-template-columns: 45vw 45vw;
  // grid-template-rows: 8vh 35vh 15vh 35vh;
  grid-template: 8vh 30vh 25vh 30vh / 45vw 45vw;  // 一行绘制

  // 2) 网格区域命名
  grid-template-areas:  "header header"
                        "month day"
                        "month hour"
                        "curr-status hour";
  
  // 3) 设置间隔
  grid-row-gap: 0.5vh;
  grid-column-gap: 3px;

  // 4) 设置对齐方式
  // justify-items: center;
  // align-items: center;
  align-content: center;
  justify-content: center;

  // 4) 设置位置
  :first-child {
    grid-area: header;
  }  // 头部容器设置

  :nth-child(2){
    grid-row: month;
  }  // 月实时进度容器设置

  :nth-child(3){
    grid-area: day;
  } // 日别实时进度容器设置

  :nth-child(4){
    grid-area: curr-status;
  } // 在工现况容器设置

  :nth-child(5){
    grid-area: hour;
  } // 小时别容器设置

}

#header{
  // display: inline-flex;
  // text-align: center;
  // align-items: center;
  text-align: center;
  font-size: 5vh;
}

</style>
