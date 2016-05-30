Ext.define('settlement.gateway.view.Edit', {
    extend: 'Ext.form.Panel',
    xtype: 'Edit',
    requires: [
        'Ext.grid.*',
        'Ext.toolbar.Paging',
        'Ext.grid.column.Date'
    ],
    controller:'edit',
    viewModel: {type: 'edit'},
    itemId:'editContainer',

    items: [{
        xtype:'form',
        bodyPadding: 5,
        width: 270,
        layout: 'vbox',
        listeners:{
            afterrender:'initEdit'
          },
        items: [
          {
            xtype:'textfield',
            fieldLabel: '支付通道',
            itemId:'gatewayEditName',
            labelWidth:40,
            width:160,
            name: 'name',
            allowBlank: false
        },
        {
        xtype: 'radiogroup',
        fieldLabel: '状态',
        itemId:'gatewayRadio',
        labelWidth:40,
        columns: 2,
        width:230,
        vertical: true,
        items: [
            { boxLabel: '立即开启',width:100, name: 'rb', inputValue: 1},
            { boxLabel: '立即关闭',width:100, name: 'rb', inputValue: 0}
        ]
            }
        ],

        buttons: [{
            text: '取消',
            listeners:{
              click:'onCancel'
            }
        }, {
            text: '保存',
            disabled: true,
            formBind: true,
            listeners:{
              click:'onSave'
            }
        }]
      }]
});
