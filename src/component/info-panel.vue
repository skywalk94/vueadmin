<template>
  <div class="info">
    <div class="info-upper">
      <div class="info-upper-title" @click="goHome()">vue后台管理系统</div>
      <div class="info-upper-user">
        <el-dropdown>
          <div class="info-upper-avatar">
            <img
              src="https://sucai.suoluomei.cn/sucai_zs/images/20200523094058-1.jpg"
              alt
            />
          </div>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item
              v-for="(item, index) in dropdownList"
              :key="index"
              :divided="index == dropdownList.length - 1"
              @click.native="operateMenu(index)"
              >{{ item }}</el-dropdown-item
            >
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
    <div class="info-nav">
      <div class="info-nav-zoom">
        <i
          :class="isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'"
          @click="toggleMenu()"
        ></i>
      </div>
      <div class="info-nav-tag">
        <tag-nav />
      </div>
    </div>
  </div>
</template>

<script>
import tagNav from "./tag-nav";
export default {
  components: {
    "tag-nav": tagNav,
  },
  data() {
    return {
      isCollapse: false,
      menuWidth: 200,
      dropdownList: ["回到首页", "退出登录", "我的博客"],
    };
  },

  methods: {
    // 缩放menu,向父组件传递boolean
    toggleMenu() {
      this.isCollapse = !this.isCollapse;
      this.$emit("collapse", this.isCollapse);
    },

    operateMenu(index) {
      switch (index) {
        case 0:
          this.$router.push({
            path: "/main",
          });
          break;
        case 1:
          localStorage.removeItem("userInfo");
          this.$router.push({
            path: "/login",
          });
          break;
        case 2:
          window.open("https://iapex.blog.csdn.net");
          break;
      }
    },

    goHome() {
      this.$router.push({
        path: "/main",
      });
    },
  },
};
</script>

<style lang="less" scoped>
.info {
  background: #fff;
  padding: 2px 0;
  box-sizing: border-box;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  transition: all 0.3s;
  z-index: 100;

  &-upper {
    height: 60px;
    padding: 0 20px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

    &-user {
      display: flex;
      align-items: center;
    }

    &-title {
      font-size: 20px;
      color: #304156;
      user-select: none;
      cursor: pointer;
    }

    &-avatar {
      width: 45px;
      height: 45px;
      margin-left: 20px;
      border-radius: 50%;
      overflow: hidden;
    }
  }

  &-nav {
    height: 40px;
    display: flex;
    align-items: center;
    padding: 0 20px;
    box-sizing: border-box;

    &-zoom {
      font-size: 24px;
      cursor: pointer;
    }

    &-tag {
      width: 100%;
      margin-left: 20px;
    }
  }
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>