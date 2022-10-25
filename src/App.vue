<template>
  <div id="app">
    <div class="header"></div>
    <div class="content">
      <div class="left">
        <div class="box1">
          <!-- <dv-border-box-1></dv-border-box-1> -->
        </div>
        <div class="box2">
          <!-- <dv-border-box-9></dv-border-box-9> -->
        </div>
      </div>
      <div class="right">
        <div class="box3">
          <!-- <dv-border-box-9></dv-border-box-9> -->
        </div>
        <div class="box4">
          <!-- <dv-border-box-1></dv-border-box-1> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App'
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
