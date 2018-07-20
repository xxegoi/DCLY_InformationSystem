<template>
  <div className="basic-form">
    <basic-container>
      <el-form :model="ruleForm" size="small" ref="ruleForm" label-width="100px" class="demo-ruleForm" :inline="true">
        <el-form-item>
          <el-input v-model="ruleForm.fgh" placeholder="缸号"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')" :loading="this.$store.state.TestData.loading"><i class="el-icon-search"/>查询</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
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
      ruleForm: {
        fgh: "",
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          var data = {
            fgh: this.ruleForm.fgh,
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
  }
};
</script>

<style>
.basic-form {
}
</style>
