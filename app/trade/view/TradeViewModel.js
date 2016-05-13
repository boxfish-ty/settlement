Ext.define('settlement.trade.view.TradeViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.trade',

    requires: [
      'Ext.data.Store'
    ],

    stores:{
      //主服务信息
      trade:{
        autoLoad: true,
        pageSize:10,
        proxy:{
          type:'rest',
          url:URL_PREFIX+'/pay/trade/page',
          reader:{
            type:'json',
            rootProperty:'data.content',
            totalProperty:'data.totalElements',
            successProperty:'returnMsg'
          },
            limitParam:'size',
            startParam:'page'
        },
        params:{
          page: 0,size:10
        }

      }
    }

});
