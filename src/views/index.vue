<template>
  <div class="adminMainBox">
    <div
      class="adminMenuNav"
      :class="isMobile ? (isShow ? 'menuShow' : 'menuHidden') : ''"
      :style="{ width: isMobile ? 210 + 'px' : menuWidth + 'px' }"
    >
      <menuNav :isCollapse="isCollapse"></menuNav>
    </div>
    <div
      class="adminPopBg"
      @click="closeMenu()"
      v-show="isShow && isMobile"
    ></div>
    <div
      class="adminMain"
      :style="{ 'margin-left': isMobile ? 0 : menuWidth + 'px' }"
    >
      <div class="adminUpper">
        <infoPanel></infoPanel>
        <div class="adminNav">
          <div class="adminZoom">
            <i
              :class="isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'"
              v-if="!isMobile"
              @click="zoomMenu()"
            ></i>
            <i class="el-icon-s-unfold" v-else @click="showMenu()"></i>
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
import tagNav from "../component/tagNav";
import infoPanel from "../component/infoPanel";
import menuNav from "../component/menuNav";
export default {
  components: {
    tagNav,
    menuNav,
    infoPanel,
  },
  data() {
    return {
      isCollapse: false,
      menuWidth: 210,
      isMobile: false,
      isShow: false,
    };
  },
  mounted() {
    this.getClient();
  },
  methods: {
    // 监听窗口尺寸
    getClient() {
      var viewWidth = window.innerWidth;
      this.fitMobile(viewWidth);
      window.onresize = (res) => {
        viewWidth = res.target.innerWidth;
        this.fitMobile(viewWidth);
      };
    },

    // 适配移动端
    fitMobile(width) {
      if (width < 600) {
        this.isCollapse = false;
        this.isMobile = true;
        this.isShow = false;
      } else {
        this.isMobile = false;
        this.menuWidth = this.isCollapse ? 63 : 210;
      }
    },

    // 缩放menu
    zoomMenu() {
      this.isCollapse = !this.isCollapse;
      this.menuWidth = this.isCollapse ? 63 : 210;
    },

    // 显示menu
    showMenu() {
      this.isShow = true;
    },

    // 关闭menu
    closeMenu() {
      this.isShow = false;
    },
  },
};
</script>

<style lang="less" scoped>
.adminMenuNav {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 110;
  width: 210px;
  height: 100%;
  background: #304156;
  overflow-x: hidden;
  overflow-y: hidden;
  transition: all 0.3s;
}

.adminMenuNav:hover {
  overflow-y: auto;
}

.menuShow {
  transform: translateX(0);
}

.menuHidden {
  transform: translateX(-100%);
}

.adminPopBg {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 105;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
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
