<template>
  <div class="menu-box">
    <el-menu
      :default-active="$route.path"
      background-color="#304156"
      text-color="#BFCBD9"
      class="el-menu-vertical"
      :collapse="isCollapse"
      router
      unique-opened
    >
      <div v-for="(item, index) in menuList" :key="index">
        <template v-if="item.hasOwnProperty('sonList')">
          <el-submenu :index="index.toString()">
            <template slot="title">
              <i :class="item.icon"></i>
              <span slot="title">{{ item.title }}</span>
            </template>
            <div v-for="(row, idx) in item.sonList" :key="idx">
              <el-menu-item-group>
                <el-menu-item :index="row.path" v-if="row.path">
                  {{ row.title }}
                </el-menu-item>
              </el-menu-item-group>
              <template v-if="row.hasOwnProperty('sunList')">
                <el-submenu :index="index + '-' + idx">
                  <span slot="title">{{ row.title }}</span>
                  <el-menu-item
                    v-for="(col, jdx) in row.sunList"
                    :key="jdx"
                    :index="col.path"
                  >
                    {{ col.title }}
                  </el-menu-item>
                </el-submenu>
              </template>
            </div>
          </el-submenu>
        </template>
        <template v-if="!item.hasOwnProperty('sonList')">
          <el-menu-item :index="item.path">
            <i :class="item.icon"></i>
            <span slot="title">{{ item.title }}</span>
          </el-menu-item>
        </template>
      </div>
    </el-menu>
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
          icon: "el-icon-s-home",
        },
        {
          title: "二级目录",
          icon: "el-icon-s-data",
          sonList: [
            {
              title: "选项一",
              path: "/one",
            },
            {
              title: "选项二",
              path: "/two",
            },
          ],
        },
        {
          title: "三级目录",
          icon: "el-icon-aim",
          sonList: [
            {
              title: "外部组件",
              sunList: [
                {
                  title: "选项三",
                  path: "/three",
                },
              ],
            },
          ],
        },
      ],
    };
  },
  props: {
    isCollapse: Boolean,
  },

  methods: {},
};
</script>

<style lang="less" scoped>
.menu-box {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 110;
  height: 100%;
  background: #304156;
  overflow-x: hidden;
  overflow-y: auto;
  .el-menu {
    border-right: unset;
  }

  /deep/ .el-menu--collapse .el-submenu__title span {
    display: none;
  }
  /deep/ .el-menu-vertical:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  /deep/ .el-menu--collapse .el-submenu__icon-arrow {
    display: none;
  }
  /deep/ .el-menu-item-group__title {
    display: none;
  }
  /deep/ .el-submenu .el-menu-item:hover {
    background-color: #001528 !important;
  }
  /deep/ .el-submenu .el-menu-item {
    background-color: #1f2d3d !important;
  }
  /deep/ .el-menu-item.is-active {
    background-color: #001528 !important;
  }
}
</style>