<template>
  <div className="basic-table">
    <basic-container>
      <el-table height="380"
        :data="data"
        style="width: 100%" size="small" >
        <el-table-column  v-for="col in headers" :key="col.id"
          :prop="col.id"
          :label="col.label"
          width="150"
          :align="col.align">
        </el-table-column>
        
        <el-table-column  label="工艺流程" align="center">
          <template slot-scope="scope">
            <el-steps align-center>
              <el-step v-for="item in scope.row.WorkFlow"
                :key="item.FIndex"
                :title="item.FName"
                :status="item.State"
                >
              </el-step>
            </el-steps>
          </template>
        </el-table-column>
        
        <el-table-column 
          label="操作"
          width="200" align="center">
          <template slot-scope="scope" >
            <el-button type="primary" size="small" @click="showModify(scope.row.WorkFlow)">修改</el-button>
            <el-button type="info" size="small">修改日志</el-button>
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
    }
  },
  methods: {
    showModify(WorkFlow) {
      var activeIndex = 0;
      WorkFlow.forEach(e => {
        if (e.State !== "wait") {
          activeIndex = activeIndex < e.FIndex ? e.FIndex : activeIndex;
        }
      });
      this.$emit("showModify", activeIndex, WorkFlow);
    }
  }
};
</script>

<style>
.basic-table {
}
</style>
