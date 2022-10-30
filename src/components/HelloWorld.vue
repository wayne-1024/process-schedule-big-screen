<template>
  <div class="hello">
    <div class="test"></div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>

.hello{
  width: 100%;
  height: 100%;
  color: white;
  background-color: rgba(255, 0, 0, 0.1);
  display: flex;
  align-items: flex-end;
  justify-content: center;

  .test{
    width: 80%;
    height: 100px;
    background: white;
    position: relative;
    bottom: 20px;
  }

}
</style>
