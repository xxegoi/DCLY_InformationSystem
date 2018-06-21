<template>
  <div className="fixed-table">
    <basic-container>
      <el-row id="print">
        <el-col :span="2"  >
          <el-button type="primary" size="small" @click="showPrint">
            <i class="el-icon-view"></i>
            打印预览
          </el-button>
        </el-col>
        
      </el-row>
      
      <el-table size="small" v-loading="this.$store.state.YzkList.loading"
      :data="this.$store.state.YzkList.dataList"
      style="width: 100%"
      height="385"
      ref="multipleTable" 
      @selection-change="handleSelectionChange">

      <el-table-column type="selection"></el-table-column>

      <el-table-column v-for="column in headers" v-bind:key="column.id"
      :prop="column.id"
      :label="column.label"
      :align="column.align"
      :show-overflow-tooltip="column.showOverFlowToolTip" 
      :formatter="column.formatter" 
      :width="column.width" 
      :fixed="column.fixed"
      >
      </el-table-column>
      
      <el-table-column
        label="操作" fixed="right" align="center">
        <template slot-scope="scope">
          <el-button  size="small" type="text" :loading="loading" @click="showDetail(scope.row)">详细信息</el-button>
        </template>
      </el-table-column>
      

      </el-table>
    </basic-container>
  </div>
</template>

<script>
import BasicContainer from '@vue-materials/basic-container'
import header from './tableHeader';

  export default {
  components: { BasicContainer },
  name: 'YzkTable',

  data() {
    return {
      headers:header,
      loading:false,
      multipleSelection: [],//20180620多行选择存放处
    }
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    showDetail(row){
      this.loading=true;
      this.$axios({
        url:'/api/Yzk/GetEntries',
        params:{
          fgh:row.gh
        },
        method:'get'
      }).then((result) => {
        if(result.data.Status=='success'){
          var yzk={header:row,detail:result.data.Data}
          this.loading=false;
          this.$emit("showDetail",yzk);
          return;
        }
        else{
          this.loading=false;
          this.$message.error(result.data.Data);
          return;
        }
      }).catch((err) => {
        console.log(err);
      });
    },
    //20180620
    handleSelectionChange(val) {
        this.multipleSelection = val;
    },
    //20180620
    showPrint()
    {
      if(this.multipleSelection.length==0)
      {
        this.$message.error("请先选择打印内容！");
      }
      else{
        this.$emit("showPrint",this.multipleSelection);
      }
    },
  }
}
</script>

<style>
  .fixed-table {

  }

  #print{
    margin-bottom: 5px;
  }
</style>
