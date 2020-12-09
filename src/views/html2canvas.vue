<template>
  <div class="box">
    <div class="main" ref="main">
      <img src="https://sucai.suoluomei.cn/sucai_zs/images/20191204145036-pic.png" alt="" />
      <div class="text">保存为文字+图片</div>
    </div>
    <div class="btn">
      <el-button type="primary" @click="giveImg()">生成图片</el-button>
      <el-button type="primary" @click="saveImg()">保存图片</el-button>
    </div>
    <img class="store" :src="imgUrl" alt="图片载体" />
  </div>
</template>

<script>
  import html2canvas from "html2canvas";
  export default {
    data() {
      return {
        imgUrl: "",
      };
    },
    mounted() {},
    methods: {
      // 生成图片
      giveImg() {
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
        var main = this.$refs.main;
        html2canvas(main, {
          useCORS: true,
        }).then((canvas) => {
          var dataUrl = canvas.toDataURL();
          this.imgUrl = dataUrl;
        });
      },

      // 保存图片
      saveImg() {
        if (this.imgUrl) {
          var a = document.createElement("a");
          var event = new MouseEvent("click");
          a.download = "图片";
          a.href = this.imgUrl;
          a.click();
        } else {
          this.$message.warning("请先点击生成图片");
        }
      },
    },
  };
</script>
<style lang="less" scoped>
  .main {
    text-align: center;
  }

  .main img {
    width: 300px;
  }

  .text {
    font-size: 20px;
    text-align: center;
  }

  .btn {
    margin: 20px 0;
    text-align: center;
  }

  .store {
    width: 100%;
  }
</style>