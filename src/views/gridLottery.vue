<template>
  <div class="box">
    <div
      class="row"
      :class="select == index ? 'active' : ''"
      v-for="(item, index) in list"
      :key="index"
    >
      {{ item.name }}
    </div>
    <div class="draw" @click="startDraw()">抽奖</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          name: "手机",
        },
        {
          name: "平板",
        },
        {
          name: "电磁炉",
        },
        {
          name: "洗衣机",
        },
        {
          name: "衣柜",
        },
        {
          name: "电脑",
        },
        {
          name: "电视",
        },
        {
          name: "冰箱",
        },
      ],
      flag: true, //是否开始抽奖
      select: 0, //页面对应抽奖下标
      timer: "",
      count: 0,
    };
  },
  methods: {
    startDraw() {
      if (this.flag == true) {
        this.flag = false;
        this.timer = setInterval(() => {
          this.spinPrize();
        }, 100);
      }
    },

    spinPrize() {
      var spin = 3; //旋转圈数
      var win = 5; //中奖产品 0-7
      this.select += 1;
      if (this.select > 7 && this.count != spin) {
        this.select = 0;
        this.count += 1;
      }
      if (this.select == win && this.count == spin) {
        clearInterval(this.timer);
        this.flag = true;
        this.count = 0;
        this.$message("中奖产品为:" + this.list[this.select].name);
      }
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

.draw {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100px;
  height: 100px;
  background: chocolate;
  text-align: center;
  line-height: 100px;
  color: #fff;
  cursor: pointer;
}

.row {
  position: absolute;
  width: 100px;
  height: 100px;
  line-height: 100px;
  background: cadetblue;
  color: #fff;
  text-align: center;
}

.box .row:nth-child(1) {
  top: 0;
  left: 0;
}

.box .row:nth-child(2) {
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
}

.box .row:nth-child(3) {
  top: 0;
  right: 0;
}

.box .row:nth-child(4) {
  top: 50%;
  right: 0;
  transform: translate(0, -50%);
}

.box .row:nth-child(5) {
  bottom: 0;
  right: 0;
}

.box .row:nth-child(6) {
  bottom: 0;
  right: 50%;
  transform: translate(50%, 0);
}

.box .row:nth-child(7) {
  bottom: 0;
  left: 0;
}

.box .row:nth-child(8) {
  top: 50%;
  left: 0;
  transform: translate(0, -50%);
}

.active {
  background: lightseagreen !important;
}
</style>