<template>
  <div class="chartBox">
    <div id="polyChart" style="width:100%,height:100%"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    this.getPolyChart();
  },
  methods: {
    getPolyChart() {
      var myChart = this.$echarts.init(document.getElementById("polyChart"));
      var option = {
        legend: {
          bottom: "0",
          data: ["vue", "react", "angular"],
          icon: "circle",
          itemWidth: 20,
          itemHeight: 20
        },
        color: ["#67C23A", "#E6A23C", "#F56C6C"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#409EFF"
            }
          }
        },
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          }
        },
        yAxis: {
          type: "value",
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          }
        },
        series: [
          {
            name: "vue",
            data: [120, 132, 101, 134, 90, 230, 210],
            type: "line",
            smooth: true
          },
          {
            name: "react",
            data: [220, 182, 191, 234, 290, 330, 310],
            type: "line",
            smooth: true
          },
          {
            name: "angular",
            data: [150, 232, 201, 154, 190, 330, 410],
            type: "line",
            smooth: true
          }
        ],
        textStyle: {
          color: "#409EFF"
        },
        dataZoom: [{ type: "inside" }]
      };
      myChart.setOption(option);
      window.onresize = () => {
        myChart.resize();
      };
    }
  }
};
</script>

<style lang="less" scoped>
.chartBox {
  width: 100%;
  height: 100vh;
}

#polyChart {
  width: 100%;
  height: 100%;
}
</style>