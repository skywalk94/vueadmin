<template>
  <div id="mainbox">
    <div class="menuNav">
      <el-menu :default-active="$route.path" background-color="#304156" text-color="#BFCBD9">
        <el-menu-item index="/main" @click="skipPath('/main')">
          <i class="el-icon-orange"></i>
          <span slot="title">首页</span>
        </el-menu-item>
        <el-menu-item index="/table" @click="skipPath('/table')">
          <i class="el-icon-s-order"></i>
          <span slot="title">table表格</span>
        </el-menu-item>
        <el-menu-item index="/vueRippleDirective" @click="skipPath('/vueRippleDirective')">
          <i class="el-icon-coffee-cup"></i>
          <span slot="title">vue-ripple-directive</span>
        </el-menu-item>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-s-data"></i>
            <span>echart图表</span>
          </template>
          <el-menu-item index="/mapEchart" @click="skipPath('/mapEchart')">中国地图</el-menu-item>
          <el-menu-item index="/mixEchart" @click="skipPath('/mixEchart')">折线柱状混合图</el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
    <div id="mainRight">
      <div id="mainUpper"></div>
      <div id="main">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {
    skipPath(e) {
      this.$router.push({
        path: "." + e
      });
    }
  }
};
</script>

<style lang="less" scoped>
#mainbox {
  display: flex;
  min-height: 100vh;
}

.menuNav {
  background: #304156;
}

#mainUpper {
  width: 100%;
}

#mainRight,
#main {
  width: 100%;
  height: 100%;
}
</style>