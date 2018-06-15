<template>
    <el-table :data="data" size="small" border :span-method="spanMethod" max-height="300">
        <el-table-column v-for="col in headers"
            :prop="col.id"
            :key="col.id"
            :label="col.label"
            :width="col.width"
            :align="col.align" 
            :formatter="col.formatter">
        </el-table-column>
    </el-table>
    
</template>

<script>
import lldHeaders from "./lldHeaders";

export default {
  name: "lldTable",
  data() {
    return {
      headers: lldHeaders,
      currentBillNo: ""
    };
  },
  props: {
    data: {
      type: Array,
      required: true
    }
  },
  methods: {
    spanMethod({ row, column, rowIndex, columnIndex }) {
      var result = { rowspan: 1, colspan: 1 }; //不合并

      var billNo = row.billNo; //取当前行单据号

      var spanObj = this.SpanObject[billNo]; //取此单据的合并数据

      //只合并前面5个字段
      if (columnIndex <= 4) {
        //判断当前行是否单据第一行，如果是合并行，否则rowspan设为0
        if (rowIndex === spanObj.startIndex) {
          result.rowspan = spanObj.rowspan;
        } else {
          result.rowspan = 0;
        }
      }

      return result;
    }
  },
  computed: {
    SpanObject: {
      ///合并数据
      get() {
        var result = {};
        var billno = "";
        var rowspan = 0;
        var startIndex = 0;
        //遍历表格数据，根据单号生成合并数据
        for (let i = 0; i < this.data.length; i++) {
          var bill = this.data[i].billNo;

          //判断结果集中是否已存在该单据的合并数据，如果存在表明当前行与上一行是相同单据，rowspan加1
          //否则新建合并数据对象，rowspan值为1，起始行为i
          var obj = result[this.data[i].billNo];
          if (!obj) {
            result[bill] = { startIndex: i, rowspan: 1 };
          } else {
            result[bill].rowspan++;
          }
        }

        return result;
      }
    }
  }
};
</script>

<style scoped>
</style>