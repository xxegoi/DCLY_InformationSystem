<template>
    <el-form :model="yzk"  :disabled="true" label-width="110px" size="small">
        <el-form-item label="订单编号">
            <el-input v-model="yzk.orderNo"></el-input>
        </el-form-item>
        <el-form-item label="客户编码">
            <el-input v-model="yzk.organizationNumber" placeholder=""></el-input>
        </el-form-item>
        <el-form-item label="客户名称">
            <el-input v-model="yzk.customerName" placeholder=""></el-input>
        </el-form-item>
        <el-form-item label="客户单号">
            <el-input v-model="yzk.customerNo" placeholder=""></el-input>
        </el-form-item>
        <el-form-item label="交货日期">
            <el-input v-model="deliveryDate" placeholder=""></el-input>
        </el-form-item>
        <el-form-item label="收费类型">
            <el-input v-model="yzk.sflx" placeholder=""></el-input>
        </el-form-item>
        <el-form-item label="送货地址">
            <el-input v-model="yzk.addr" placeholder=""></el-input>
        </el-form-item>
        <el-form-item label="款号">
            <el-input v-model="yzk.fundNo" placeholder=""></el-input>
        </el-form-item>
        <el-form-item label="开单匹数">
            <el-input v-model="yzk.qty" placeholder=""></el-input>
        </el-form-item>
        <el-row>
            <el-form-item label="配布备注">
                <el-input v-model="yzk.pbNote" :rows="4" type="textarea" placeholder=""></el-input>
            </el-form-item>
            <el-form-item label="订单备注">
                <el-input v-model="yzk.ddNote" type="textarea" :rows="4" placeholder=""></el-input>
            </el-form-item>
        </el-row>
        
        

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
        computed:{
            deliveryDate:{
                get(){
                    var d=new Date(this.yzk.deliveryDate);
                    return d.toLocaleDateString();
                }
            }
        }
    }
</script>

<style scoped>

</style>