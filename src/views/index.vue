<template>
  <div class="adminMainBox">
    <div class="adminMenuNav" :style="{ width: menuWidth + 'px' }">
      <menuNav :isCollapse="isCollapse"></menuNav>
    </div>
    <div class="adminMain" :style="{ 'margin-left': menuWidth + 'px' }">
      <div class="adminUpper">
        <div class="adminHead">
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
        <div class="adminNav">
          <div class="adminZoom" @click="zoomMenu()">
            <i :class="isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'"></i>
          </div>
          <div class="adminTag">
            <tagNav></tagNav>
          </div>
        </div>
      </div>
      <div class="adminView">
        <keep-alive>
          <router-view />
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
import screenfull from "screenfull";
import tagNav from "../component/tagNav";
import menuNav from "../component/menuNav";
export default {
  components: {
    tagNav,
    menuNav,
  },
  data() {
    return {
      isCollapse: false,
      isFullscreen: false,
      isAnimate: false,
      menuWidth: 210,
    };
  },
  mounted() {},
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

    // 缩放面板
    zoomMenu() {
      if (this.isCollapse) {
        this.menuWidth = 210;
      } else {
        this.menuWidth = 63;
      }
      this.isCollapse = !this.isCollapse;
    },
  },
};
</script>

<style lang="less" scoped>
.adminMenuNav {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 210px;
  height: 100%;
  background: #304156;
  overflow-y: auto;
  transition: all 0.3s;
}

.adminMain {
  margin-left: 210px;
  transition: all 0.3s;
}

.adminUpper {
  position: sticky;
  top: 0;
  z-index: 100;
  width: 100%;
  background: #fff;
  padding: 2px 0;
  box-sizing: border-box;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}

.adminHead {
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
  font-size: 24px;
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

.adminZoom {
  font-size: 24px;
  cursor: pointer;
}
.adminNav {
  display: flex;
  align-items: center;
  padding: 5px 20px;
  box-sizing: border-box;
}

.adminView {
  overflow: auto;
}

.adminTag {
  width: 100%;
  margin-left: 20px;
}
</style>
