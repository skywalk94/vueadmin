<template>
  <div class="box">
    <div class="waterfall">
      <vue-waterfall-easy ref="waterfall" :imgsArr="imgsArr" @click="previewImg" @scrollReachBottom="getData">
        <div class="info" slot-scope="props">第{{ props.index + 1 }}张图片</div>
      </vue-waterfall-easy>
    </div>
  </div>
</template>

<script>
  import vueWaterfallEasy from "vue-waterfall-easy";
  export default {
    components: {
      vueWaterfallEasy,
    },
    data() {
      return {
        imgsArr: [],
        page: 0,
      };
    },
    mounted() {
      this.getData();
    },
    methods: {
      getData() {
        var list = [{
            src: "https://sucai.suoluomei.cn/sucai_zs/images/20201027152322-15.jpg",
          },
          {
            src: "https://sucai.suoluomei.cn/sucai_zs/images/20201027152321-13.jpg",
          },
          {
            src: "https://sucai.suoluomei.cn/sucai_zs/images/20201027152322-14.jpg",
          },
          {
            src: "https://sucai.suoluomei.cn/sucai_zs/images/20201027152321-12.jpg",
          },
          {
            src: "https://sucai.suoluomei.cn/sucai_zs/images/20201027152320-10.jpg",
          },
          {
            src: "https://sucai.suoluomei.cn/sucai_zs/images/20201027152320-11.jpg",
          },
          {
            src: "https://sucai.suoluomei.cn/sucai_zs/images/20201027152318-8.jpg",
          },
          {
            src: "https://sucai.suoluomei.cn/sucai_zs/images/20201027152319-9.jpg",
          },
          {
            src: "https://sucai.suoluomei.cn/sucai_zs/images/20201027152300-7.jpg",
          },
          {
            src: "https://sucai.suoluomei.cn/sucai_zs/images/20201027152300-6.jpg",
          },
          {
            src: "https://sucai.suoluomei.cn/sucai_zs/images/20201027152259-4.jpg",
          },
          {
            src: "https://sucai.suoluomei.cn/sucai_zs/images/20201027152259-5.jpg",
          },
          {
            src: "https://sucai.suoluomei.cn/sucai_zs/images/20201027152257-3.jpg",
          },
          {
            src: "https://sucai.suoluomei.cn/sucai_zs/images/20201027152255-2.jpg",
          },
          {
            src: "https://sucai.suoluomei.cn/sucai_zs/images/20201027152252-1.jpg",
          },
        ];
        this.page += 1;
        if (this.page == 10) {
          this.$refs.waterfall.waterfallOver();
        } else {
          this.imgsArr = this.imgsArr.concat(list);
        }
      },
      previewImg(e, {
        index,
        value
      }) {
        window.open(value.src);
      },
    },
  };
</script>

<style lang="less" scoped>
  .waterfall {
    height: 800px;
  }

  .info {
    text-align: center;
  }
</style>