import TableColumn from '@/Common/TableColumn';
import TableHeaders from '@/Common/TableHeadersByArray';


const columns =
    {
        "m.FColorNo": "色号",
        "colorSeri": "色系",
        "custName": "客户名称",
        "itemName": "布类名称",
        "itemNum": "布类编码",
        "m.FColorName": "颜色",
        "entryShapi": "纱胚",
        "entryItemNum": "材料编码",
        "entryItemName": "材料名称",
        "entryItemModel": "规格型号",
        "entryItemType": "材料类别",
        "entryWork": "工序",
        "entry.FDosage": "标准用量",
        "entry.FSB1": "水比1",
        "entry.FSB2": "水比2",
        "entry.FGYYQ": "工艺要求",
        "entry.FGYH1": "工艺号1",
        "entry.FGYH2": "工艺号2",
        "entry.FUserName": "操作员",

    }

var arr = []
var keys = Object.keys(columns);



keys.forEach(e => {
    var id = e;
    var label = columns[e];
    var col = new TableColumn(e, label);
    col.index = keys.indexOf(e) + 1;
    arr.push(col);
});

//特殊列
var date = new TableColumn("m.FDate", "日期", 2);
date.formatter = function (row, col, value, index) {
    return new Date(value).toLocaleDateString();
}
arr.push(date);

var billNo=new TableColumn("m.FBillNo", "单据编号",0);
billNo.width=100;
arr.push(billNo);

var Fdate=new TableColumn("entry.FTime","操作时间",99);
Fdate.formatter=function(row,col,value,index){
    var d=new Date(value);
    var year=d.getFullYear();
    var month=d.getMonth();
    var day=d.getDay();
    var time=d.toLocaleTimeString();

    return [year,month,day].join("-")+" "+time;
}
Fdate.width=150;

arr.push(Fdate);

//////////////////////////

var headers = TableHeaders(arr);


export default headers;