<template>
  <div class="box">
    <div class="main">
      <div class="title">系统登录</div>
      <div class="form">
        <el-input placeholder="请输入内容" prefix-icon="el-icon-user" v-model="userName">
        </el-input>
        <el-input placeholder="请输入内容" prefix-icon="el-icon-lock" v-model="passWord" show-password>
        </el-input>
        <div class="btn" @click="login">
          <el-button type="primary" :loading="isLoading">登录</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        userName: "admin",
        passWord: "123456",
        isLoading: false,
      };
    },
    methods: {
      login() {
        this.isLoading = true;
        localStorage.setItem("userInfo", this.userName);
        this.$router.replace({
          path: "/main",
        });
      },
    },
  };
</script>

<style lang="less" scoped>
  .box {
    width: 100%;
    height: 100vh;
    background-color: #2d3a4b;
    overflow: hidden;
  }

  .main {
    width: 400px;
    margin: 200px auto;
  }

  .title {
    text-align: center;
    font-size: 26px;
    color: #eee;
    font-weight: 600;
  }

  .form {
    margin-top: 40px;
  }

  .form .el-input:nth-child(1) {
    margin-bottom: 25px;
  }

  .btn .el-button {
    width: 100%;
    margin-top: 25px;
  }

  @media (max-width: 500px) {
    .main {
      width: 320px;
    }
  }
</style>