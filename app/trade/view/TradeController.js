Ext.define('settlement.trade.view.TradeController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.trade',
    require:[
      'Ext.grid.*','Ext.data.Model'
    ],
    //搜索栏 拉伸
    onAddFilter:function(){
        var tradeAddFilter  = (Ext.ComponentQuery.query('[itemId=tradeAddFilter]')[0]);
        var tradeAddFilterBtn   = (Ext.ComponentQuery.query('[itemId=tradeAddFilterBtn]')[0]);
        var collapsing     = tradeAddFilter.micro;

        tradeAddFilter.animate({dynamic: true,to: {height:collapsing?76:40}});
        tradeAddFilter.micro=(collapsing?false:true);
        tradeAddFilterBtn.setText(collapsing?'-':'+');
    },

    //初始化宽高
    onInit:function(grid, eOpts){
        grid.setHeight((document.body.scrollHeight*0.085)*10);
        grid.setWidth((document.body.scrollHeight*0.09)*10);
    },

    //搜索
    onSearchClick:function(){
      var grid = this.lookupReference('tradeGrid');
      var store=grid.getStore();
      var params=this.createQueryParams(['trade_userId','trade_account','trade_orderCode','trade_orderStatus','trade_payStatus'
      ,'trade_orderStartTime','trade_orderEndTime','trade_payStartTime','trade_payEndTime']);
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
     }

});
