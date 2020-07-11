<template>
  <div class="row">
    <img
      src="https://sucai.suoluomei.cn/sucai_zs/images/20200711135449-b3a2a02b62999fa7ebcebcd9fad537d.jpg"
      alt
    />
  </div>
</template>

<script>
import scrollReveal from "scrollreveal";
export default {
  data() {
    return {
      scrollReveal: scrollReveal()
    };
  },
  mounted() {
    this.get();
  },
  methods: {
    get() {
      this.scrollReveal.reveal(".row img", {
        duration: 1000,
        reset: false,
        mobile: false,
        easing: "linear",
        scale: 0.8
      });
    }
  }
};
</script>

<style lang="less" scoped>
.row {
  width: 100%;
  height: 100%;
}

.row img {
  width: 100%;
  height: 100%;
}
</style>