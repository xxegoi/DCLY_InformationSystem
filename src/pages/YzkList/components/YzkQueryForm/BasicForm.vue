<template>
  <div className="basic-form">
    <basic-container>
      <el-form size="small" inline :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item >
          <el-date-picker v-model="ruleForm.daterange" value-format="yyyy-MM-dd" @change="onChangevalue" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" >
          </el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-input v-model="ruleForm.fgh" @change="onChangevalue" placeholder="缸号"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="ruleForm.billNo" @change="onChangevalue" placeholder="单据编号"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="ruleForm.orderNo" @change="onChangevalue" placeholder="订单号"></el-input>
        </el-form-item>
          <el-form-item>
            <Customer v-model="ruleForm.cstCode" @change="onChangevalue"/>
          </el-form-item>
          <el-form-item >
            <el-input v-model="ruleForm.customerNo" @change="onChangevalue" placeholder="客户单号"></el-input>
          </el-form-item>
          <el-form-item >
            <el-input v-model="ruleForm.fundNo" @change="onChangevalue" placeholder="款号"></el-input>
          </el-form-item>
                    
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">查询</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </basic-container>
  </div>
</template>

<script>
import BasicContainer from "@vue-materials/basic-container";
import Customer from "@/pages/YzkList/components/Customer.vue";

export default {
  components: { BasicContainer, Customer },
  name: "YzkQuery",

  data() {
    return {
      ruleForm: {
        daterange: [],
        fgh: "",
        billNo: "",
        orderNo: "",
        cstCode: "",
        customerNo: "",
        fundNo: ""
      },
      rules: {}
    }

  },props:{
    value:{
      default:{}
    }
  },
  methods: {
    onChangevalue(){
      this.$emit('input',this.ruleForm);
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$emit("submit",this.ruleForm);
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  },
  
};
</script>

<style>
.basic-form {
}
</style>
