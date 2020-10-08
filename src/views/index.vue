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
