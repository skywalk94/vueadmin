<template>
  <div class="box">
    <div id="editor"></div>
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
import wangEditor from "wangeditor";
export default {
  data() {
    return {
      editor: null,
      editorData: "",
    };
  },
  mounted() {
    this.initEditor();
  },

  beforeDestroy() {
    // 调用销毁 API 对当前编辑器实例进行销毁
    this.editor.destroy();
    this.editor = null;
  },

  methods: {
    // 初始化插件
    initEditor() {
      const editor = new wangEditor("#editor");
      editor.config.onchangeTimeout = 0;
      editor.config.uploadImgShowBase64 = true;
      // 配置 onchange 回调函数，将数据同步到 vue 中
      editor.config.onchange = (res) => {
        this.editorData = res;
      };
      // 创建编辑器
      editor.create();
      this.editor = editor;
    },

    // 获取编辑器内容
    getEditorData() {
      let data = this.editor.txt.html();
      this.$notify({
        title: "html代码",
        message: data,
        position: "bottom-left",
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
