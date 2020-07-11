<template>
  <div class="chartBox">
    <div id="mixChart"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    this.getMixChart();
  },
  methods: {
    getMixChart() {
      var myChart = this.$echarts.init(document.getElementById("mixChart"));
      var option = {
        title: {
          text: "statistics",
          x: "20",
          top: "20",
          textStyle: {
            color: "#fff",
            fontSize: "22"
          },
          subtextStyle: {
            color: "#90979c",
            fontSize: "16"
          }
        },
        color: ["#00D2C9", "#FF9E8C", "#FCE630"],
        backgroundColor: "#344B58",
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#409EFF"
            }
          }
        },

        legend: {
          x: "5%",
          top: "10%",
          textStyle: {
            color: "#90979c"
          },
          icon: "circle",
          itemWidth: 20,
          itemHeight: 20,
          data: ["vue", "react", "angular"]
        },

        grid: {
          left: "5%",
          right: "5%",
          borderWidth: 0,
          top: 150,
          bottom: 95,
          textStyle: {
            color: "#fff"
          }
        },

        xAxis: [
          {
            type: "category",
            data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            axisLine: {
              lineStyle: {
                color: "#90979c"
              }
            },
            axisTick: {
              show: false
            }
          }
        ],

        yAxis: [
          {
            type: "value",
            splitLine: {
              show: false
            },
            axisLine: {
              lineStyle: {
                color: "#90979c"
              }
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              interval: 0
            },
            splitArea: {
              show: false
            }
          },
          {
            type: "value",
            splitLine: {
              show: false
            },
            axisLine: {
              lineStyle: {
                color: "#90979c"
              }
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              interval: 0
            },
            splitArea: {
              show: false
            }
          }
        ],

        series: [
          {
            name: "vue",
            type: "bar",
            data: [225, 108, 167, 54, 188, 300, 345],
            label: {
              normal: {
                show: true,
                color: "#90979c",
                position: "inside"
              }
            }
          },
          {
            name: "react",
            type: "bar",
            data: [366, 248, 306, 152, 402, 568, 682],
            label: {
              normal: {
                show: true,
                color: "#90979c",
                position: "inside"
              }
            }
          },
          {
            name: "angular",
            type: "line",
            yAxisIndex: 1,
            data: [1022, 905, 853, 668, 844, 1245, 1344],
            label: {
              normal: {
                show: true,
                color: "#FCE630",
                position: "top"
              }
            }
          }
        ],
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
#mixChart {
  width: 100%;
  height: 100%;
}
</style>