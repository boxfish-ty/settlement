Ext.define('settlement.gateway.view.RoleViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.gateway',

    requires: [
      'Ext.data.Store'
    ],

    stores:{
      //主服务信息
      gateway:{
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
        { number: '1', type: '系统管理员',permission: '角色管理，用户管理', email: 'lisa@simpsons.com', handle: '555-111-1224' },
        { number: '2', type: '运营',permission: '服务中心',email: 'bart@simpsons.com', handle: '555-222-1234' },
        { number: '3', type: '财务',permission: '通道对账',email: 'homer@simpsons.com', handle: '555-222-1244' },
        { number: '4', type: '技术',permission: '鱼卡中心',email: 'marge@simpsons.com', handle: '555-222-1254' }
                ]

      }
    }

});
