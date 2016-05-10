Ext.define('settlement.login.view.Login', {
    extend: 'Ext.form.Panel',
    xtype: 'Login',

    requires: [
        'settlement.login.view.Dialog',
        'Ext.form.field.Text',
        'Ext.form.field.Checkbox',
        'Ext.button.Button',
        'Ext.layout.container.VBox'
    ],
    controller: 'login',
    viewModel: {
        type: 'login'
    },

    baseCls: 'auth-locked-container',
    resizable: false,
    autoShow: true,
    maximized: true,
    modal: true,
    layout:
    {
        type: 'vbox',
        align: 'center',
        pack: 'center',
        targetCls : ''
    },
    title: 'BoxFish系统登录',
    items:
        {
          xtype:'form',
            xtype: 'dialog',
            reference:'logindialog',
            defaultButton : 'loginButton',
            autoComplete: true,
            bodyPadding: '20 20',
            cls: 'auth-dialog-login',
            header: false,
            width: 415,
            layout: {
                type: 'vbox',
                align: 'stretch'
            },

            defaults : {
                margin : '5 0'
            },

            items: [
                {
                    xtype: 'label',
                    text: '登录到您的BoxFish帐户'
                },
                {
                    xtype: 'textfield',
                    cls: 'auth-textbox',
                    selectOnFocus:true,
                    reference:'userid',
                    name: 'userid',
                    bind: '{userid}',
                    height: 55,
                    hideLabel: true,
                    allowBlank : false,
                    emptyText: '用户名',
                    triggers: {
                        glyphed: {
                            cls: 'trigger-glyph-noop auth-email-trigger'
                        }
                    },
                    listeners: {
                        focus: 'onfocus'
                    }
                },
                {
                    xtype: 'textfield',
                    cls: 'auth-textbox',
                    height: 55,
                    hideLabel: true,
                    emptyText: '密码',
                    inputType: 'password',
                    name: 'password',
                    bind: '{password}',
                    allowBlank : false,
                    triggers: {
                        glyphed: {
                            cls: 'trigger-glyph-noop auth-password-trigger'
                        }
                    },
                    listeners: {
                        focus: 'onfocus'
                    }
                },
                {
                    xtype: 'label',
                    cls:'link-forgot-error',
                    reference:'errorTip',
                    text: '用户名或密码输入有误，请重新输入!',
                    hidden:true
                },
                // {
                //     xtype: 'container',
                //     layout: 'hbox',
                //     items: [
                //         {
                //             xtype: 'checkboxfield',
                //             flex : 1,
                //             cls: 'form-panel-font-color rememberMeCheckbox',
                //             height: 30,
                //             bind: '{persist}',
                //             boxLabel: '记住我的账户'
                //         },
                //         {
                //             xtype: 'box',
                //             html: '<a href="#authentication.passwordreset" class="link-forgot-password"> 忘记密码 ?</a>'
                //         }
                //     ]
                // },
                {
                    xtype: 'button',
                    reference: 'loginButton',
                    scale: 'large',
                    ui: 'soft-green',
                    iconAlign: 'right',
                    iconCls: 'x-fa fa-angle-right',
                    text: '登录',
                    formBind: true,
                    listeners: {
                        click: 'onLogin'
                    }
                }
            ]
        }
    ,
    listeners:{
      afterrender:'onAfterrender'
    }

});
