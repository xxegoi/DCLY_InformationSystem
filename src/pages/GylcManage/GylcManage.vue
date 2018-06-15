<template>
  <div className="gylc-manage-page">
        <GylcForm @submit="onSubmit"/>
        <GylcTable :data="tableData" v-on:showModify="onshowModify"/>
      </div>
</template>

<script>
import GylcForm from "./components/GylcForm";
import GylcTable from "./components/GylcTable";

export default {
  name: "GylcManage",
  components: {
    GylcForm,
    GylcTable
  },
  data() {
    return {
      fgh: '',
      tableData:[],
      wps:[]
    };
  },
  methods: {
    onSubmit(fgh) {
      this.fgh=fgh
      this.$store.commit("GylcManage_updateLoading",true);
      this.$axios({
        url:'/api/yzk/yzktrack',
        data:this.$qs.stringify({fgh:fgh}),
        method:'post'
      }).then((result) => {
        if(result.data.Status=='success'){
          this.tableData=result.data.Data.dataList;

        }else{
          this.$message.error(result.data.Data)
        }
      }).catch((err) => {
        
      });

    },
    onshowModify(activeIndex,workflow){
      console.log(activeIndex,workflow)
    }
  }
};
</script>
