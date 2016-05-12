Ext.define('settlement.store.NavigationTree', {
    extend: 'Ext.data.TreeStore',

    storeId: 'NavigationTree',

    fields: [{
        name: 'text'
    }],

    root: {
        expanded: true,
        children: [
          {
            text: '网关配置',
            iconCls: 'x-fa fa-columns',
            viewType: 'Gateway',
            leaf: true
          },{
            text: '订单管理',
            iconCls: 'x-fa fa-th-list',
            viewType: 'Order',
            leaf: true
          },{
            text: '支付流水',
            iconCls: 'x-fa fa-eject',
            viewType: 'Trade',
            leaf: true
          },{
            text: '账户信息',
            iconCls: 'x-fa fa-user',
            // viewType: 'Account',
            leaf: true
          },{
            text: '通道对账',
            iconCls: 'x-fa fa-credit-card',
            // viewType: 'Channel',
            leaf: true
          },{
            text: '资金对账',
            iconCls: 'x-fa fa-adjust',
            // viewType: 'Fund',
            leaf: true
          },{
            text: '转账记录',
            iconCls: 'x-fa fa-edit',
            // viewType: 'Record',
            leaf: true
          }
            ]
        }

});
