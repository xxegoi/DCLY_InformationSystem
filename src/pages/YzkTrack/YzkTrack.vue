<template>
  <div className="yzk-track-page">
        <BasicForm v-on:Query="onQuery"/>
        <BasicTable />
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
import BasicTable from "./components/BasicTable";

export default {
  name: "YzkTrack",
  components: {
    BasicForm,
    BasicTable
  },
  data() {
    return {
      pageSize: 20,
      currentPage: 1,
      totalNum: 0
    };
  },
  methods: {
    onQuery() {
      var data = this.$qs.stringify({
        begindate: this.$store.state.YzkTrack.begindate,
        enddate: this.$store.state.YzkTrack.enddate,
        page: this.currentPage,
        pagesize: this.pageSize,
        fgh: this.$store.state.YzkTrack.fgh,
        orgname: this.$store.state.YzkTrack.org
      });
      this.$store.commit("Yzktrack_updateLoading",true);
      this.$axios
        .post("/api/Yzk/YzkTrack", data)
        .then(res => {
          this.$store.commit("Yzktrack_updatedataList", res.data.Data.dataList);
          this.$store.commit("Yzktrack_updateLoading",false);
          this.totalNum=res.data.Data.total;
        })
        .catch(res => {
          console.log(res);
          this.$store.commit('Yzktrack_updateLoading',false)
        });
    },
    sizeChange(size) {
      this.pageSize=size;
      this.onQuery();
    },
    currentChange(page) {
      this.currentPage=page;
      this.onQuery();
    }
  }
};
</script>
