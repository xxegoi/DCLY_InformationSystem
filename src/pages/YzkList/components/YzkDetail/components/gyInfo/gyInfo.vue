<template>
    <el-form :model="yzk" :disabled="true" inline ref="yzk" label-width="110px" size="small">
        <el-form-item label="工艺流程">
            <el-input v-model="yzk.workFlow"></el-input>
        </el-form-item>
        <el-form-item label="对色光源">
            <el-input v-model="yzk.fdd" placeholder=""></el-input>
        </el-form-item>
        <el-form-item label="色对">
            <el-input v-model="yzk.fsd" placeholder=""></el-input>
        </el-form-item>
        <el-form-item label="牢度要求">
            <el-input v-model="yzk.fsl" placeholder=""></el-input>
        </el-form-item>
        <el-form-item label="手感要求">
            <el-input v-model="yzk.fsg" placeholder=""></el-input>
        </el-form-item>
        <el-form-item label="成品要求">
            <el-input v-model="yzk.dxfk" placeholder=""></el-input>
        </el-form-item>
        <el-form-item label="成品克重">
            <el-input v-model="yzk.fkz" placeholder=""></el-input>
        </el-form-item>
        <el-form-item label="浆边">
            <el-input v-model="yzk.fjb" placeholder=""></el-input>
        </el-form-item>
        <el-form-item label="切边">
            <el-input v-model="yzk.fqb" placeholder=""></el-input>
        </el-form-item>
        <el-form-item label="加树脂">
            <el-input v-model="yzk.fjsz" placeholder=""></el-input>
        </el-form-item>
        <el-form-item label="加软油">
            <el-input v-model="yzk.fjry" placeholder=""></el-input>
        </el-form-item>
        <el-form-item label="横(%)">
            <el-input v-model="yzk.facross" placeholder=""></el-input>
        </el-form-item>
        <el-form-item label="直(%)">
            <el-input v-model="yzk.fstraight" placeholder=""></el-input>
        </el-form-item>
        <el-form-item label="扭度(%)">
            <el-input v-model="yzk.ftweak" placeholder=""></el-input>
        </el-form-item>
        <el-form-item label="纸筒">
            <el-input v-model="yzk.fzt" placeholder=""></el-input>
        </el-form-item>
        <el-form-item label="加重">
            <el-input v-model="yzk.fjz" placeholder=""></el-input>
        </el-form-item>
        <el-form-item label="胶带">
            <el-input v-model="yzk.fjd" placeholder=""></el-input>
        </el-form-item>
                                                                                                                                

    </el-form>
    
</template>

<script>
    export default {
        props: {
            yzk: {
                type: Object,
                required:true
            },
        },
    }
</script>

<style scoped>

</style>