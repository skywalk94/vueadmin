<template>
  <div class="box">
    <div class="crop">
      <vueCropper
        ref="cropper"
        :img="option.img"
        :autoCrop="option.autoCrop"
        :mode="option.mode"
      ></vueCropper>
    </div>
    <div class="btn">
      <el-button type="primary" @click="getCropData()">裁剪</el-button>
      <el-button
        type="primary"
        icon="el-icon-refresh-left"
        @click="rotateLeft()"
      ></el-button>
      <el-button
        type="primary"
        icon="el-icon-refresh-right"
        @click="rotateRight()"
      ></el-button>
      <el-button type="primary" @click="refresh()">重置</el-button>
    </div>
    <img class="pic" :src="imgUrl" alt="" />
  </div>
</template>

<script>
import { VueCropper } from "vue-cropper";
export default {
  components: {
    VueCropper,
  },
  data() {
    return {
      option: {
        img: "https://sucai.suoluomei.cn/sucai_zs/images/20201009165025-bg.png", // 裁剪图片的地址
        autoCrop: true, //是否默认生成截图框
        fixedBox: true, //固定截图框大小 不允许改变
        mode: "cover",
      },
      imgUrl: "",
    };
  },
  methods: {
    //   左旋转
    rotateLeft() {
      console.log(this.$refs.cropper);
      this.$refs.cropper.rotateLeft();
    },
    // 右旋转
    rotateRight() {
      this.$refs.cropper.rotateRight();
    },
    // 重置
    refresh() {
      this.$refs.cropper.refresh();
    },
    // 生成blob图片
    getCropData() {
      this.$refs.cropper.getCropData((data) => {
        this.imgUrl = data;
      });
    },
  },
};
</script>

<style scoped>
.box {
  margin: 30px auto 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.crop,
.pic {
  width: 600px;
  height: 400px;
}
.btn {
  display: flex;
  flex-direction: column;
}
.btn button {
  margin: 10px 0;
}
</style>