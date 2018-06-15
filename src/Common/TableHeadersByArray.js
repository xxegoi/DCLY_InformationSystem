function GetHeaders(column){
    
    column.sort(function(a,b){
        return a.index-b.index;
    })

    return column;
}


export default GetHeaders;