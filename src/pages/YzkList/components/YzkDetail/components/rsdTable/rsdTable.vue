<template>
    <el-table max-height="300" :data="data" size="small">
        <el-table-column v-for="col in headers"
            :prop="col.id"
            :key="col.id"
            :label="col.label"
            :width="col.width"
            :formatter="col.formatter"
            :align="col.align">
        </el-table-column>
    </el-table>
    
</template>

<script>
import headers from './rsdHeaders';

    export default {
        data() {
            return {
                headers: headers
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