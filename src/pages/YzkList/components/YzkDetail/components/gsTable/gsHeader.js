import TableColumn from '@/Common/TableColumn';
import TableHeaders from '@/Common/TableHeaders';

const columns={
    FDepartment_DSPName:new TableColumn("FDepartment_DSPName","计划生产车间",1),
    FSJDepartment_DSPName:new TableColumn("FSJDepartment_DSPName","实际生产车间",2),
    FCurWorkProcedure_DSPName:new TableColumn("FCurWorkProcedure_DSPName","当前工序",3),
    FSCJT_DSPName:new TableColumn("FSCJT_DSPName","生产机台",4),
    FJSTime:new TableColumn("FJSTime","接收时间",5),
    FKSTime:new TableColumn("FKSTiem","开始时间",6),
    FEndTiem:new TableColumn("FEndTiem","结束时间",7),
    FXDGX_DSPName:new TableColumn("FXDGX_DSPName","下道工序",8),
    FOprationer:new TableColumn("FOprationer","操作人",9),
    FFinishTime:new TableColumn("FFinishTime","完工时间",10),
}

var headers=TableHeaders(columns);

export default headers;