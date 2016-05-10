Ext.define('settlement.login.view.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',

//确认登录
    onLogin: function(button, e, eOpts) {
          //获得对话框
          var logindialog = this.lookupReference('logindialog');
          //获得错误提示tip
          var errorTip=this.lookupReference('errorTip');
        //得到用户名
          var userid=logindialog.getForm().getFields().items[0];
          var value1=userid.getValue();
        //得到输入密码
          var password=logindialog.getForm().getFields().items[1];
          var value2=password.getValue();
          if((value1=='boxfish')&&(value2=='123456')){
            Ext.toast('登录成功!', null, 't');
            var app=settlement.getApplication();
            app.getMainView().destroy();
            app.setMainView('settlement.boot.view.Main');

          }else {
            errorTip.show();
          }
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
