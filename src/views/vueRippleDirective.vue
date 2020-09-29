<template>
  <div class="box">
    <div class="rippleBtn" v-ripple>clickMe</div>
  </div>
</template>

<script>
import Vue from "vue";
import Ripple from "vue-ripple-directive";
Vue.directive("ripple", Ripple);
Ripple.color = "rgba(6, 74, 173, 0.2)";
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
  width: 300px;
  height: 300px;
  border-radius: 50%;
  border: 2px solid #909399;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  user-select: none;
  cursor: pointer;
}
</style>