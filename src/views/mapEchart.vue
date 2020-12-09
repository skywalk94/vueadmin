<template>
  <div class="chartBox">
    <div id="mapChart" style="width:100%,height:100%"></div>
  </div>
</template>

<script>
  import Vue from "vue";
  import echarts from "echarts";
  Vue.prototype.$echarts = echarts;
  import china from "echarts/map/json/china.json";
  echarts.registerMap("china", china);
  export default {
    data() {
      return {};
    },
    mounted() {
      this.getRandom();
    },
    methods: {
      getRandom() {
        var cityData = [{
            name: "北京",
            value: this.getData()
          },
          {
            name: "天津",
            value: this.getData()
          },
          {
            name: "上海",
            value: this.getData()
          },
          {
            name: "重庆",
            value: this.getData()
          },
          {
            name: "河北",
            value: this.getData()
          },
          {
            name: "河南",
            value: this.getData()
          },
          {
            name: "云南",
            value: this.getData()
          },
          {
            name: "辽宁",
            value: this.getData()
          },
          {
            name: "黑龙江",
            value: this.getData()
          },
          {
            name: "湖南",
            value: this.getData()
          },
          {
            name: "安徽",
            value: this.getData()
          },
          {
            name: "山东",
            value: this.getData()
          },
          {
            name: "新疆",
            value: this.getData()
          },
          {
            name: "江苏",
            value: this.getData()
          },
          {
            name: "浙江",
            value: this.getData()
          },
          {
            name: "江西",
            value: this.getData()
          },
          {
            name: "湖北",
            value: this.getData()
          },
          {
            name: "广西",
            value: this.getData()
          },
          {
            name: "甘肃",
            value: this.getData()
          },
          {
            name: "山西",
            value: this.getData()
          },
          {
            name: "内蒙古",
            value: this.getData()
          },
          {
            name: "陕西",
            value: this.getData()
          },
          {
            name: "吉林",
            value: this.getData()
          },
          {
            name: "福建",
            value: this.getData()
          },
          {
            name: "贵州",
            value: this.getData()
          },
          {
            name: "广东",
            value: this.getData()
          },
          {
            name: "青海",
            value: this.getData()
          },
          {
            name: "西藏",
            value: this.getData()
          },
          {
            name: "四川",
            value: this.getData()
          },
          {
            name: "宁夏",
            value: this.getData()
          },
          {
            name: "海南",
            value: this.getData()
          },
          {
            name: "台湾",
            value: this.getData()
          },
          {
            name: "香港",
            value: this.getData()
          },
          {
            name: "澳门",
            value: this.getData()
          },
          {
            name: "南海诸岛",
            value: this.getData()
          },
        ];
        this.getMapChart(cityData);
      },
      getData() {
        return Math.ceil(Math.random() * 1000);
      },
      getMapChart(cityData) {
        var myChart = this.$echarts.init(document.getElementById("mapChart"));
        var option = {
          title: {
            text: "中国地图",
            x: "20",
            top: "20",
            textStyle: {
              color: "#fff",
              fontSize: "22",
            },
            subtextStyle: {
              color: "#90979c",
              fontSize: "16",
            },
          },
          backgroundColor: "#344B58",
          tooltip: {
            textStyle: {
              color: "#fff",
            },
          },
          visualMap: [{
            type: "piecewise",
            pieces: [{
              gt: 500
            }, {
              gt: 250,
              lte: 500
            }, {
              gte: 0,
              lte: 250
            }],
            textStyle: {
              color: "#90979c",
            },
            inRange: {
              color: ["#00D2C9", "#FF9E8C", "#FCE630"],
            },
            top: "100",
            left: "20",
          }, ],
          series: [{
            name: "value",
            type: "map",
            map: "china",
            zoom: 1.1,
            label: {
              normal: {
                show: true,
                formatter: "{b}\n{c}",
                color: "#90979c",
              },
            },
            itemStyle: {
              borderColor: "#fff",
            },
            emphasis: {
              label: {
                color: "#fff",
              },
              itemStyle: {
                areaColor: "#909399",
              },
              show: true,
            },
            data: cityData,
          }, ],
        };
        myChart.setOption(option);
        window.onresize = () => {
          myChart.resize();
        };
      },
    },
  };
</script>

<style lang="less" scoped>
  .chartBox {
    width: 100%;
    height: 100vh;
  }

  #mapChart {
    width: 100%;
    height: 100%;
  }
</style>