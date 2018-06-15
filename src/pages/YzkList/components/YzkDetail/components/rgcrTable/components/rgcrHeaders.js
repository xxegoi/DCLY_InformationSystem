import TableColumn from '@/Common/TableColumn';
import TableHeaders from '@/Common/TableHeadersByArray';



const columns = {
    billNo: "单据编号",
    tranType: "染缸类型",
    biller: "制单人",

    fType: "类型",
    itemNum: "物料编码",
    itemName: "物料名称",
    colorNo: "色号",
    color: "颜色",
    custName: "客户名称",
    qty: "条数",
    weight: "重量",
    rjh: "染机号",
    deptName: "车间",
    jgy: "值班员",
    ds: "对色师傅",
    fbb: "班别",
    note: "备注"
}

var cols = [];

var keys = Object.keys(columns);

keys.forEach(e => {
    var item = new TableColumn(e, columns[e]);
    cols.push(item);
})

cols.forEach(e => {
    e.index = cols.indexOf(e) + 1;
})

var date = new TableColumn("date", "制单日期", 3);
date.formatter = function (row, col, value, index) {
    return new Date(value).toLocaleDateString();
};
cols.push(date);

var detaiDate = new TableColumn("detaiDate", "日期", 4);
detaiDate.formatter = function (row, col, value, index) {
    return new Date(value).toLocaleDateString();
};
cols.push(detaiDate);



var headers = TableHeaders(cols);

export default headers;