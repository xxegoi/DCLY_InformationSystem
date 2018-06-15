function CloumItem(id, label, index=9) {
    //列数据绑定属性名称
    this.id = id;
    //列标题
    this.label = label;
    //宽度
    this.width = "";
    //当内容过长被隐藏时显示 tooltip
    this.showOverFlowToolTip = false;
    //值显示格式，默认原样输出  
    this.formatter = function(row,col,value,index){return value};
    //排序用索引
    this.index = index;
    //对齐样式
    this.align = "center";
    //列是否固定在左侧或者右侧，true 表示固定在左侧	 boolean, left, right
    this.fixed=false;
  }

export default CloumItem;