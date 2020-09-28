<template>
  <div id="admin">
    <div class="adminUpper">
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
    <div class="adminMainBox">
      <div class="adminMenuNav">
        <el-menu
          :default-active="$route.path"
          background-color="#304156"
          text-color="#BFCBD9"
        >
          <div v-for="(item, index) in menuList" :key="index">
            <template v-if="!item.childList">
              <el-menu-item :index="item.path" @click="skipPath(item.path)">
                <i :class="item.icon"></i>
                <span slot="title">{{ item.title }}</span>
              </el-menu-item>
            </template>
            <template v-if="item.childList">
              <el-submenu index="index">
                <template slot="title">
                  <i :class="item.icon"></i>
                  <span>{{ item.title }}</span>
                </template>
                <el-menu-item
                  v-for="(row, i) in item.childList"
                  :key="i"
                  :index="row.path"
                  @click="skipPath(row.path)"
                  >{{ row.title }}</el-menu-item
                >
              </el-submenu>
            </template>
          </div>
        </el-menu>
      </div>
      <div class="adminMain">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import screenfull from "screenfull";

export default {
  data() {
    return {
      menuList: [
        {
          title: "首页",
          path: "/main",
          icon: "el-icon-s-home",
        },
        {
          title: "table表格",
          path: "/table",
          icon: "el-icon-s-order",
        },
        {
          title: "vue-ripple-directive",
          path: "/vueRippleDirective",
          icon: "el-icon-coffee-cup",
        },
        {
          title: "echart图表",
          icon: "el-icon-s-data",
          childList: [
            {
              title: "中国地图",
              path: "/mapEchart",
            },
            {
              title: "折线柱状混合图",
              path: "/mixEchart",
            },
          ],
        },
      ],
      isFullscreen: false,
      isAnimate: false,
    };
  },
  mounted() {},
  methods: {
    skipPath(e) {
      this.$router.push({
        path: "." + e,
      });
    },

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
.adminUpper {
  width: 100%;
  height: 6vh;
  background: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  box-sizing: border-box;
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
.adminMainBox {
  display: flex;
  height: 94vh;
}

.adminMenuNav {
  width: 260px;
  background: #304156;
  overflow-x: hidden;
}

.adminMain {
  width: 100%;
  height: 100%;
}

.adminMenuNav,
.adminMain {
  overflow-y: auto;
}

::-webkit-scrollbar {
  display: none;
}
</style>