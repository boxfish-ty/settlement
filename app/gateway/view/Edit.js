Ext.define('settlement.gateway.view.Edit', {
    extend: 'Ext.container.Container',
    xtype: 'Edit',
    requires: [
        'Ext.grid.*',
        'Ext.toolbar.Paging',
        'Ext.grid.column.Date'
    ],
    controller:'edit',
    viewModel: {type: 'edit'},
    items: [{
        xtype:'form',
        bodyPadding: 5,
        width: 270,
        layout: 'vbox',
        items: [{
            xtype:'textfield',
            fieldLabel: '费率',
            labelWidth:40,
            width:160,
            name: 'rate',
            allowBlank: true
        }, {
            xtype      : 'fieldcontainer',
            fieldLabel : '状态',
            labelWidth : 40,
            defaultType: 'radiofield',
            defaults: {
                flex: 1
            },
            layout: 'hbox',
            items: [
                {
                    boxLabel  : '立即开启',
                    name      : '状态',
                    inputValue: 'true',
                    id        : 'open'
                }, {
                    boxLabel  : '立即关闭',
                    name      : '状态',
                    inputValue: 'false',
                    margin    : '0 0 0 10',
                    id        : 'close'
                }
            ]
        }
        ],

        buttons: [{
            text: '取消',
            handler:'onCancel'
        }, {
            text: '保存',
            handler: 'onSave'
        }]
      }]
});
