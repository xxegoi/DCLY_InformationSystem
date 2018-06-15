<template>
    <el-table max-height="300" size="small" :data="data">
        <el-table-column v-for="col in headers"
            :prop="col.id"
            :key="col.id"
            :label="col.label"
      >
        </el-table-column>
    </el-table>
    
</template>

<script>
import header from "./xmHeader";

export default {
  name: "xmTable",
  data() {
    return {
      headers: header
    };
  },
  props: {
    data: {
      required: true,
      type: Array
    }
  }
};
</script>

<style scoped>
</style>