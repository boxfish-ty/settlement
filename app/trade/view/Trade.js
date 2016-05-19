Ext.define('settlement.trade.view.Trade', {
      extend: 'Ext.container.Container',
      xtype:'Trade',
      controller:'trade',
      viewModel: {type:'trade'},
      requires: [
          'Ext.grid.*',
          'Ext.toolbar.Paging',
          'Ext.layout.container.HBox',
          'Ext.grid.column.Date',
          'Ext.form.*'

      ],
      layout: {
          type: 'vbox',
          align: 'stretch',
          animate: true
      },
      margin:5,
      items:[
        //搜索栏
        {
            xtype:'container',
            layout:{
            type: 'vbox',
            align: 'stretchmax',
            animate: true,
            animatePolicy: {
                y: true,
                height: true
            }
                },
            height:40,
            micro:true,
            itemId:'tradeAddFilter',
            reference: 'tradeAddFilter',
            items:[ {
              xtype:'container',
              padding:'3 0 5 10',
              layout:'hbox',
              items:[
                {
                  xtype: 'textfield',
                  name: 'userId',
                  itemId: 'trade_userId',
                  labelWidth:45,
                  width:130,
                  fieldLabel: '用户ID',
                  allowBlank: true,
                  listeners:{
                    specialkey:'onEnter'
                  }
              },{
                  xtype: 'textfield',
                  name: 'username',
                  itemId: 'trade_username',
                  labelWidth:35,
                  width:170,
                  margin:'0 0 0 10',
                  fieldLabel: '账号',
                  allowBlank: true,
                  listeners:{
                    specialkey:'onEnter'
                  }
              },
            {
                xtype: 'textfield',
                name: 'orderCode',
                itemId: 'trade_orderCode',
                labelWidth:45,
                width:170,
                margin:'0 0 0 10',
                fieldLabel: '订单号',
                allowBlank: true,
                listeners:{
                  specialkey:'onEnter'
                }
            },{
                 xtype: 'combobox',
                 itemId: 'trade_orderStatus',
                 store:'OrderStatus',
                 name:'orderType',
                 value:'',
                 forceSelection: true,
                 fieldLabel: '订单状态',
                 labelWidth:60,
                 width:170,
                 margin:'0 0 0 10',
                 loadMask:false,
                 triggerAction:'all',
                 editable: false,
                 displayField: 'value',
                 valueField: 'key',
                 allowBlank: true
             },{
                  xtype: 'combobox',
                  itemId: 'trade_payStatus',
                  name:'payType',
                  store:'PayStatus',
                  value:'',
                  forceSelection: true,
                  fieldLabel: '支付状态',
                  labelWidth:60,
                  width:170,
                  margin:'0 0 0 10',
                  loadMask:false,
                  triggerAction:'all',
                 //  multiSelect: true,
                  editable: false,
                  displayField: 'value',
                  valueField: 'key',
                  // emptyText: '支付状态',
                  allowBlank: true
              },{
                xtype:'button',
                text:'+',
                width:30,
                margin:'0 0 0 20',
                itemId:'tradeAddFilterBtn',
                handler:'onAddFilter'
              },
              {
               xtype:'button',
               text:'查询',
               margin:'0 0 0 100',
               handler:'onSearchClick'
             }]
              },
             {
               xtype:'container',
               layout:'hbox',
               items:[
                 {
                        xtype: 'datefield',
                        anchor: '100%',
                        padding:'0 0 0 10',
                        fieldLabel:'下单时间',
                        labelWidth:60,
                        width:185,
                        name: 'orderStartTime',
                        maxValue: new Date(),
                        itemId:'trade_orderStartTime',
                        listeners:{
                          specialkey:'onEnter'
                        }
                    },{
                                html: '—',
                                padding:'7 0 0 0'
                        },
                    {
                        xtype: 'datefield',
                        anchor: '100%',
                        width:125,
                        name: 'orderEndTime',
                        maxValue: new Date(),
                        itemId:'trade_orderEndTime',
                        listeners:{
                          specialkey:'onEnter'
                        }
                    },
                    {
                       xtype: 'datefield',
                       anchor: '100%',
                       padding:'0 0 0 10',
                       fieldLabel:'付款时间',
                       labelWidth:60,
                       width:185,
                       name: 'payStartTime',
                       maxValue: new Date(),
                       itemId:'trade_payStartTime',
                       listeners:{
                         specialkey:'onEnter'
                       }
                   },{
                               html: '—',
                               padding:'7 0 0 0'
                       },
                   {
                       xtype: 'datefield',
                       anchor: '100%',
                       width:125,
                       name: 'payEndTime',
                       maxValue: new Date(),
                       itemId:'trade_payEndTime',
                       listeners:{
                         specialkey:'onEnter'
                       }
                   }
               ]
             }

            ]
      },

                //grid
                {

                    xtype:'gridpanel',
                    reference:'tradeGrid',
                    itemId:'tradeGrid',
                    style: {
                      border:'2px solid #D5D5D5'
                    },
                    bind:{
                      store:'{trade}'
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
                    width:300,
                    columns:[
                      {
                        text:'订单id',
                        dataIndex:'id',
                        sortable:true,
                        width:50,
                        hidden:true,
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
                        text:'支付流水号',
                        dataIndex:'tradeCode',
                        sortable:true,
                        width:130,
                        align : 'center'
                      },{
                        text:'第三方流水号',
                        dataIndex:'name',
                        sortable:true,
                        width:130,
                        align : 'center'
                      },{
                        text:'订单编号',
                        dataIndex:'orderCode',
                        sortable:true,
                        width:200,
                        align : 'center'
                      },{
                        text:'金额',
                        dataIndex:'payMoney',
                        sortable:true,
                        width:100,
                        align : 'center'
                      },{
                        text:'支付时间',
                        dataIndex:'createTime',
                        sortable:true,
                        width:160,
                        align : 'center'
                      },{
                        text:'流水状态',
                        dataIndex:'status',
                        sortable:true,
                        width:100,
                        align : 'center'
                      },{
                        text:'支付成功时间',
                        dataIndex:'payTime',
                        sortable:true,
                        width:160,
                        align : 'center'
                      },{
                        text:'付款方式',
                        dataIndex:'payType',
                        sortable:true,
                        width:100,
                        align : 'center'
                      }
                      ,{
                        text:'支付账号',
                        dataIndex:'payAccount',
                        sortable:true,
                        width:200,
                        align : 'center'
                      }//,
                      // {
                      //   menuDisabled: true,
                      //   sortable: false,
                      //   text:'退款',
                      //   align : 'center',
                      //   xtype: 'actioncolumn',
                      //   width: 100,
                      //   items: [{
                      //       iconCls: 'x-fa fa-sign-out',
                      //       tooltip: '退款',
                      //       handler:  'onDelete'
                      //   }]
                      // }

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
                                    store: '{trade}'
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
