import TableColumn from '@/Common/TableColumn';
import TableHeaders from '@/Common/TableHeaders';


const date=new TableColumn("date","日期",2);
date.formatter=function(row,col,value,index){
    var d=new Date(value);
    return d.toLocaleDateString();
}


const columns={
    FBillNo:new TableColumn("gylc.FBillNo","单据编号",1),
    FGH:new TableColumn("gylc.FGH","缸号",3),
    typeName:new TableColumn("typeName","类型",4),
    date:date,
    
}

const exColumns={
    FClassGroup:new TableColumn("gylc.FClassGroup","班组",1),
    classTypeName:new TableColumn("classTypeName","班别",2),
    JTH:new TableColumn("JTH","机台号",3),
    department:new TableColumn("department","定型车间",3),
    FFD:new TableColumn("gylc.FFD","封度",4),
    FKZ:new TableColumn("gylc.FKZ","克重",5),
    FWD:new TableColumn("gylc.FWD","温度",6),
    FJS:new TableColumn("gylc.FJS","机速",7),
    FJJ:new TableColumn("gylc.FJJ","机架",8),
    FCW:new TableColumn("gylc.FCW","超喂",9),
    FQFD:new TableColumn("gylc.FQFD","前封度",10),
    FQKZ:new TableColumn("gylc.FQKZ","前克重",11),
    FText9:new TableColumn("gylc.FText9","后封度",12),
    FHKZ:new TableColumn("gylc.FHKZ","后克重",13),
    FTS:new TableColumn("gylc.FTS","条数",14),
    FWeight:new TableColumn("gylc.FWeight","重量",15),
    FSZ:new TableColumn("gylc.FSZ","树脂",16),
    FJQB:new TableColumn("gylc.FJQB","浆切边",17),
    FNote:new TableColumn("gylc.FNote","备注",18),
    customerNum:new TableColumn("customerNum","客户编号",19),
    customerName:new TableColumn("customerName","客户名",20),
    FCPYQ:new TableColumn("gylc.FCPYQ","成品要求",20),
    FXJKZ:new TableColumn("gylc.FXJKZ","下机克重",21),
    FCPKZ:new TableColumn("gylc.FCPKZ","成品克重",22),
    itemNum:new TableColumn("itemNum","布类编码",23),
    itemName:new TableColumn("itemName","品名",24),
    FJB:new TableColumn("gylc.FJB","浆边",25),
    FQB:new TableColumn("gylc.FQB","切边",26),
    FJSZ:new TableColumn("gylc.FJSZ","加树脂",27),
    FJRY:new TableColumn("gylc.FJRY","加软油",28),
    FColorNo:new TableColumn("gylc.FColorNo","色号",29),
    FColorName:new TableColumn("gylc.FColorName","色号名",30),
    FAcross:new TableColumn("gylc.FAcross","横%",31),
    FStraight:new TableColumn("gylc.FStraight","直%",32),
    FTweak:new TableColumn("gylc.FTweak","扭度",33),
}



var headers=TableHeaders(columns);

var exHeaders=TableHeaders(exColumns);



export default {headers,exHeaders};