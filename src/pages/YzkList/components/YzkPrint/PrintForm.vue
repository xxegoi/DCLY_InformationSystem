<template>
  <div>
    <el-button type="primary" size="small" @click="printHtml">打印</el-button>
    <div id="printZone">
      <PrintItem  v-for="(item,index) in printList" v-bind:printData="item" v-bind:key="index">
      </PrintItem>
    </div>
  </div>
</template>

<script>
  import PrintItem from "./components/PrintItem";

  export default {
    components: {
      PrintItem,
    },
    methods: {
      printHtml() {
        let subOutputRankPrint = document.getElementById('printZone');
        let newContent = subOutputRankPrint.innerHTML;
        let oldContent = document.body.innerHTML;
        document.body.innerHTML = newContent;
        window.print();
        window.location.reload();
      },
    },
    props: {
      printList: {
        required: true,
        type: Array
      }
    },
  }

</script>

<style scoped>
</style>
