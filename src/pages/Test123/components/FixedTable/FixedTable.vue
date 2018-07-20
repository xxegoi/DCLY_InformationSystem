<template>
  <div className="fixed-table">
    <basic-container>
      <el-table size="small"
      :data="data" v-loading="this.$store.state.Test123.loading"
      style="width: 100%"
      height="400">
      <el-table-column label="缸号" :min-width="120" prop="fgh"></el-table-column>
      <el-table-column label="机台" :min-width="120" prop="fmachine"></el-table-column>
      <el-table-column label="颜色" :min-width="120" prop="fcolor"></el-table-column>
      <el-table-column label="纱批" :min-width="120" prop="shapiname"></el-table-column>
      <el-table-column label="织厂" :min-width="120" prop="zhichangname"></el-table-column>
      </el-table>
    </basic-container>
  </div>
</template>

<script>
import BasicContainer from "@vue-materials/basic-container";

export default {
  components: { BasicContainer },
  name: "FixedTable",

  data() {
    return {};
  },
  methods: {},
  props: {
    data: {
      type: Array,
      required: true
    }
  }
};
</script>

<style>
.fixed-table {
}
</style>
