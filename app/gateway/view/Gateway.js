Ext.define('settlement.gateway.view.Gateway', {
    extend: 'Ext.container.Container',
    xtype: 'Gateway',
    requires: [
        'Ext.grid.*',
        'Ext.toolbar.Paging',
        'Ext.layout.container.HBox',
        'Ext.grid.column.Date',
        'Ext.form.*'

    ],
    controller:'gateway',
    viewModel: {type: 'gateway'},

    layout: {
        type: 'hbox',
        align: 'stretchmax',
        animate: true,
        animatePolicy: {
            x: true,
            width: true
        }
    },
    cls:'shadow-panel',
    margin:5,
    items:[
      {
        xtype:'gridpanel',
        reference:'gatewayGrid',
        itemId:'gatewayGrid',
        flex: 1,
        height:800,
        style: {
          border:'2px solid #D5D5D5'
        },
        bind:{
          store:'{gateway}'
        },
        viewConfig: {
            preserveScrollOnRefresh: true,
            stripeRows: true
        },
        plugins:[{
                  ptype:'clipboard',
                  pluginId:'clipboard',
                  memory:true
                }
              ],
        columns:[
          {
            text:'id',
            dataIndex:'id',
            sortable:true,
            width:150,
            hidden:true,
            align : 'center'
          },
          {
            dataIndex:'payChannel',
            sortable:true,
            hidden:true,
            align : 'center'
          }
          ,{
			      xtype: 'rownumberer',
            text:'序号',
            sortable:true,
            width:50,
            align : 'center'
          },{
            text:'支付通道',
            dataIndex:'name',
            sortable:true,
            width:120,
            editor:{
              xtype:'textfield'
            },
            align : 'center'
          },{
            text:'状态',
            dataIndex:'status',
            sortable:true,
            width:100,
            align : 'center',
            renderer: function(value, meta, record) {
                return record.get('status')==0?'关闭':'开启';
            }
          }
          // ,{
          //   text:'费率',
          //   dataIndex:'rate',
          //   sortable:true,
          //   width:100,
          //   align : 'center'
          // }
          ,{
            text:'自动开启时间',
            dataIndex:'createTime',
            sortable:true,
            width:200,
            align : 'center'
          },{
            text:'自动关闭时间',
            dataIndex:'updateTime',
            sortable:true,
            width:200,
            align : 'center'
          },
          {
                menuDisabled: true,
                sortable: false,
                text:'编辑',
                align : 'center',
                xtype: 'actioncolumn',
                width: 100,
                items: [{
                    iconCls: 'x-fa fa-edit',
                    tooltip: '编辑',
                    handler:  'onEdit'

                }]
              }
        ],
          // 工具栏
        tbar: [
            {
              xtype: 'button',
              text : '关闭',
              width:60,
              margin:'0 0 0 720',
              listeners:{
                click:'onIsOpen'
              }
            },{
              xtype: 'button',
              text : '开启',
              itemId:'gatewayOpen',
              width:60,
              listeners:{
                click:'onIsOpen'
              }
            }
            ],
            // 分页栏
          bbar: [
                {
                    xtype: 'pagingtoolbar',
                    pageSize: 10,
                    displayInfo: true,
                    emptyMsg: '没有数据',
                    displayMsg: '当前显示{0}-{1}条记录 / 共{2}条记录 ',
                    beforePageText: '第',
                    afterPageText: '页/共{0}页',
                    bind: {
                        store: '{gateway}'
                    }
                },{
                     xtype: 'label',
                     itemId: 'maintableAnyInfoShow',
                     text: '',
                     style:{
                          fontSize:'20px'
                     },
                     margin: '0 0 0 10'
                }
            ],
          listeners:{
              beforerender:'onInit'
            }
      }
    ]
});
