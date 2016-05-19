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
        reference:'orderGrid',
        itemId:'orderGrid',
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
            dataIndex:'userId',
            sortable:true,
            width:70,
            align : 'center'
          },{
            text:'账号',
            dataIndex:'userInfo',
            sortable:true,
            width:150,
            align : 'center',
            renderer: function(value, meta, record) {
                return (record.get('userInfo')).username;
            }
          },{
            text:'姓名',
            dataIndex:'name',
            sortable:true,
            width:100,
            align : 'center',
            renderer: function(value, meta, record) {
                return (record.get('userInfo')).realName;
            }
          },{
            text:'订单编号',
            dataIndex:'orderCode',
            sortable:true,
            width:150,
            align : 'center'
          },{
            text:'金额',
            dataIndex:'totalPrice',
            sortable:true,
            width:100,
            align : 'center'
          },{
            text:'下单时间',
            dataIndex:'orderTime',
            sortable:true,
            width:150,
            align : 'center'
          },{
            text:'订单状态',
            dataIndex:'orderStatus',
            sortable:true,
            width:100,
            align : 'center'
          }
        ],
          // 工具栏
        tbar: [
                  {
                      xtype: 'textfield',
                      fieldLabel:'用户ID',
                      labelWidth:45,
                      name: 'userId',
                      itemId: 'order_userId',
                      width:130,
                      allowBlank: true,
                      listeners:{
                        specialkey:'onEnter'
                      }
                  },{
                      xtype: 'textfield',
                      fieldLabel:'账号',
                      labelWidth:35,
                      name: 'username',
                      itemId: 'order_username',
                      width:170,
                      emptyText: '',
                      allowBlank: true,
                      listeners:{
                        specialkey:'onEnter'
                      }
                  },
                  {
                      xtype: 'textfield',
                      fieldLabel:'订单编号',
                      labelWidth:58,
                      name: 'orderCode',
                      itemId: 'order_orderCode',
                      width:170,
                      emptyText: '',
                      allowBlank: true,
                      listeners:{
                        specialkey:'onEnter'
                      }
                },{
                     xtype: 'combobox',
                     fieldLabel: '订单状态',
                     labelWidth:60,
                     width:170,
                     itemId: 'order_orderStatus',
                     value:'',
                     name:'orderStatus',
                     forceSelection: true,
                     loadMask:false,
                     triggerAction:'all',
                    //  multiSelect: true,
                     editable: false,
                     displayField: 'value',
                     valueField: 'key',
                     store:'OrderStatus',
                     allowBlank: true
                 },{
                     xtype: 'datefield',
                     anchor: '100%',
                     padding:'0 0 0 5',
                     fieldLabel:'下单时间',
                     labelWidth:60,
                     width:185,
                     name: 'beginDate',
                     maxValue: new Date(),
                     itemId:'order_beginDate',
                     listeners:{
                       specialkey:'onEnter'
                     }
                 },{
                             html: '至',
                             padding:'0 0 0 2'
                     },
                 {
                     xtype: 'datefield',
                     anchor: '100%',
                     width:125,
                     name: 'endDate',
                     maxValue: new Date(),
                     itemId:'order_endDate',
                     listeners:{
                       specialkey:'onEnter'
                     }
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
                    pageSize: 10,
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
