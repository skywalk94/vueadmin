<template>
  <div class="richBox">
    <div id="richMain"></div>
  </div>
</template>

<script>
import wangEditor from "wangeditor";
export default {
  data() {
    return {
      editor: null,
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
      const editor = new wangEditor("#richMain");
      editor.config.onchangeTimeout = 0;
      editor.config.uploadImgShowBase64 = true;
      editor.config.zIndex = 10;
      // 配置 onchange 回调函数，将数据同步到 vue 中
      editor.config.onchange = (res) => {
        this.$emit("change", res);
      };
      // 创建编辑器
      editor.create();
      this.editor = editor;
    },
  },
};
</script>

<style lang="less" scoped>
</style>