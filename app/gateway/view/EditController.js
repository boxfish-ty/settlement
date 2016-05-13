Ext.define('settlement.gateway.view.EditController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.edit',
    require:[
      'Ext.grid.*'
    ],
    initEdit:function(){

    },

    onCancel:function(btn, e, eOpts){
        (Ext.ComponentQuery.query('[itemId=editWindow]')[0]).close();
    },

    onSave:function(btn, e, eOpts){
      var me=this;
      var params={};

      var rate=this.lookupReference('editRate').getValue();
      if(rate){
        params.rate=rate;
      }
      if(params){//没有更改
        Ext.toast('请编辑更改', '', 't');return;
      }else{
        params.gid=(Ext.ComponentQuery.query('[itemId=editWindow]')[0]).gid;
      }
      console.log(params);return;

    }


});
