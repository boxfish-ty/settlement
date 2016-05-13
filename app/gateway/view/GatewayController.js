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
      var id=(grid.getStore().getData()).items[rowIndex].id;
      var edit = Ext.create('settlement.gateway.view.Edit');
      new Ext.Window({
                  gid:id,
                  title: '通道信息',
                  height:190,
                  width: 280,
                  modal:true,
                  itemId:'editWindow',
                  items:[edit]
              }).show();
    },


    //开启/关闭
    onIsOpen:function(btn, e, eOpts){

      var grid = this.lookupReference('gatewayGrid');
      //得到选中数据
      var record=grid.getSelectionModel().getSelection();

      if(record.length<=0){
        Ext.toast('请选择一条记录', '', 't');
        return;
      }

      var gatewayId=record[0].data.id;
      var Operation=((btn.getItemId()=='gatewayOpen')?'on':'off');

      Ext.Ajax.request({
              method:'PUT',
              url:URL_PREFIX+'/payment/gateway/'+Operation+'/'+gatewayId,
              headers:{'Content-Type': "application/json" },
              success:function(response){
                  resObj=Ext.decode(response.responseText);

                  if(resObj.returnMsg=='success'){
                      grid.getStore().reload();
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
