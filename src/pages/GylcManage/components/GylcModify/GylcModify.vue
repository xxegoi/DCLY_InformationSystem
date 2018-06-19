<template>
    <el-row :gutter="5">
        <el-col :span="8" id="wps">
            <el-input size="small" v-model="gxName" icon="el-icon-search" placeholder="输入工序名过滤" @change="GXFilter"></el-input>
              <el-row id="wps">
                <!-- <draggable :list="wps" :name="'flip-list'" :duration="100" :options="{group:{name:'wf',pull:'clone',revertClone: true},sort:false}">
                    <div v-for="item in wps" :key="item.FID">
                      <span>{{item.FName}}</span></div>
                </draggable> -->
                </el-row>
        </el-col>
        <el-col :span="14"></el-col>
    </el-row>
    
</template>

<script>


export default {
  name: "gylcModify",
  components: {  },
  props: {
    wps: {
      type: Array,
      required: true
    },
    workflow: {
      type: Array,
      required: true
    },
    activeIndex: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      gxName: "",
      wp:[]
    };
  },
  methods: {
    GXFilter(valeu) {
      if (this.gxName == "") {
        this.wp = this.wps.slice(0);
      } else {
        var filter = [];
        var arr = this.wp.slice(0);
        for (var i = 0; i < arr.length; i++) {
          var item = arr[i];
          if (item.FName.indexOf(this.gxName) >= 0) {
            filter.push(item);
          }
        }
        this.wp = filter;
      }
    }
  }
};
</script>

<style scoped>
#wps {
  background-color: #999;
}
</style>