<template>
    <el-table :data="data" size="small" max-height="300">
        <el-table-column v-for="col in headers"
            :prop="col.id"
            :key="col.id"
            :label="col.label"
            :width="col.width" 
            :formatter="col.formatter" 
            :align="col.align">
        </el-table-column>
    </el-table>
    
</template>

<script>
import rgcrHeaders from "./rgcrHeaders";
export default {
  name: "rgcrTable",
  data() {
    return {
      headers: rgcrHeaders
    };
  },
  props: {
    data: {
      type: Array,
      required: true
    }
  },
  
};
</script>

<style scoped>
</style>