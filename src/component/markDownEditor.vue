<template>
  <mavon-editor @change="changeValue"></mavon-editor>
</template>

<script>
import Vue from "vue";
import mavonEditor from "mavon-editor";
import "mavon-editor/dist/css/index.css";
Vue.use(mavonEditor);
export default {
  data() {
    return {};
  },
  mounted() {},

  methods: {
    changeValue(e) {
      this.$emit("change", e);
    },
  },
};
</script>

<style lang="less" scoped>
</style>