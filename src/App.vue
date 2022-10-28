<template>
  <div id="app">
    <!-- 标头 -->
    <div class="header">
      <dv-border-box-10>生产进度现况板</dv-border-box-10>
    </div>

    <!-- 主体 -->
    <div class="content">
      <div class="left">
        <dv-border-box-11 class="real_time_month" title="月别实时进度">
          <div class="box1"></div>
          <div class="box2"></div>
        </dv-border-box-11>
        <dv-border-box-11 class="currt_status" title="在工现况">
          <CurrentStatus></CurrentStatus>
        </dv-border-box-11>
      </div>
      <div class="right">
        <dv-border-box-11 class="real_time_day" title="日别实时进度">
        </dv-border-box-11>
        <dv-border-box-11 class="real_time_hour" title="小时别实时进度">
          
        </dv-border-box-11>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    CurrentStatus: () => import("./components/CurrentStatus.vue")
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

#app {
  display: flex;
  align-items: center;
  flex-direction: column;
  background-image: url('../src/assets/screen.png');
  width: 100vw;
  height: 100vh;
}

.header {
  width: 90vw;
  height: 8vh;
  text-align: center;
  color: white;
  /* background-color: gainsboro; */
  /* opacity: 0.1; */
}

.content {
  width: 90vw;
  height: 89vh;
  margin-top: 2vh;
  display: flex;
  flex-direction: row;
}

.left {
  width: 44vw;
  height: 89vh;
  /* background-color: gainsboro; */
  display: flex;
  flex-direction: column;
}

.real_time_month {
  width: 44vw;
  height: 89vh;
  /* background-color: rgba(220, 220, 220, 0.103); */
  margin-bottom: 1vh;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.box1 {
  width: 43vw;
  height: 27vh;
  margin-top: 1vh;
  /* background-color: rgba(229, 233, 223, 0.466); */
}

.box2 {
  width: 43vw;
  height: 23vh;
  margin-top: 1vh;
  /* background-color: rgba(229, 233, 223, 0.466); */
}

.currt_status {
  width: 44vw;
  height: 59vh;
  /* background-color: rgba(220, 220, 220, 0.103); */
  margin-bottom: 1vh;
}

.real_time_day {
  width: 44vw;
  height: 59vh;
  /* background-color: rgba(220, 220, 220, 0.144); */
  margin-bottom: 1vh;
}

.real_time_hour {
  width: 44vw;
  height: 89vh;
  /* background-color: rgba(220, 220, 220, 0.11); */
  margin-bottom: 1vh;
}

.right {
  width: 44vw;
  height: 89vh;
  margin-left: 2vw;
  /* background-color: gainsboro; */
  display: flex;
  flex-direction: column;
}

</style>
