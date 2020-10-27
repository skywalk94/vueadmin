<template>
  <div class="menuBox">
    <el-menu
      :default-active="$route.path"
      background-color="#304156"
      text-color="#BFCBD9"
      router
      unique-opened
      :collapse="isCollapse"
      v-for="(item, index) in menuList"
      :key="index"
    >
      <el-menu-item :index="item.path" v-if="!item.hasOwnProperty('childList')">
        <i :class="item.icon"></i>
        <span slot="title">{{ item.title }}</span>
      </el-menu-item>
      <el-submenu
        :index="index.toString()"
        v-if="item.hasOwnProperty('childList')"
      >
        <template slot="title">
          <i :class="item.icon"></i>
          <span>{{ item.title }}</span>
        </template>
        <div v-for="(row, i) in item.childList" :key="i">
          <el-menu-item :index="row.path" v-if="row.path">
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
            >
              {{ col.title }}
            </el-menu-item>
          </el-submenu>
        </div>
      </el-submenu>
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
                {
                  title: "html生成图片",
                  path: "/html2canvas",
                },
                {
                  title: "瀑布流布局",
                  path: "/vueWaterfallEasy",
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
          title: "编辑器",
          icon: "el-icon-edit",
          childList: [
            {
              title: "wangEditor富文本",
              path: "/wangEditor",
            },
            {
              title: "mavonEditor编辑器",
              path: "/mavonEditor",
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
        {
          title: "错误地址",
          path: "/error",
          icon: "el-icon-error",
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
.menuBox .el-menu {
  border-right: unset;
}
</style>
