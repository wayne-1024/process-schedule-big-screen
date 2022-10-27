<template>
  <div id="app">
    <div class="header"></div>
    <div class="content">
      <div class="left">
        <div class="box1">
          <!-- <dv-border-box-1></dv-border-box-1> -->
          <RealProgressMon />
        </div>
        <div class="box2">
          <!-- <dv-border-box-9></dv-border-box-9> -->
          <CurrentStatus></CurrentStatus>
        </div>
      </div>
      <div class="right">
        <div class="box3">
          <!-- <dv-border-box-9></dv-border-box-9> -->
          <RealProgressDay />
        </div>
        <div class="box4">
          <!-- <dv-border-box-1></dv-border-box-1> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import CurrentStatus from './components/CurrentStatus.vue';
import RealProgressDay from './components/RealProgressDay.vue';
import RealProgressMon from './components/RealProgressMon.vue';

export default {
  name: 'App',
  components: {
    CurrentStatus,
    RealProgressDay,
    RealProgressMon,
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

}

.header {
  width: 90vw;
  height: 8vh;
  background-color: gainsboro;
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

.box1 {
  width: 44vw;
  height: 89vh;
  background-color: gainsboro;
  margin-bottom: 1vh;
}

.box2 {
  width: 44vw;
  height: 59vh;
  background-color: gainsboro;
  margin-bottom: 1vh;
}

.box3 {
  width: 44vw;
  height: 59vh;
  background-color: gainsboro;
  margin-bottom: 1vh;
}

.box4 {
  width: 44vw;
  height: 89vh;
  background-color: gainsboro;
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
