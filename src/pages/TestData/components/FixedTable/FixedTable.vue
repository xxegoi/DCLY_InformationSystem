<template>
  <div className="fixed-table">
    <basic-container>
      <el-table size="small"
      :data="data" v-loading="this.$store.state.TestData.loading"
      style="width: 100%"
      height="400">
      <el-table-column label="完成日期" :min-width="120" prop="FinishDate"></el-table-column>
      <el-table-column label="缸号" :min-width="120" prop="lot"></el-table-column>
      <el-table-column label="客户" prop="kf"></el-table-column>
      <el-table-column label="布种" :min-width="250" prop="BN"></el-table-column>
      <el-table-column label="颜色" :min-width="150" prop="CN"></el-table-column>
      <el-table-column label="顶破力" prop="bur"></el-table-column>
      <el-table-column label="成品直缩" prop="tfl"></el-table-column>
      <el-table-column label="成品横缩" prop="tfw"></el-table-column>
      <el-table-column label="成品扭度" prop="fn"></el-table-column>
      <el-table-column label="成品幅宽" :min-width="150" prop="l"></el-table-column>
      <el-table-column label="成品克重" :min-width="150" prop="g"></el-table-column>
      <el-table-column label="要求幅宽" :min-width="150" prop="pl"></el-table-column>
      <el-table-column label="要求克重" :min-width="150" prop="pg"></el-table-column>
      <el-table-column label="备注" prop="sm"></el-table-column>
      <el-table-column label="测试编码" :min-width="150" prop="Tno"></el-table-column>
      <el-table-column label="要求直缩" prop="fl"></el-table-column>
      <el-table-column label="要求横缩" prop="fw"></el-table-column>
      <el-table-column label="要求扭度" prop="n"></el-table-column>
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
