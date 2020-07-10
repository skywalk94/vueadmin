<template>
  <div class="box">
    <el-tabs v-model="activeName">
      <el-tab-pane label="折线图" name="1">
        <div class="chartBox">
          <div id="polyLineChart" style="width:100%,height:100%"></div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="配置管理" name="2">配置管理</el-tab-pane>
      <el-tab-pane label="角色管理" name="3">角色管理</el-tab-pane>
      <el-tab-pane label="定时任务补偿" name="4">定时任务补偿</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "1"
    };
  },
  mounted() {
    this.polyLine();
  },
  methods: {
    polyLine() {
      var myChart = this.$echarts.init(
        document.getElementById("polyLineChart")
      );
      var option = {
        legend: {
          data: ["vue", "react", "angular"]
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
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
        },
        yAxis: {
          type: "value"
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
.box {
  padding: 30px;
  box-sizing: border-box;
}
.el-tabs {
  width: 100%;
}
.chartBox {
  width: 100%;
  height: 600px;
}
#polyLineChart {
  width: 100%;
  height: 100%;
}
</style>