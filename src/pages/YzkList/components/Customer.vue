<template>
    <el-autocomplete placeholder="客户名称" v-model="customer" 
    :fetch-suggestions="querySearchAsync" @change="handleSelect"
    @select="handleSelect" 
    :trigger-on-focus="false"></el-autocomplete>
</template>

<script>
export default {
  name: "CustomerRemote",
  data() {
    return {
      customer: ""
    };
  },
  props: {
    value: {
      default: ""
    }
  },
  methods: {
    querySearchAsync(str, cb) {
      if (str.length >= 2) {
        this.$axios({
          url: "/api/customer/getlist",
          method: "get",
          params: {
            name: str
          }
        })
          .then(res => {
            if (res.data.Status == "success") {
              var result = res.data.Data;
              console.log(result);
              cb(result);
            } else {
              this.$message.error(res.data.Data);
            }
          })
          .catch(err => {
            console.log(err);
          });
      }
    },
    handleSelect(item) {
      this.customer = item.value;
      this.$emit("input", this.customer);
      this.$emit("change");
    }
  }
};
</script>

<style scoped>
</style>