<template>
  <div class="adminMainBox">
    <div class="adminMenuNav" :style="{ width: menuWidth + 'px' }">
      <el-menu
        :default-active="$route.path"
        background-color="#304156"
        text-color="#BFCBD9"
        :collapse="isCollapse"
        v-for="(item, index) in menuList"
        :key="index"
      >
        <el-menu-item
          :index="item.path"
          v-if="!item.hasOwnProperty('childList')"
          @click="skipPath(item.path)"
        >
          <i :class="item.icon"></i>
          <span slot="title">{{ item.title }}</span>
        </el-menu-item>
        <el-submenu index="index" v-if="item.hasOwnProperty('childList')">
          <template slot="title">
            <i :class="item.icon"></i>
            <span>{{ item.title }}</span>
          </template>
          <div v-for="(row, i) in item.childList" :key="i">
            <el-menu-item
              :index="row.path"
              v-if="row.path"
              @click="skipPath(row.path)"
            >
              {{ row.title }}
            </el-menu-item>
            <el-submenu
              :index="index + '-' + i"
              v-if="row.hasOwnProperty('sunList')"
            >
              <template slot="title">{{ row.title }}</template>
              <el-menu-item
                v-for="(col, j) in row.sunList"
                :key="j"
                :index="col.path"
                @click="skipPath(col.path)"
              >
                {{ col.title }}
              </el-menu-item>
            </el-submenu>
          </div>
        </el-submenu>
      </el-menu>
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
            <el-tag
              v-for="item in tagList"
              :key="item"
              closable
              @close="closeTag(item)"
            >
              {{ tag }}
            </el-tag>
          </div>
        </div>
      </div>
      <div class="adminView">
        <transition name="move" mode="out-in">
          <keep-alive>
            <router-view />
          </keep-alive>
        </transition>
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
        {
          title: "组件",
          icon: "el-icon-aim",
          childList: [
            {
              title: "外部组件",
              sunList: [
                {
                  title: "列表拖拽",
                  path: "/vueDraggable",
                },
                {
                  title: "水波纹",
                  path: "/vueRippleDirective",
                },
                {
                  title: "裁剪图片",
                  path: "/vueCropper",
                },
              ],
            },
            {
              title: "element组件",
              sunList: [
                {
                  title: "table表格",
                  path: "/table",
                },
                {
                  title: "地址联动",
                  path: "/cascaderArea",
                },
              ],
            },
          ],
        },
        {
          title: "抽奖",
          icon: "el-icon-orange",
          childList: [
            {
              title: "九宫格抽奖",
              path: "/gridLottery",
            },
            {
              title: "大转盘抽奖",
              path: "/plateLottery",
            },
          ],
        },
      ],
      tagList: [],
      isCollapse: false,
      isFullscreen: false,
      isAnimate: false,
      menuWidth: 210,
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

    // 缩放面板
    zoomMenu() {
      if (this.isCollapse) {
        this.menuWidth = 210;
      } else {
        this.menuWidth = 63;
      }
      this.isCollapse = !this.isCollapse;
    },

    closeTag(item) {},
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
.adminMenuNav .el-menu {
  border-right: unset;
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
  padding: 5px 20px;
  box-sizing: border-box;
}

.move-enter-active,
.move-leave-active {
  transition: opacity 0.3s;
}

.move-enter,
.move-leave {
  opacity: 0;
}
</style>
