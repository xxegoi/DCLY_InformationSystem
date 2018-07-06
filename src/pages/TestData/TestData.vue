<template>
  <div className="test-data-page">
        <BasicForm v-on:Query="onQuery" v-on:Export="onExport"/>
        <FixedTable :data="dataList"/>
        <el-pagination
          @size-change="sizeChange"
          @current-change="currentChange"
          :current-page="currentPage"
          :page-sizes="[20, 40, 80, 100]"
          :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="totalNum" background>
        </el-pagination>
        
      </div>
</template>

<script>
import BasicForm from "./components/BasicForm";
import FixedTable from "./components/FixedTable";

export default {
  data() {
    return {
      currentPage: 1,
      pageSize: 20,
      totalNum: 0,
      dataList: [],
      loading: false,
      condition: {}
    };
  },
  methods: {
    onQuery(data) {
      this.condition = data;
      data.page = this.currentPage;
      data.size = this.pageSize;
      data = this.$qs.stringify(data);
      this.$store.commit("TestData_updateloading",true);
      this.$axios
        .post("/api/TestData/Query", data)
        .then(res => {
          this.dataList = res.data.Data.list;
          this.totalNum = res.data.Data.total[0];
          this.$store.commit("TestData_updateloading",false);
        })
        .catch(res => {
          console.log(res);
        });
    },
    onExport(data) {
      this.$store.commit("TestData_updateloading",true);
      this.$axios({
        url: "/api/TestData/Export",
        data: this.$qs.stringify(data),
        method: "post",
        responseType: "blob"
      }).then(res => {
        this.$store.commit("TestData_updateloading",false);
        var blob = new Blob([res.data], {
          type: "application/vnd.ms-excel;charset=utf-8"
        });
        var downloadElement = document.createElement("a");
        var href = window.URL.createObjectURL(blob); //创建下载的链接
        downloadElement.href = href;
        downloadElement.download =
          data.begindate + "至" + data.enddate + ".xls"; //下载后文件名
        document.body.appendChild(downloadElement);
        downloadElement.click(); //点击下载
        document.body.removeChild(downloadElement); //下载完成移除元素
        window.URL.revokeObjectURL(href); //释放掉blob对象
      });
    },
    sizeChange(size) {
      this.pageSize = size;
      this.onQuery(this.condition);
    },
    currentChange(page) {
      this.currentPage = page;
      this.onQuery(this.condition);
    }
  },
  name: "TestData",
  components: {
    BasicForm,
    FixedTable
  }
};
</script>
