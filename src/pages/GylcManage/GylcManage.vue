<template>
  <div className="gylc-manage-page">
        <GylcForm @submit="onSubmit"/>
        <GylcTable :data="tableData" :activeIndex="activeIndex" v-on:showModify="onshowModify"/>
        <el-dialog
          title="工艺流程修改"
          :visible.sync="dialogVisible"
          fullscreen center width="60%"
          >
          <gylc-modify :wps="wps" :workflow="workflow" :activeIndex="activeIndex"/>
          <span slot="footer">
            <el-button size="small" @click="dialogVisible = false">取 消</el-button>
            <el-button size="small" type="primary" >确 定</el-button>
          </span>
        </el-dialog>
        
      </div>
</template>

<script>
import GylcForm from "./components/GylcForm";
import GylcTable from "./components/GylcTable";
import GylcModify from "./components/GylcModify";

export default {
  name: "GylcManage",
  components: {
    GylcForm,
    GylcTable,
    GylcModify
  },
  data() {
    return {
      fgh: '',
      tableData:[],
      wps:[],
      activeIndex:0,
      dialogVisible:false,
      workflow:[]
    };
  },
  methods: {
    onSubmit(fgh) {
      this.fgh=fgh
      this.$store.commit("GylcManage_updateLoading",true);
      this.$axios({
        url:'/api/workflow/getworkflow',
        data:this.$qs.stringify({fgh:fgh}),
        method:'post'
      }).then((result) => {
        if(result.data.Status=='success'){
          this.activeIndex=result.data.Data.activeIndex;
          this.tableData=[result.data.Data];
          this.wps=result.data.Data.wps;
        }else{
          this.$message.error(result.data.Data)
        }
      }).catch((err) => {
        
      });

    },
    onshowModify(workflow){
      this.dialogVisible=true;
      this.workflow=workflow;
    }
  }
};
</script>
