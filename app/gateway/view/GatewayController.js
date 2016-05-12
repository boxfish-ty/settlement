Ext.define('settlement.gateway.view.RoleController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.gateway',
    require:[
      'Ext.grid.*','Ext.data.Model'
    ],
    //初始化宽高
    onInit:function(grid, eOpts){
        grid.setHeight((document.body.scrollHeight*0.09)*10);
    },

    //编辑
    onEdit:function(grid, rowIndex, colIndex){
      var edit = Ext.create('settlement.gateway.view.Edit');
      new Ext.Window({
                 //  title: '工单:'+select.data.id+'  上课时间:'+select.data.startTime,
                  title: '通道信息',
                  height:190,
                  width: 280,
                  modal:true,
                  itemId:'edit',
                  items:[edit]
              }).show();
    }

});
