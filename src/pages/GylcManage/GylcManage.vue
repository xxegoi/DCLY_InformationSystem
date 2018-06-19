<template>
  <div className="gylc-manage-page">
        <GylcForm @submit="onSubmit"/>
        <GylcTable :data="tableData" :activeIndex="activeIndex" v-on:showModify="onshowModify" v-on:showLog="onshowLog"/>
        <el-dialog
          title="工艺流程修改"
          :visible.sync="modifyVisiable"
          fullscreen center width="60%"
          >
          <gylc-modify :wps="wps" :wf="workflow" :activeIndex="activeIndex"/>
          <span slot="footer">
            <el-button size="small" @click="onCancelModify">取 消</el-button>
            <el-button size="small" type="primary" @click="onSave">确 定</el-button>
          </span>
        </el-dialog>
        <el-dialog
          title="修改日志" center
          :visible.sync="logVisiable"
          width="80%"
          @close="logVisiable=false">
          <GylcLog :data="log"/>
          <span slot="footer">
            <el-button size="small" @click="logVisiable = false">关闭</el-button>
          </span>
        </el-dialog>
        
      </div>
</template>

<script>
import GylcForm from "./components/GylcForm";
import GylcTable from "./components/GylcTable";
import GylcModify from "./components/GylcModify";
import GylcLog from "./components/GylcLog";

export default {
  name: "GylcManage",
  components: {
    GylcForm,
    GylcTable,
    GylcModify,
    GylcLog
  },
  data() {
    return {
      fgh: "",
      tableData: [],
      wps: [],
      activeIndex: 0,
      modifyVisiable: false,
      logVisiable: false,
      workflow: [],
      wf: [],
      log: [],
    };
  },
  methods: {
    onSubmit(fgh) {
      this.fgh = fgh;
      this.$store.commit("GylcManage_updateLoading", true);
      this.$axios({
        url: "/api/workflow/getworkflow",
        data: this.$qs.stringify({ fgh: fgh }),
        method: "post"
      })
        .then(result => {
          if (result.data.Status == "success") {
            this.activeIndex = result.data.Data.activeIndex;
            this.tableData = [result.data.Data];
            this.wps = result.data.Data.wps;
          } else {
            this.$message.error(result.data.Data);
          }
          this.$store.commit("GylcManage_updateLoading", false);
        })
        .catch(err => {
          this.$store.commit("GylcManage_updateLoading", false);
        });
    },
    onshowModify(workflow) {
      this.modifyVisiable = true;
      this.wf = workflow;
      this.workflow = workflow.slice(0);
    },
    onSave() {
      this.$confirm("确定修改工艺流程？", "保存", {
        confirmButtonText: "保存",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          console.log(this.workflow);
          this.saveWorkFlow();
        })
        .catch(error => {
          this.$message({
            type: "info",
            message: error.message
          });
        });
    },
    onCancelModify() {
      this.workflow = this.wf.slice(0);
      this.modifyVisiable = false;
    },
    saveWorkFlow() {
      var data = this.$qs.stringify({
        //POST数组时要先用JSON.stringify()加工一下
        workflow: this.workflow,
        fgh: this.fgh,
        canModifyIndex: this.activeIndex,
        oldwf: this.wf
      });

      this.$axios({
        url: "/api/WorkFlow/ModifyWorkFlow",
        method: "post",
        data: data
      })
        .then(res => {
          if (res.data.Status == "success") {
            this.$message({
              type: "success",
              message: "保存成功"
            });
            this.onSubmit(this.fgh);
          } else {
            this.$message.error(res.data.Data);
          }

          this.modifyVisiable = false;
        })
        .catch(res => {
          this.$message.error(res.data.Message);
        });
    },
    onshowLog(fgh) {
      this.$axios({
        url: "/api/workflow/getlog",
        params: { fgh: fgh },
        method: "get"
      })
        .then(res => {
          if (res.data.Status == "success") {
            this.log = res.data.Data;
            this.logVisiable = true;
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
