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
          },{
            text:'序号',
            dataIndex:'number',
            sortable:true,
            width:50,
            align : 'center'
          },{
            text:'支付通道',
            dataIndex:'type',
            sortable:true,
            width:100,
            editor:{
              xtype:'textfield'
            },
            align : 'center'
          },{
            text:'状态',
            dataIndex:'permission',
            sortable:true,
            width:200,
            align : 'center'
          },{
            text:'费率',
            dataIndex:'handle',
            sortable:true,
            width:200,
            align : 'center'
          },{
            text:'自动开启时间',
            dataIndex:'handle',
            sortable:true,
            width:200,
            align : 'center'
          },{
            text:'自动关闭时间',
            dataIndex:'handle',
            sortable:true,
            width:200,
            align : 'center'
          },
          {
            text: '邮箱',
            align : 'center',
            dataIndex: 'email',
            width: 200,
            groupable: false,
            renderer: function(v) {
                return '<a href=' + v + '>' + v + '</a>';
            }
          },
          {
                menuDisabled: true,
                sortable: false,
                text:'删除',
                align : 'center',
                xtype: 'actioncolumn',
                width: 100,
                items: [{
                    iconCls: 'x-fa fa-sign-out',
                    tooltip: '删除',
                    handler:  'onDelete'

                }]
              }
        ],
          // 工具栏
        tbar: [
                {
              xtype: 'button',
              text : '新增',
              width:80//,
              // reference:'appBatch'
                }
            ],
            // 分页栏
          bbar: [
                {
                    xtype: 'pagingtoolbar',
                    pageSize: 20,
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
