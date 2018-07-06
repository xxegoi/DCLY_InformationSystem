<template>
  <div className="basic-table">
    <basic-container>
      <el-table v-loading="this.$store.state.YzkTrack.loading" size="small"
        :data="this.$store.state.YzkTrack.dataList" height="445"
        style="width: 100%">
        <el-table-column fixed="left"
          prop="FGH" align="center" 
          label="缸号"
          width="120" >
        </el-table-column>
        <el-table-column
          prop="FDate" align="center" 
          label="开卡日期"
          width="180" :formatter="dateFormatter">
        </el-table-column>
        <el-table-column
          prop="ItemName" align="center" 
          label="物料名称"
          width="120">
        </el-table-column>
        <el-table-column
          prop="FQty" align="center" 
          label="计划条数"
          width="80">
        </el-table-column>
        <el-table-column
          prop="OrgName" align="center" 
          label="客户"
          width="120">
        </el-table-column>
        <el-table-column
          prop="FDeliveryDate" align="center" 
          label="交期"
          width="120" :formatter="dateFormatter">
        </el-table-column>
        <el-table-column label="工序进度" width="1200" >
          <template slot-scope="scope">
            <el-steps :active="0" >
              <el-step v-for="item in scope.row.WorkFlow"
                :key="item.FIndex"
                :title="item.FName"
                :status="item.State"
                :class="{'process':item.State==='process'}"
                
                >
                <div slot="description">
                  <div v-if="item.SendTime">
                    发送数量:{{item.FNum}}<br/>
                    发送时间:<br/>{{formatDatetime(item.SendTime)}}
                    </div>
                  <div v-if="item.JieTime">
                    接收数量:{{item.FNum}}<br/>
                    接收时间:<br/>{{formatDatetime(item.JieTime)}}
                  </div>
                </div>
              </el-step>
              
              
              
            </el-steps>
            
          </template>
        </el-table-column>
        
      </el-table>
    </basic-container>
  </div>
</template>

<script>
import BasicContainer from "@vue-materials/basic-container";

export default {
  components: { BasicContainer },
  name: "BasicTable",

  data() {
    return {
      tableData: []
    };
  },
  methods: {
    dateFormatter(row, col, value) {
      if(value)
        return new Date(value).toLocaleDateString();
    },
    formatDatetime(dt){
      if(!dt){return ""}
      var date=new Date(dt);
      var year=date.getFullYear();
      var month=date.getMonth();
      var day=date.getDay();
      var h=date.getHours();
      var m=date.getMinutes();
      return year+'-'+month+'-'+day+' '+h+':'+m;
    }
  }
};
</script>

<style>
.basic-table {
}
.process>.el-step__head>.el-step__icon,.process>.el-step__main>.el-step__title{
  border-color:rgb(51, 125, 236);
  color :rgb(51, 125, 236);
}
</style>
