import TableColumn from '@/Common/TableColumn';
import TableHeaders from '@/Common/TableHeaders';

const addr = new TableColumn("addr", "送货地址", 12);
addr.showOverFlowToolTip = true;

const note=new TableColumn("note", "备注", 11);
note.showOverFlowToolTip=true;


const date=new TableColumn("date", "制单日期", 8) ;
date.formatter=function(row,col,value,index){
  return new Date(value).toLocaleDateString();
}

const gh=new TableColumn("gh", "缸号", 4);
gh.width="120";
gh.fixed=true;

var itemName=new TableColumn("itemName", "布类名称", 2)
itemName.width="150";

var  cloumns = {
  addr: addr,

  billNo: new TableColumn("billNo", "单据编号", 13),

  biller: new TableColumn("biller", "制单人", 7),

  checker: new TableColumn("checker", "审核人", 9),

  customerName: new TableColumn("customerName", "客户名称", 1),

  date: date,

  itemName: itemName,

  gh: gh,

  qty: new TableColumn("qty", "开单匹数", 5),

  sumPZ: new TableColumn("sumPZ", "原缸总坯重", 6),

  sflx: new TableColumn("sflx", "收费类型", 10),

  note: note,

  itemNo: new TableColumn("itemNo", "布类编号", 14),

  customerNo: new TableColumn("customerNo", "客户单号", 17),

  weight: new TableColumn("weight", "重量", 9),

  ppsx: new TableColumn("ppsx", "品牌属性", 15),

  orderNo: new TableColumn("orderNo", "订单号", 16),

  organizationNumber:new TableColumn("organizationNumber","客户编号",16.5),

}


var headers=TableHeaders(cloumns);

export default headers;