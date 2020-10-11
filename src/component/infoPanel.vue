<template>
  <div class="infoBox">
    <div class="adminTitle">vue后台管理系统</div>
    <div class="adminInfo">
      <el-tooltip
        class="item"
        effect="dark"
        :content="isFullscreen ? '取消全屏' : '全屏'"
        placement="bottom"
      >
        <div class="adminFull" @click="toggleFull()">
          <img
            :src="
              isFullscreen
                ? 'https://sucai.suoluomei.cn/sucai_zs/images/20200729171413-2.png'
                : 'https://sucai.suoluomei.cn/sucai_zs/images/20200729171413-1.png'
            "
            alt
          />
        </div>
      </el-tooltip>
      <div
        class="adminAvatar animate__animated animate__infinite"
        :class="isAnimate ? 'animate__pulse' : ''"
        @click="aniAvatar()"
      >
        <img
          src="https://sucai.suoluomei.cn/sucai_zs/images/20200523094058-1.jpg"
          alt
        />
      </div>
    </div>
  </div>
</template>

<script>
import screenfull from "screenfull";
export default {
  data() {
    return {
      isFullscreen: false,
      isAnimate: false,
    };
  },
  methods: {
    // 全屏
    toggleFull() {
      this.isFullscreen = !this.isFullscreen;
      screenfull.toggle();
    },

    // 头像动画
    aniAvatar() {
      this.isAnimate = !this.isAnimate;
    },
  },
};
</script>

<style lang="less" scoped>
.infoBox {
  padding: 5px 20px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
}
.adminInfo {
  display: flex;
  align-items: center;
}

.adminTitle {
  font-size: 20px;
  color: #304156;
}

.adminFull {
  width: 30px;
  cursor: pointer;
}

.adminFull img,
.adminAvatar img {
  width: 100%;
  height: 100%;
}

.adminAvatar {
  width: 45px;
  height: 45px;
  margin-left: 20px;
  border-radius: 50%;
  overflow: hidden;
}
</style>