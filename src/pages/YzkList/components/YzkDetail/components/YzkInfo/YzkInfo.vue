<template>
    
            <el-form  :model="yzk"  :disabled="true" ref="form" label-width="110px" size="small">
                <el-form-item label="单据编号">
                    <el-input v-model="yzk.billNo" ></el-input>
                </el-form-item>
                <el-form-item label="日期">
                    <el-input v-model="localDate" ></el-input>
                </el-form-item>
                <el-form-item label="制单人">
                    <el-input v-model="yzk.biller" ></el-input>
                </el-form-item>
                <el-form-item label="审核人">
                    <el-input v-model="yzk.checker" ></el-input>
                </el-form-item>
                <el-form-item label="缸号">
                    <el-input v-model="yzk.gh" ></el-input>
                </el-form-item>
                <el-form-item label="规格型号">
                    <el-input v-model="yzk.itemModel"  type="textarea"></el-input>
                </el-form-item>
                <el-form-item label="重量">
                    <el-input v-model="yzk.weight" ></el-input>
                </el-form-item>
                <el-form-item label="原缸总胚重" >
                    <el-input v-model="yzk.sumPZ" ></el-input>
                </el-form-item>
                     <el-form-item label="布类编号"  >
                    <el-input v-model="yzk.itemNo"  type="textarea"></el-input>
                </el-form-item>
                <el-form-item label="布类名称">
                    <el-input v-model="yzk.itemName"  type="textarea"></el-input>
                </el-form-item>
                <el-form-item label="备注">
                    <el-input v-model="yzk.note" :rows="4" type="textarea"></el-input>
                </el-form-item>
                <el-form-item label="备注(成品打印)">
                    <el-input v-model="yzk.noteForCP" :rows="4" type="textarea"></el-input>
                </el-form-item>
            </el-form>
       
</template>

<script>
    export default {
        data(){
            return{
                form:{}
            }
        },
        props:{
            yzk:{
                required:true,
                type:Object
            }
        },
        computed:{
            localDate:{
                get(){
                    var d=new Date(this.yzk.date);
                    return d.toLocaleDateString();
                }
            }
        }
    }
</script>

<style scoped>
   
</style>