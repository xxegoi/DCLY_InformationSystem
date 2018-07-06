<template>
    <el-row :gutter="5">
        <el-col :span="8" >
            <el-input size="small" icon="el-icon-search" v-model="gxName" placeholder="输入工序名过滤" ></el-input>
              <el-row >
                <draggable :list="wpList" :name="'flip-list'" :duration="100" :options="{group:{name:'wf',pull:'clone',put:false,revertClone: true},sort:false}">
                    <transition-group name="wpsList" id="wps" tag="ul">
                      <li  v-for="(item,index) in wpList" :key="index" class="wpsItem">
                      <span>{{item.FName}}</span></li>
                    </transition-group>
                </draggable>
                </el-row>
        </el-col>
        <el-col :span="16" >
          <el-input-number id="placholder" :min="1" :max="10" label=""></el-input-number>
          <el-row id="workflow">
          <draggable @add="onAdd" :name="'flip-list'" :duration="100" :move="onMove" @start="drag=true" @end="drag=false" :list="wf" :options="{group:'wf',pull:'clone'}">
              <transition-group :name="!drag?'workflowList':null" :css="true">
                        <li class="wfItem"  v-for="(w,index) in wf" :key="w.WPID">
                          <div class="wfItemHead" >
                             <i v-if="index<activeIndex" class="el-icon-success success"></i>
                             <i v-else-if="index==activeIndex" class="el-icon-info process"></i>
                             <span>{{w.FName}}</span>
                             
                          </div>
                            <el-button v-if="index>activeIndex"  size="mini" round class="deleteBtn" type="danger" @click="remove(index)">
                              删除
                            </el-button>
                         </li>
              </transition-group>
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
  computed: {
    wpList() {
      var vm = this;
      return this.wp.filter(function(item) {
        return item.FName.indexOf(vm.gxName) !== -1;
      });
    }
  },
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
      drag: false
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
li {
  list-style-type: none;
}
#wps {
  margin-top: 5px;
  border: 1px solid #efefef;
  height: 500px;
  padding-left: 0;
  overflow-y:auto;
}
.wpsItem {
  padding: 10px;
  border-bottom: 1px solid #efefef;
  font-size: 1rem;
  text-align: center;
  transition: all 1s;
  transform: translateX(20px);
}
.wfItemHead {
  margin-left: 20%;
  text-align: left;
  padding: 10px 0px 10px 30px;
  border: 1px solid #efefef;
  font-size: 1rem;
  width: 180px;
  display: inline-block;
}
.wfItem {
  background-color: #fff;
  width: 300px;
  margin-bottom: 2px;
  transition-property: all;
  transition-duration: 800ms;
  transform: translate3d(0px, 0px, 0px);
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
  margin-top: 5px;
}
.process {
  color: rgb(96, 172, 235);
}
.wpsList-enter,
.wpsList-leave-to{
  opacity: 0;
  transition: all 1s;
}
.wpsList-leave-active{
  transition: all 1s ease;
}

.workflowList-enter,
.workflowList-leave-to {
  opacity: 0;
  transform: translateX(30px);
  transition: all 0.8s;
}

.workflowList-leave-active {
  position: absolute;
  transition: all 1s;
}
</style>