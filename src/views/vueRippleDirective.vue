<template>
  <div class="box">
    <el-button v-ripple>默认按钮</el-button>
    <el-button plain v-ripple>朴素按钮</el-button>
    <el-button round v-ripple>圆角按钮</el-button>
    <el-button icon="el-icon-search" circle v-ripple></el-button>
    <div class="rippleBtn" v-ripple>水波纹按钮</div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {}
};
</script>

<style lang="less" scoped>
.box {
  padding: 30px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

.rippleBtn {
  width: 105px;
  height: 40px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #dcdfe6;
  color: #606266;
  margin-left: 10px;
  cursor: pointer;
}
</style>