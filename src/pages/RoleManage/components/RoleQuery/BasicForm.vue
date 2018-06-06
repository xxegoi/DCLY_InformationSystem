<template>
  <div className="basic-form">
    <basic-container>
      <el-form :model="ruleForm" inline size="small" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item prop="name">
          <el-input v-model="ruleForm.name" placeholder="角色名称"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" native-type="submit" @click="submitForm('ruleForm')">查询</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </basic-container>
  </div>
</template>

<script>
import BasicContainer from '@vue-materials/basic-container'

export default {
  components: { BasicContainer },
  name: 'BasicForm',

  data() {
    return {
      ruleForm: {
        name:''
      },
      rules: {
        name:[
          {required:true,message:'角色名称不能为空',trigger:'blur'}
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}

</script>

<style>
  .basic-form {

  }
</style>
