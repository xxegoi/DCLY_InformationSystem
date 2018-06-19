<template>
  <div className="basic-table">
    <basic-container>
      <el-table height="380"
        :data="data" v-loading="this.$store.state.GylcManage.loading"
        style="width: 100%" size="small" >
        <el-table-column  v-for="col in headers" :key="col.id"
          :prop="col.id"
          :label="col.label"
          width="150"
          :align="col.align">
        </el-table-column>
        
        <el-table-column  label="工艺流程" align="center">
          <template slot-scope="scope">
            <el-steps align-center :active="activeIndex" finish-status="success">
              <el-step v-for="item in scope.row.workflow" 
                :key="item.FID"
                :title="item.FName"
                >
              </el-step>
              
            </el-steps>
          </template>
        </el-table-column>
        
        <el-table-column 
          label="操作"
          width="200" align="center">
          <template slot-scope="scope" >
            <el-button type="primary" size="small" @click="showModify(scope.row.workflow)">修改</el-button>
            <el-button type="info" size="small" @click="showLog(scope.row.fgh)">修改日志</el-button>
          </template>
        </el-table-column>
        

      </el-table>
    </basic-container>
  </div>
</template>

<script>
import BasicContainer from "@vue-materials/basic-container";
import gylcHeaders from "./gylcHeaders";

export default {
  components: { BasicContainer },
  name: "BasicTable",

  data() {
    return {
      headers: gylcHeaders
    };
  },
  props: {
    data: {
      type: Array,
      required: true
    },
    activeIndex:{
      type:Number
    }
  },
  methods: {
    showModify(WorkFlow) {
      this.$emit("showModify", WorkFlow);
    },
    showLog(fgh){
      this.$emit("showLog",fgh);
    }
  },
  
  
};
</script>

<style>
.basic-table {
}
</style>
