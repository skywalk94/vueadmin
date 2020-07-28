<template>
  <div class="box">
    <div class="rippleBtn" v-ripple>clickMe</div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="less" scoped>
.box {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f2f6fc;
}

.rippleBtn {
  width: 600px;
  height: 600px;
  border-radius: 50%;
  border: 2px solid #909399;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  -moz-user-select: none;
  -khtml-user-select: none;
  user-select: none;
  cursor: pointer;
}
</style>