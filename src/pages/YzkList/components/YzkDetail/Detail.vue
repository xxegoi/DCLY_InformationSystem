<template>
<div>
    <el-tabs v-model="activeName"
        type="border-card">
        <el-tab-pane label="运转卡信息">
            <YzkInfo :yzk="yzk.header"/>
        </el-tab-pane>
        <el-tab-pane label="订单信息">
            <Ddyq :yzk="yzk.header" />
        </el-tab-pane>
        <el-tab-pane label="工艺要求">
            <gyInfo :yzk="yzk.header"/>
        </el-tab-pane>
        <el-tab-pane label="定型工艺">
            <dxgyTable :data="yzk.detail.dxgy"/>
        </el-tab-pane>
        <el-tab-pane label="染色单">
            <rsdTable :data="yzk.detail.rsd"/>
        </el-tab-pane>
        <el-tab-pane label="领料单">
            <lldTable :data="yzk.detail.lld"/>
        </el-tab-pane>
        <el-tab-pane label="染缸出入登记">
          <rgcrTable :data="yzk.detail.rgcr"/>
        </el-tab-pane>
    </el-tabs>
    <el-tabs v-model="activeName2"
      type="border-card">
      <el-tab-pane label="细码" >
        <xmTable  :data="yzk.detail.xm"/>
      </el-tab-pane>
      
      <el-tab-pane label="工序汇报">
        <gsTable :data="yzk.detail.gy" />
      </el-tab-pane>
      
    </el-tabs>
    
</div>
    
    
</template>

<script>
import YzkInfo from "./components/YzkInfo";
import xmTable from "./components/xmTable";
import gsTable from "./components/gsTable";
import Ddyq from "./components/ddInfo";
import gyInfo from "./components/gyInfo";
import dxgyTable from "./components/dxgyTable";
import rsdTable from "./components/rsdTable";
import rgcrTable from "./components/rgcrTable";
import lldTable from "./components/lldTable";

export default {
  components: {
    YzkInfo,
    xmTable,
    gsTable,
    Ddyq,
    gyInfo,
    dxgyTable,
    rsdTable,
    rgcrTable,
    lldTable
  },
  data() {
    return {
      activeName: "",
      activeName2: ""
    };
  },
  props: {
    yzk: {
      required: true,
      type: Object
    }
  }
};
</script>

<style scoped>
.el-tabs {
  margin-bottom: 10px;
}
.el-tab-pane {
  height: 300px;
  overflow: auto;
}
</style>