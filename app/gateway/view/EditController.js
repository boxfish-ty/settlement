Ext.define('settlement.gateway.view.EditController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.edit',
    require:[
      'Ext.grid.*'
    ],
    initEdit:function(){

    },

    onCancel:function(){
        console.log('cancel');
    },

    onSave:function(){
      console.log('save');
    },


});
