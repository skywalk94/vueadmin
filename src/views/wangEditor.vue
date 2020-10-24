<template>
  <div class="box">
    <richEditor @change="changeRich"></richEditor>
    <div class="btn">
      <el-button type="primary" @click="getEditorData"
        >生成的html代码</el-button
      >
    </div>
    <h3>内容预览</h3>
    <div class="preview" v-html="editorData"></div>
  </div>
</template>

<script>
import richEditor from "../component/richEditor";
export default {
  components: {
    richEditor,
  },
  data() {
    return {
      editorData: "",
    };
  },
  mounted() {},

  methods: {
    changeRich(e) {
      this.editorData = e;
    },

    // 获取编辑器内容
    getEditorData() {
      this.$notify({
        title: "html代码",
        message: this.editorData,
      });
    },
  },
};
</script>

<style lang="less" scoped>
.box {
  width: 80%;
  margin: 20px auto;
}

.btn {
  display: flex;
  flex-direction: row-reverse;
}

.preview {
  width: 100%;
  min-height: 300px;
  margin: 20px auto 0;
  border: 1px solid #ccc;
}

.el-notification.left {
  word-break: break-all;
}
</style>
