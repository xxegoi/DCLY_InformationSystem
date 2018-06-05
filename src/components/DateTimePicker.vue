<template>
    <el-date-picker value-format="yyyy-MM-dd" v-model="daterange" type="daterange" 
          unlink-panels range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" 
          :picker-options="pickerOptions" align="right" @change="onChange">
        </el-date-picker>
</template>

<script>
export default {
  data() {
    return {
      daterange: [],
      pickerOptions: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            }
          }
        ]
      }
    };
  },methods: {
      onChange(daterange) {
        this.$emit('datechange',daterange)
      }
  },
};
</script>

<style scoped>
</style>