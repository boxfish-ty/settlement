Ext.define('settlement.order.view.OrderViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.order',

    requires: [
      'Ext.data.Store'
    ],

    stores:{
      //主服务信息
      order:{
        autoLoad: true,
        pageSize:10,
        proxy:{
          type:'rest',
          url:URL_PREFIX+'/pay/order/page',
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
