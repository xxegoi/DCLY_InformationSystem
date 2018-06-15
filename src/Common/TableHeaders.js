function GetHeadersByObj(cloumns){
    //按INDEX排序，数值越大越靠左
var sort= Object.keys(cloumns).sort(function(a,b){
    return cloumns[a].index-cloumns[b].index;
  })
  
  var arr=new Array();
  
  sort.forEach(element => {
    arr.push(cloumns[element]);
  });
    
  return arr;
}

export default GetHeadersByObj;