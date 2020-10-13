<template>
  <div class="box">
    <div class="gif">
      <img src="../static/404.gif" alt="" />
      <div class="btn">
        <el-button @click="backHome()">回到首页</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    backHome() {
      this.$router.replace({
        path: "/main",
      });
    },
  },
};
</script>

<style lang="less" scoped>
.gif,
img {
  position: relative;
  width: 100%;
  height: 100%;
}
.btn {
  position: absolute;
  bottom: 15%;
  left: 50%;
  transform: translate(-50%, 0);
}
</style>