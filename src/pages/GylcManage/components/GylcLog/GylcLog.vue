<template>
    <el-table :data="data" size="small">
        <el-table-column v-for="col in gylcHeaders"
            :prop="col.id"
            :key="col.id"
            :label="col.label"
            :width="col.width"
            :align="col.align">
        </el-table-column>
    </el-table>
    
</template>

<script>
import gylcHeaders from './logHeaders';
    export default {
        name:"GylcModifyLogTable",
        data() {
            return {
                gylcHeaders: gylcHeaders
            }
        },
        props: {
            data: {
                type: Array,
                required:true
            },
        },
    }
</script>

<style scoped>

</style>