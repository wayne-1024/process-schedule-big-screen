<template>
  <div id="current_status">
    <div class="current_status_container"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
#current_status{
  color: white;
  /* background-color: rgba(127, 255, 212, 0.164); */
  width: 100%;
  height: 100%;
  /* margin-top: 10%; */
  display: flex;
  /* align-items: center; */
  justify-content: center;
}

.current_status_container{
  width: 80%;
  height: 70%;
  position: relative;
  top: 8vh;
  background-color: rgba(127, 255, 212, 0.164);
}
</style>