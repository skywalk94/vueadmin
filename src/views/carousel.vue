<template>
  <div class="box">
    <el-carousel type="card" height="300px">
      <el-carousel-item v-for="(item,index) in 6" :key="index">
        <div class="medium">{{ index }}</div>
      </el-carousel-item>
    </el-carousel>
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
}
.el-carousel--horizontal {
  width: 100%;
}
.el-carousel__item {
  background-color: #99a9bf;
  display: flex;
  align-items: center;
  justify-content: center;
}

.medium {
  color: #475669;
  font-size: 30px;
}
</style>