<template>
  <div class="box">
    <el-button type="primary" icon="el-icon-download" @click="exportEx"
      >导出表格</el-button
    >
    <el-table
      id="export2excel"
      :data="
        tableData.slice((currentPage - 1) * pagesize, currentPage * pagesize)
      "
      :default-sort="{ prop: 'date', order: 'descending' }"
      border
      style="width: 100%"
      stripe
      highlight-current-row
    >
      <el-table-column label="序号">
        <template slot-scope="scope">{{ scope.$index + 1 }}</template>
      </el-table-column>
      <el-table-column prop="date" label="日期"></el-table-column>
      <el-table-column prop="name" label="姓名"></el-table-column>
      <el-table-column prop="province" label="省份"></el-table-column>
      <el-table-column prop="city" label="市区"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
      <el-table-column prop="zip" label="邮编"></el-table-column>
      <el-table-column fixed="right" label="操作">
        <template slot-scope="scope">
          <el-button
            type="text"
            size="small"
            @click.native.prevent="deleteRow(scope.$index)"
            >移除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[10, 20, 50, 100]"
      :page-size="pagesize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="tableData.length"
    ></el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [],
      currentPage: 1,
      pagesize: 10,
    };
  },
  mounted() {
    this.moreData();
  },
  methods: {
    moreData() {
      var list = [];
      for (let i = 0; i < 50; i++) {
        list.push({
          date: "2016-05-02",
          name: "王小虎" + i,
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 2003331231231451241,
        });
      }
      this.tableData = list;
    },

    deleteRow(index) {
      this.$confirm("确认是否删除该信息?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(() => {
        this.tableData.splice(index, 1);
      });
    },

    handleSizeChange: function (size) {
      this.pagesize = size;
    },
    handleCurrentChange: function (currentPage) {
      this.currentPage = currentPage;
    },

    // 导出表格
    exportEx() {
      let str = `日期,姓名,省份,市区,地址,邮编\n`;
      var jsonData = this.tableData;
      //增加\t为了不让表格显示科学计数法或者其他格式
      for (let i in jsonData) {
        for (let j in jsonData[i]) {
          str += `${jsonData[i][j] + "\t"},`;
        }
        str += "\n";
      }
      let uri = "data:text/csv;charset=utf-8,\ufeff" + encodeURIComponent(str);
      let link = document.createElement("a");
      link.href = uri;
      link.download = "表格.xls";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    },
  },
};
</script>
<style lang="less" scoped>
.box {
  padding: 30px;
  box-sizing: border-box;
}
</style>