<template>
  <div className="fixed-table">
    <basic-container>
      <el-table size="small" v-loading="this.$store.state.YzkList.loading"
      :data="this.$store.state.YzkList.dataList"
      style="width: 100%"
      height="286">

      <el-table-column
        :prop="header.customerName.id"
        :label="header.customerName.label"
        :width="header.customerName.width">
      </el-table-column>
      

      </el-table>
    </basic-container>
  </div>
</template>

<script>
import BasicContainer from '@vue-materials/basic-container'
import header from './tableHeader';

  export default {
  components: { BasicContainer },
  name: 'FixedTable',

  data() {
    return {
      header:header
    }
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  }
}
</script>

<style>
  .fixed-table {

  }
</style>
