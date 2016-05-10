Ext.define('settlement.gateway.view.RoleController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.gateway',
    require:[
      'Ext.grid.*','Ext.data.Model'
    ],
    //初始化宽高
    onInit:function(grid, eOpts){
        grid.setHeight((document.body.scrollHeight*0.09)*10);
    }


});
