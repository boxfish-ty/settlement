Ext.define('settlement.order.view.OrderViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.order',

    requires: [
      'Ext.data.Store'
    ],

    stores:{
      //主服务信息
      order:{
        // // autoLoad: true,
        // pageSize:20,
        // proxy:{
        //   type:'rest',
        //   // url:URL_PREFIX+ORDER_PORT+'/order/page',
        //   reader:{
        //     type:'json',
        //     rootProperty:'data.content',
        //     totalProperty:'data.totalElements',
        //     successProperty:'returnMsg'
        //   },
        //     limitParam:'size',
        //     startParam:'page'
        // },
        // params:{
        //   page: 0,size:20
        // }



        data: [
        { userID: '123456', name: '王倩倩',content: '角色管理，用户管理', email: 'lisa@simpsons.com', code: 'wangqianqianqian' },
        { userID: '2', name: '运营',content: '服务中心',email: 'bart@simpsons.com', code: '555-222-1234' },
        { userID: '3', name: '财务',content: '通道对账',email: 'homer@simpsons.com', code: '555-222-1244' },
        { userID: '4', name: '技术',content: '鱼卡中心',email: 'marge@simpsons.com', code: '555-222-1254' }
                ]
      }

    }

});
