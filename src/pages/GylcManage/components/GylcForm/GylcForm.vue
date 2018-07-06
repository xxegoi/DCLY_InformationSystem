<template>
  <div className="basic-form">
    <basic-container>
      <el-form size="small" inline :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label>

        </el-form-item>
        <el-form-item prop="fgh">
          <el-input v-model="ruleForm.fgh" placeholder="缸号"></el-input>
        </el-form-item>
        
        <el-form-item>
          <el-button type="primary" :loading="this.$store.state.GylcManage.loading" @click="submitForm('ruleForm')">查询</el-button>
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
  name: "GylcForm",

  data() {
    return {
      ruleForm: {
        fgh: ''
      },
      rules: {
        fgh: [{required:true,message:'缸号不能为空',trigger:'blur'}]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$emit("submit", this.ruleForm.fgh);
        } else {
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style>
.basic-form {
}
</style>
