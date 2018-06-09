<template>
  <div className="yzk-list-page">
        <YzkQueryForm v-model="ruleForm" @submit="onSubmit"/>
        <YzkTable />
        <el-pagination
          @size-change="sizeChange"
          @current-change="currentChange"
          :current-page="page"
          :page-sizes="[20, 40, 80, 100]"
          :page-size="size"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total" background>
        </el-pagination>
        
      </div>
</template>

<script>
import YzkQueryForm from "./components/YzkQueryForm";
import YzkTable from "./components/YzkTable";

export default {
  name: "YzkList",
  components: {
    YzkQueryForm,
    YzkTable
  },
  data() {
    return {
      ruleForm: {
        daterange: [],
        fgh: "",
        billNo: "",
        orderNo: "",
        cstCode: "",
        customerNo: "",
        fundNo: ""
      },
      page: 1,
      size: 20,
      total: 0
    };
  },
  methods: {
    onSubmit() {
      var data = this.$qs.stringify({
        begindate: this.ruleForm.daterange[0],
        enddate:this.ruleForm.daterange[1],
        billNo: this.ruleForm.billNo,
        fgh: this.ruleForm.fgh,
        orderNo: this.ruleForm.orderNo,
        cstCode: this.ruleForm.cstCode,
        customerNo: this.ruleForm.customerNo,
        fundNo: this.ruleForm.fundNo,
        page: this.page,
        size: this.size
      });
      this.$store.commit("YzkList_updateLoading", true);

      this.$axios({
        url: "/api/Yzk/Getlist",
        data: data,
        method: "post"
      })
        .then(result => {
          if (result.data.Status == "success") {
            this.$store.commit(
              "YzkList_updatedataList",
              result.data.Data.tableData
            );
            this.total = result.data.Data.total;
          } else {
            this.$message.error(result.data.Data);
          }
          this.$store.commit("YzkList_updateLoading", false);
        })
        .catch(err => {
          console.log(err);
          this.$store.commit("YzkList_updateLoading", false);
        });
    },
    sizeChange(size) {
      this.size = size;
      this.onSubmit();
    },
    currentChange(page) {
      this.page = page;
      this.onSubmit();
    }
  }
};
</script>
