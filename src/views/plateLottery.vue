<template>
  <div class="box">
    <img
      class="main"
      :class="isSpin ? 'reset' : 'start'"
      :style="{ transform: !isSpin ? `rotate(-${rotate}deg)` : 'none' }"
      src="https://sucai.suoluomei.cn/sucai_zs/images/20190926090636-1.png"
      alt=""
    />
    <div class="point" @click="startDraw()">
      <img
        src="https://sucai.suoluomei.cn/sucai_zs/images/20190924162756-kaishiaa.png"
        alt=""
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isSpin: true,
      rotate: 0,
    };
  },
  methods: {
    // 点击抽奖
    startDraw() {
      if (this.isSpin) {
        this.isSpin = false;
        this.watchAni();
        this.spinPrize();
      } else {
        alert("正在抽奖，请勿重复点击");
      }
    },

    // 配置旋转参数
    spinPrize() {
      var math = Math.floor(Math.random() * 10);
      var active = math; //选中的奖品地址是需要后台传给你
      var total = 14; //奖品的总个数
      var lottery = (360 / total) * active - 360 / total / 2; //计算定位到指定商品中间
      var rotate = lottery + 1800; //总旋转度数
      this.rotate = rotate;
      this.watchAni();
    },

    // 监听动画事件
    watchAni() {
      var ele = document.querySelector(".main");
      if (this.isSpin) {
        ele.removeEventListener("transitionend", this.callback);
      } else {
        ele.addEventListener("transitionend", this.callback);
      }
    },

    // 动画执行完成的回调
    callback() {
      alert("中奖");
      // 复位
      this.isSpin = true;
    },
  },
};
</script>

<style lang="less" scoped>
.box {
  position: relative;
  width: 400px;
  height: 400px;
  margin: 100px auto 0;
}

.point {
  position: absolute;
  width: 13%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

img {
  width: 100%;
  height: 100%;
}

.start {
  transition: all 3s ease-in-out;
}

.reset {
  transition: none;
  transform: none;
}
</style>