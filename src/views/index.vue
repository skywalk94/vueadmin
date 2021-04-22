<template>
  <div class="admin">
    <menu-nav :isCollapse="isCollapse"></menu-nav>
    <div
      class="admin-main"
      :style="{
        marginLeft: menuWidth + 'px',
      }"
    >
      <info-panel @collapse="getCollapse"></info-panel>
      <div class="admin-main-view">
        <keep-alive>
          <router-view />
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
import infoPanel from "../component/info-panel";
import menuNav from "../component/menu-nav";
export default {
  components: {
    "info-panel": infoPanel,
    "menu-nav": menuNav,
  },
  data() {
    return {
      menuWidth: 200,
      isCollapse: false,
    };
  },

  mounted() {},

  methods: {
    // 获取缩放menu的开关Boolean
    getCollapse(e) {
      this.isCollapse = e;
      this.menuWidth = this.isCollapse ? 64 : 200;
    },
  },
};
</script>

<style lang="less" scoped>
.admin {
  overflow: hidden;

  &-main {
    margin-left: 200px;
    transition: all 0.3s;
    &-view {
      overflow-x: auto;
    }
  }
}
</style>