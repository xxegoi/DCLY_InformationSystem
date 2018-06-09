function CloumItem(id,label){
  this.id=id;
  this.label=label;
  this.width="";
  this.showOverFlowToolTip=false;
  this.formatter="";
}




export default {
  addr: {
    id: "addr",
    label: "送货地址",
    width: "",
    index:9
  },
  billNo: {
    id: "billNo",
    label: "单据编号",
    width: "",
    index:9
  },
  biller: {
    id: "biller",
    label: "制单人",
    width: "",
    index:9
  },
  checker: {
    id: "checker",
    label: "审核人",
    width: "",
    index:9
  },
  customerName: {
    id: "customerName",
    label: "客户名称",
    width: "",
    index:9
  },
  date: {
    id: "date",
    label: "日期",
    width: "",
    index:9
  },
  itemName: {
    id: "itemName",
    label: "布类名称",
    width: "",
    index:9
  },
  

}