<template>
    <el-row :gutter="5">
        <el-col :span="8" >
            <el-input size="small" icon="el-icon-search" placeholder="输入工序名过滤" @change="GXFilter"></el-input>
              <el-row id="wps">
                <draggable :list="wp" :name="'flip-list'" :duration="100" :options="{group:{name:'wf',pull:'clone',revertClone: true},sort:false}">
                    <div v-for="item in wp" :key="item.FID" class="wpsItem">
                      <span>{{item.FName}}</span></div>
                </draggable>
                </el-row>
        </el-col>
        <el-col :span="16" >
          <el-input-number id="placholder" :min="1" :max="10" label=""></el-input-number>
          <el-row id="workflow">
          <draggable @add="onAdd" :name="'flip-list'" :duration="100" :move="onMove" :list="wf" :options="{group:'wf',pull:'clone'}">
                        <div style="width:350px"  v-for="(w,index) in wf" v-bind:key="w.FID">
                          
                          <div class="wfItem" >
                             <i v-if="index<activeIndex" class="el-icon-success success"></i>
                             <i v-else-if="index==activeIndex" class="el-icon-info process"></i>
                             <span>{{index+1}}</span>
                             <span>{{w.FName}}</span>
                          </div>
                                  <el-button v-if="index>activeIndex" size="mini" class="deleteBtn" type="danger" @click="remove(index)">
                                  删除
                                </el-button>
                                
                         </div>
                    </draggable>
                    </el-row>
        </el-col>
    </el-row>
    
</template>

<script>
import draggable from "vuedraggable";

export default {
  name: "gylcModify",
  components: { draggable },
  props: {
    wps: {
      type: Array,
      required: true
    },
    wf: {
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
      wp: this.$props.wps.slice(0),
    };
  },
  methods: {
    GXFilter(value) {
      if (value == "") {
        this.wp = this.$props.wps.slice(0);
      } else {
        var filter = [];
        var arr = this.wp.slice(0);
        for (var i = 0; i < arr.length; i++) {
          var item = arr[i];
          if (item.FName.indexOf(value) >= 0) {
            filter.push(item);
          }
        }
        console.log(filter);
        this.wp = filter;
      }
    },
    onAdd(evt) {
      var newIndex = evt.newIndex;
      var oldIndex = evt.oldIndex;
      if (newIndex <= this.activeIndex) {
        this.wf.splice(newIndex, 1);
      }
    },
    remove(index) {
      this.wf.splice(index, 1);
    },
    onMove({ relatedContext, draggedContext }) {
      const relatedIndex = relatedContext.index;
      const draggedIndex = draggedContext.index;
      var result =
        relatedIndex > this.activeIndex && draggedIndex > this.activeIndex;
      return result;
    }
  }
};
</script>

<style scoped>
#wps {
  margin-top: 5px;
  border: 1px solid #efefef;
  height: 500px;
  overflow-y: auto;
}
.wpsItem {
  padding: 10px;
  border-bottom: 1px solid #efefef;
  font-size: 1rem;
  text-align: center;
}
.wfItem {
  margin-left: 20%;
  text-align: left;
  padding: 10px 0px 10px 30px;
  border: 1px solid #efefef;
  font-size: 1rem;
  width: 220px;
  background-color: #fff;
  display: inline-block;
}
#placholder {
  visibility: hidden;
}
#workflow {
  height: 500px;
  overflow-y: auto;
}
.success {
  color: rgb(75, 209, 86);
}
.deleteBtn {
  float: right;
  margin-top: 7px;
}
.process {
  color: rgb(96, 172, 235);
}
.workflowList-enter,
.workflowList-leave-to {
  padding: 0px;
  margin: 0px;
}
.workflowList-enter-active {
  transition: all .5s;
}

.workflowList-leave-active {
  transition: all .5s;
}
</style>