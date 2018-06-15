import TableColumn from '@/Common/TableColumn';

const columns={
    FGH:"缸号",
    
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