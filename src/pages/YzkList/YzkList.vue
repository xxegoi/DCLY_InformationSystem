<template>
  <div className="yzk-list-page">
        <YzkQueryForm v-model="ruleForm" @submit="onSubmit"/>
        <YzkTable @showDetail="onShowDetail"/>
        <el-pagination
          @size-change="sizeChange"
          @current-change="currentChange"
          :current-page="page"
          :page-sizes="[10, 50, 100]"
          :page-size="size"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total" background>
        </el-pagination>
        <el-dialog
          title="运转卡详细信息"
          :visible.sync="yzkDetailVisiable"
          fullscreen 
          center
          >
          <YzkDetail :yzk="yzk"/>
          <span slot="footer">
            <el-button @click="yzkDetailVisiable= false">关 闭</el-button>
          </span>
        </el-dialog>
        
      </div>
</template>

<script>
import YzkQueryForm from "./components/YzkQueryForm";
import YzkTable from "./components/YzkTable";
import YzkDetail from './components/YzkDetail';


export default {
  name: "YzkList",
  components: {
    YzkQueryForm,
    YzkTable,
    YzkDetail
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
      size: 10,
      total: 0,
      details:{},
      yzkDetailVisiable:false,
      yzk:{}
    };
  },
  methods: {
    onSubmit(ruleform) {
      this.ruleForm=ruleform;
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
      this.onSubmit(this.ruleForm);
    },
    currentChange(page) {
      this.page = page;
      this.onSubmit(this.ruleForm);
    },
    onShowDetail(yzk){
      this.yzk=yzk;
      this.yzkDetailVisiable=true;
    }
  }
};
</script>
