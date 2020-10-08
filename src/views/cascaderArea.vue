<template>
  <div class="box">
    <el-cascader
      :options="optionsThree"
      v-model="selectedThree"
      placeholder="省市区三级联动"
      @change="handleChange"
      ref="three"
    ></el-cascader>
    <div class="split"></div>
    <el-cascader
      :options="optionsTwo"
      v-model="selectedTwo"
      placeholder="省市区二级联动"
    ></el-cascader>
  </div>
</template>

<script>
import { provinceAndCityData, regionData } from "element-china-area-data";
export default {
  data() {
    return {
      optionsThree: regionData,
      optionsTwo: provinceAndCityData,
      selectedThree: [],
      selectedTwo: [],
    };
  },
  methods: {
    handleChange() {
      this.$alert(
        this.selectedThree +
          " " +
          this.$refs.three.getCheckedNodes()[0].pathLabels,
        {
          confirmButtonText: "确定",
        }
      );
      console.log(this.selectedThree);
      console.log(this.$refs.three.getCheckedNodes()[0].pathLabels);
    },
  },
};
</script>

<style lang="less" scoped>
.split {
  height: 50px;
}
</style>