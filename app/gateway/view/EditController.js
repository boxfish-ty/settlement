Ext.define('settlement.gateway.view.EditController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.edit',
    require:[
      'Ext.grid.*'
    ],
    mixins:{
      tools:'settlement.tools.Tools'
    },
    initEdit:function(){
       var winObj = this.getQuery('gatewayEditWindow');
       this.getQuery('gatewayRadio').setValue({rb:winObj.gatewayStatus});
       this.getQuery('gatewayEditRate').setValue(winObj.rate);
    },

    onCancel:function(btn, e, eOpts){
        this.getQuery('gatewayEditWindow').close();
    },

    onSave:function(btn, e, eOpts){
        var me=this;
        var grid     = this.getQuery('gatewayGrid');
        var rate     = this.lookupReference('editRate').getValue();
        var gid      = this.getQuery('gatewayEditWindow').gid;
        var status   = (this.getQuery('gatewayRadio').getValue()).rb;

        Ext.Ajax.request({
                method:'PUT',
                url:URL_PREFIX+'/payment/gateway/update',
                headers:{'Content-Type': "application/json" },
                params : JSON.stringify({'id':gid,'status':status,'rate':rate}),
                success:function(response){
                    resObj=Ext.decode(response.responseText);

                    if(resObj.returnMsg=='success'){
                        grid.getStore().reload();
                        me.getQuery('gatewayEditWindow').close();
                        Ext.toast('操作成功', '', 't');
                    }else{
                        console.warn('请求失败');
                        return;
                    }
                },
                failure:function(response){
                  console.error('后台请求数据出错了！！！\n错误信息: \n'+response.responseText);
                }
        });
    }


});
