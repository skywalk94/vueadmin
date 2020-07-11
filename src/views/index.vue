<template>
  <div class="mainbox">
    <div class="menuNav">
      <el-menu :default-active="$route.path" background-color="#304156" text-color="#BFCBD9">
        <el-menu-item index="/" @click="skipPath('/')">
          <i class="el-icon-orange"></i>
          <span slot="title">首页</span>
        </el-menu-item>
        <el-menu-item index="/table" @click="skipPath('./table')">
          <i class="el-icon-s-order"></i>
          <span slot="title">table表格</span>
        </el-menu-item>
        <el-menu-item index="/vueRippleDirective" @click="skipPath('./vueRippleDirective')">
          <i class="el-icon-coffee-cup"></i>
          <span slot="title">vue-ripple-directive</span>
        </el-menu-item>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-s-data"></i>
            <span>echart图表</span>
          </template>
          <el-menu-item index="/polyEchart" @click="skipPath('./polyEchart')">折线图</el-menu-item>
          <el-menu-item index="/mixEchart" @click="skipPath('./mixEchart')">折线柱状混合图</el-menu-item>
        </el-submenu>
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
    return {};
  },
  mounted() {},
  methods: {
    skipPath(e) {
      this.$router.push({
        path: e
      });
    }
  }
};
</script>

<style lang="less" scoped>
.mainbox {
  display: flex;
  height: 100vh;
}

.menuNav {
  width: 300px;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
}

.menuNav .el-menu {
  width: 100%;
  height: 100%;
}

#main {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
}

// 修改浏览器滚动条
::-webkit-scrollbar {
  width: 5px;
}
::-webkit-scrollbar-track {
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.1);
}
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: rgba(0, 0, 0, 0.1);
}
</style>