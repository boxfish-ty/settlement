/*
*登录页面对话框
*/
Ext.define('settlement.login.view.Dialog', {
    extend: 'Ext.form.Panel',
    xtype: 'dialog',

    requires: [
        'settlement.login.view.LoginController',
        'Ext.form.Panel'
    ],

    autoComplete : false,
    scrollable:true,

    initComponent: function () {
        var me = this, listen;

        if (me.autoComplete) {
            me.autoEl = Ext.applyIf(
                me.autoEl || {},
                {
                    tag: 'form',
                    name: 'dialog',
                    method: 'post'
                });
        }

        me.addCls('auth-dialog');
        me.callParent();

        if (me.autoComplete) {
            listen = {
                afterrender : 'doAutoComplete',
                scope : me,
                single : true
            };

            Ext.each(me.query('textfield'), function (field) {
                field.on(listen);
            });
        }
    },

    doAutoComplete : function(target) {
        if (target.inputEl && target.autoComplete !== false) {
            target.inputEl.set({ autocomplete: 'on' });
        }
    }
});
