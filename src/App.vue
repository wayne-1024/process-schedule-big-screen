<template>
  <div id="app">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
    <div class="item">4</div>
    <div class="item">5</div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
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
  display: grid;

  // 1) 绘制网格线
  // grid-template-columns: 45vw 45vw;
  // grid-template-rows: 8vh 35vh 15vh 35vh;
  grid-template: 8vh 35vh 15vh 35vh / 45vw 45vw;  // 一行绘制

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

  .item{
    background-color: gainsboro;
  }

}


</style>
