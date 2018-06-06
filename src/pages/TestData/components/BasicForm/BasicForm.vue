<template>
  <div className="basic-form">
    <basic-container>
      <el-form :model="ruleForm" size="small" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" :inline="true">
        <el-form-item prop="daterange">
          <el-date-picker value-format="yyyy-MM-dd" v-model="ruleForm.daterange" type="daterange" 
          unlink-panels range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" 
          :picker-options="pickerOptions" align="right">
        </el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-input v-model="ruleForm.fgh" placeholder="缸号"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')"><i class="el-icon-search"/>查询</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
          <el-button type="success" @click="exportData('ruleForm')">导出EXCEL</el-button>
        </el-form-item>
      </el-form>
    </basic-container>
  </div>
</template>

<script>
import BasicContainer from "@vue-materials/basic-container";

export default {
  components: { BasicContainer },
  name: "BasicForm",

  data() {
    return {
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
      },
      ruleForm: {
        daterange: [],
        fgh: ""
      },
      rules: {
        daterange: [
          { required: true, message: "日期不能为空", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          var data = {
            begindate: this.ruleForm.daterange
              ? this.ruleForm.daterange[0]
              : null,
            enddate: this.ruleForm.daterange
              ? this.ruleForm.daterange[1]
              : null,
            fgh: this.ruleForm.fgh
          };
          this.$emit("Query", data);
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    exportData(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          var data = {
            begindate: this.ruleForm.daterange
              ? this.ruleForm.daterange[0]
              : null,
            enddate: this.ruleForm.daterange
              ? this.ruleForm.daterange[1]
              : null,
            fgh: this.ruleForm.fgh
          };
          this.$emit("Export", data);
        }
      });
    }
  }
};
</script>

<style>
.basic-form {
}
</style>
