import TableColumn from '@/Common/TableColumn';
import TableHeaders from '@/Common/TableHeadersByArray';


const columns={
    
    check:"审核标志",
    cancellation:"作废标志",
    deptName:"领料部门",
    billNo:"单据编号",
    itemName:"物料名称",
    itemNum:"物料代码",
    itemModel:"规格型号",
    itemQty:"实发数量",
    itemUnit:"单位",
    itemDosage:"用量"
}

const cols=[]
var keys=Object.keys(columns);

keys.forEach(e=>{
    var item=new TableColumn(e,columns[e]);
    cols.push(item);
})

cols.forEach(e=>{
    e.index=cols.indexOf(e)+1;
})

var date=new TableColumn("date","日期",0);
date.formatter=function(row,col,value,index){
    return new Date(value).toLocaleDateString();
}
cols.push(date);

var headers=TableHeaders(cols);

export default headers;