import TableColumn from '@/Common/TableColumn';

const columns={
    LogTime:"时间",
    User:"用户",
    Before:"修改前",
    After:"修改后"
}

var cols=[]

var keys=Object.keys(columns);

keys.forEach(element => {
    cols.push(new TableColumn(element,columns[element]));
});

cols.sort(function(a,b){
    return a.index-b.index
})

export default cols;