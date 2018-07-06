<template>
  <div className="basic-form">
    <basic-container>
      <el-form inline :model="ruleForm" :size="controllerSize" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item >
          <datetimepicker  v-on:datechange="onDateChange"/>
        </el-form-item>
        <el-form-item>
          <el-input @change="onFghChange" placeholder="缸号" clearable></el-input>
        </el-form-item>
        <el-form-item>
          <el-input @change="onOrgChange" placeholder="客户名称" clearable></el-input>
        </el-form-item>
        
        <el-form-item>
          <el-button type="primary" :loading="this.$store.state.YzkTrack.loading"  @click="submitForm('ruleForm')" >
            <i class="el-icon-search"></i>
            查询</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </basic-container>
  </div>
</template>
<script>
import BasicContainer from '@vue-materials/basic-container'
import datetimepicker from '@/components/DateTimePicker.vue';

export default {
  components: { BasicContainer,datetimepicker },
  name: 'BasicForm',

  data() {
    return {
      ruleForm: {
        
      },
      rules: {
        
      },
      controllerSize:'small'
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$emit("Query");
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    onDateChange(data){
      this.$store.commit('Yzktrack_updateDate',data);
    },
    onFghChange(fgh){
      this.$store.commit('Yzktrack_updateFgh',fgh);
    },
    onOrgChange(org){
      this.$store.commit('Yzktrack_updateOrg',org);
    }
  }
}

</script>

<style>
  .basic-form {

  }
</style>
