<template>
  <div className="test-data-page">
        <BasicForm v-on:Query="onQuery"/>
        <FixedTable :data="dataList"/>
        <!-- <el-pagination
          @size-change="sizeChange"
          @current-change="currentChange"
          :current-page="currentPage"
          :page-sizes="[20, 40, 80, 100]"
          :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="totalNum" background>
        </el-pagination> -->
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
      if(data.fgh == null || data.fgh == "")
      {
        this.$message.error('请输入缸号...');
        return;
      }
      this.condition = data;
      data.page = this.currentPage;
      data.size = this.pageSize;
      data = this.$qs.stringify(data);
      this.$store.commit("Test123_updateloading",true);
      this.$axios
        .post("/api/Test123/Query", data)
        .then(res => {
          this.dataList = res.data.Data.list;
          this.$store.commit("Test123_updateloading",false);
        })
        .catch(res => {
          console.log(res);
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
  name: "Test123",
  components: {
    BasicForm,
    FixedTable
  }
};
</script>
