<template>
    <el-table max-height="300" :data="data">
        <el-table-column v-for="col in headers"
            :prop="col.id"
            :key="col.id"
            :label="col.label"
            :min-width="col.width">
        </el-table-column>
        <el-table-column align="center" label="是否完成">
            <template slot-scope="scope">
                <i v-if="scope.row.FCheckBox" class="el-icon-success"></i>
            </template>
        </el-table-column>
        
    </el-table>
    
</template>

<script>
import headers from "./gsHeader";

export default {
  data() {
    return {
      headers: headers
    };
  },
  props: {
    data: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped>
.el-icon-success {
  color: rgb(60, 150, 9);
  font-size: 18px;
}
</style>