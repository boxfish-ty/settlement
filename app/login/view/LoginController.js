Ext.define('settlement.login.view.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',

    //确认登录
    onLogin: function(button, e, eOpts) {
        var me=this;

          var logindialog = this.lookupReference('logindialog');
          var errorTip    = this.lookupReference('errorTip');
          var form        = logindialog.getForm().getFields();

          Ext.Ajax.request({
                  method:'POST',
                  url:URL_LOGIN_PREFIX+'/web/common/adminLogin',
                  params: JSON.stringify({
                    username:form.items[0].getValue(),
                    password:form.items[1].getValue()
                  }),
                  headers:{'Content-Type': "application/json" },
                  success:function(response){

                      resObj=Ext.decode(response.responseText);
                      if(resObj.data!=null)
                      {
                        Ext.toast('登录成功!', null, 't');
                        localStorage.setItem('username','yes');

                        var app=settlement.getApplication();
                        app.getMainView().destroy();
                        app.setMainView('settlement.boot.view.Main');
                        me.redirectTo('Order');
                      }else
                      {
                          me.lookupReference('errorTip').show();
                          console.warn('请求失败');
                          return;
                      }
                  },
                  failure:function(response){
                    console.error('后台请求数据出错了！！！\n错误信息: \n'+response.responseText);
                  }
                });


    },

    //监听聚焦
    onfocus:function(textfield, event, eOpts){
          //获得错误提示tip
          var errorTip=this.lookupReference('errorTip');
          errorTip.hide();
    },

    onAfterrender:function(){
      //h获得聚焦textfield
      var focusText=this.lookupReference('userid');
      focusText.focus(true,20);

      }

});
