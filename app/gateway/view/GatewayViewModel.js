Ext.define('settlement.gateway.view.RoleViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.gateway',

    requires: [
      'Ext.data.Store'
    ],

    stores:{
      gateway:{
        autoLoad: true,
        pageSize:10,
        proxy:{
          type:'rest',
          url:URL_PREFIX+'/payment/gateway/page',
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
