Ext.define('settlement.tools.Tools',{

  //获取组件对象
  getQuery:function(itemId){
    return (Ext.ComponentQuery.query('[itemId='+itemId+']')[0]);
  }

});
