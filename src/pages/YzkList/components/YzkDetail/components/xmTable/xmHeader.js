import TableColumn from '@/Common/TableColumn';
import TableHeaders from '@/Common/TableHeaders';

const columns={
    fxm:new TableColumn("fxm","细码",1),
    fpz:new TableColumn("fpz","胚重",2)
}

var headers=TableHeaders(columns);



export default headers;