<template>
  <div class="box">
    <div class="editor">
      <markDownEditor @change="changeVal"></markDownEditor>
    </div>
    <el-button type="primary" @click="getData">查看数据</el-button>
  </div>
</template>

<script>
import markDownEditor from "../component/markDownEditor";
export default {
  components: {
    markDownEditor,
  },
  data() {
    return {
      content: "",
    };
  },
  mounted() {},
  methods: {
    changeVal(e) {
      this.content = e;
    },

    getData() {
      this.$notify({
        title: "传输数据",
        message: this.content,
      });
    },
  },
};
</script>

<style lang="less" scoped>
.editor {
  max-height: 600px;
}
</style>