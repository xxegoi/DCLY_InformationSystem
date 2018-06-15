<template>
    <el-table :data="data" max-height="300" size="small">
        <el-table-column type="expand">
            <template slot-scope="scope">
                <el-table :data="[scope.row]">
                    <el-table-column v-for="excol in exHeaders"
                        :prop="excol.id"
                        :key="excol.id"
                        :label="excol.label"
                        :width="excol.width">
                    </el-table-column>
                </el-table>
            </template>
        </el-table-column>
        
        <el-table-column v-for="col in headers"
            :prop="col.id"
            :key="col.id"
            :label="col.label"
            :width="col.width">
        </el-table-column>
    </el-table>
</template>

<script>
import tableHeaders from './dxgyHeader';

    export default {
        data() {
            return {
                headers: tableHeaders.headers,
                exHeaders:tableHeaders.exHeaders
            }
        },
        props: {
            data: {
                required:true
            },
        },
    }
</script>

<style scoped>

</style>