<template>
  <div id="mainbox">
    <div class="menuNav">
      <el-menu :default-active="$route.path" background-color="#304156" text-color="#BFCBD9">
        <div v-for="(item,index) in menuList" :key="index">
          <template v-if="!item.childList">
            <el-menu-item :index="item.path" @click="skipPath(item.path)">
              <i :class="item.icon"></i>
              <span slot="title">{{item.title}}</span>
            </el-menu-item>
          </template>
          <template v-if="item.childList">
            <el-submenu index="index">
              <template slot="title">
                <i :class="item.icon"></i>
                <span>{{item.title}}</span>
              </template>
              <el-menu-item
                v-for="(row , i) in item.childList"
                :key="i"
                :index="row.path"
                @click="skipPath(row.path)"
              >{{item.title}}</el-menu-item>
            </el-submenu>
          </template>
        </div>
      </el-menu>
    </div>
    <div id="main">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuList: [
        {
          title: "首页",
          path: "/main",
          icon: "el-icon-orange",
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
    };
  },
  mounted() {},
  methods: {
    skipPath(e) {
      this.$router.push({
        path: "." + e,
      });
    },
  },
};
</script>

<style lang="less" scoped>
#mainbox {
  display: flex;
  height: 100vh;
}

.menuNav {
  width: 260px;
  background: #304156;
}

::-webkit-scrollbar {
  display: none;
}

.menuNav,
#main {
  overflow-y: auto;
  overflow-x: hidden;
}
#main {
  width: 100%;
  height: 100%;
}
</style>