Ext.define('settlement.order.view.Order', {
    extend: 'Ext.container.Container',
    xtype: 'Order',
    requires: [
        'Ext.grid.*',
        'Ext.toolbar.Paging',
        'Ext.layout.container.HBox',
        'Ext.grid.column.Date',
        'Ext.form.*'

    ],
    controller:'order',
    viewModel: {type: 'order'},

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
    flex: 1,

    items:[
      {
        xtype:'gridpanel',
        reference:'orderCenterGrid',
        itemId:'orderCenterGrid',
        flex: 1,
        height:800,
        style: {
          border:'2px solid #D5D5D5'
        },
        bind:{
          store:'{order}'
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
            text:'订单id',
            dataIndex:'id',
            sortable:true,
            width:50,
            hidden:true,
            align : 'center'
          },{
            text:'用户ID',
            dataIndex:'userID',
            sortable:true,
            width:70,
            align : 'center'
          },{
            text:'账号',
            dataIndex:'code',
            sortable:true,
            width:150,
            align : 'center'
          },{
            text:'姓名',
            dataIndex:'name',
            sortable:true,
            width:80,
            align : 'center'
          },{
            text:'订单号',
            dataIndex:'code',
            sortable:true,
            width:150,
            align : 'center'
          },{
            text:'金额',
            dataIndex:'totalPrice',
            sortable:true,
            width:80,
            align : 'center'
          },{
            text:'下单时间',
            dataIndex:'createTime',
            sortable:true,
            width:120,
            align : 'center'
          },{
            text:'订单状态',
            dataIndex:'status',
            sortable:true,
            width:80,
            align : 'center'
          },{
            text:'付款时间',
            dataIndex:'pay_time',
            sortable:true,
            width:120,
            align : 'center'
          },{
            text:'付款方式',
            dataIndex:'email',
            sortable:true,
            width:80,
            align : 'center'
          }
          ,{
            text:'支付账号',
            dataIndex:'remark_title',
            sortable:true,
            width:120,
            align : 'center'
          },{
            text:'服务内容',
            dataIndex:'content',
            sortable:true,
            width:200,
            align : 'center'
          },
          {
            menuDisabled: true,
            sortable: false,
            text:'操作',
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
                      xtype: 'textfield',
                      fieldLabel:'用户ID',
                      labelWidth:45,
                      name: 'condition',
                      itemId: 'userIDQuery',
                      reference:'userIDQuery',
                      width:150,
                      emptyText: '',
                      allowBlank: true,
                      listeners:{
                      }
                  },
                      // 条件查询
                {
                    xtype: 'textfield',
                    fieldLabel:'订单号',
                    labelWidth:45,
                    name: 'condition',
                    // itemId: 'codeQuery',
                    // reference:'codeQuery',
                    width:255,
                    emptyText: '',
                    allowBlank: true,
                    listeners:{
                    }
                },{
                    xtype: 'textfield',
                    fieldLabel:'账号',
                    labelWidth:45,
                    name: 'condition',
                    // itemId: 'codeQuery',
                    // reference:'codeQuery',
                    width:255,
                    emptyText: '',
                    allowBlank: true,
                    listeners:{
                    }
                },{
                     xtype: 'combobox',
                     padding:'0 0 0 25',
                     fieldLabel: '订单状态',
                     labelWidth:60,
                     itemId: 'orderStatusComboBox',
                     reference:'orderStatusComboBox',
                     bind:{
                      // store:'{statusComboBox}'
                     },
                     value:'all',
                     forceSelection: true,
                     width:200,
                     loadMask:false,
                     triggerAction:'all',
                    //  multiSelect: true,
                     editable: false,
                     displayField: 'value',
                     valueField: 'key',
                    //  emptyText: '请选择',
                     allowBlank: true
                 }, {
                     text: '查询',
                     iconCls: 'x-fa fa-search',
                     handler:'onSearchClick'
                  },{
                      xtype: 'tbspacer',
                      width: 10
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
                        store: '{order}'
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
