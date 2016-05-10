Ext.define('settlement.order.view.OrderController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.order',
    require:[
      'Ext.grid.*','Ext.data.Model'
    ],

    //初始化宽高
    onInit:function(grid, eOpts){
        grid.setHeight((document.body.scrollHeight*0.09)*10);
    },

    //搜索
    onSearchClick:function(){
      var grid = this.lookupReference('pond_Grid');
      var store=grid.getStore();
      var params=this.createQueryParams(['pond_NickName','pond_Name','pond_School','pond_StartDate','pond_EndDate']);
      store.reload({params:params});

    },

    //通用封装查询参数
    createQueryParams:function(itemIds){
      var params={};
      for(var itemId in itemIds){
        var value = (Ext.ComponentQuery.query('[itemId='+itemIds[itemId]+']')[0]).getValue();
        var key   = (Ext.ComponentQuery.query('[itemId='+itemIds[itemId]+']')[0]).getName();
        if(value){params[key]=value;}
        }
        return params;
    },
      //回车指向搜索事件
    onEnter:function(field,e){
         if (e.getKey()==Ext.EventObject.ENTER){
             this.onSearchClick();
         }
     },

});
