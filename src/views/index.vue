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
          <transition name="fade" mode="out-in">
            <router-view />
          </transition>
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
  min-width: 1200px;
  &-main {
    transition: all 0.3s;
    &-view {
      overflow-x: hidden;
    }
  }

  .fade-leave-active,
  .fade-transform-enter-active {
    transition: all 0.5s;
  }

  .fade-enter {
    opacity: 0;
    transform: translateX(-30px);
  }

  .fade-leave-to {
    opacity: 0;
    transform: translateX(30px);
  }
}
</style>