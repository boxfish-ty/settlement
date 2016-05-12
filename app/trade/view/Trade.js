Ext.define('settlement.trade.view.Trade', {
      extend: 'Ext.container.Container',
      xtype:'Trade',
      controller:'trade',
      viewModel: {type:'trade'},
      layout: {
          type: 'vbox',
          align: 'stretchmax',
          animate: true
      },
      width:200,
      height:800,
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
            height:50,
            micro:true,
            itemId:'tradeAddFilter',
            reference: 'tradeAddFilter',
            items:[ {
              xtype:'container',
              padding:'12 0 5 10',
              layout:'hbox',
              items:[
                {
                  xtype: 'textfield',
                  name: 'condition',
                  // itemId: 'userIDQuery',
                  // reference:'userIDQuery',
                  labelWidth:45,
                  width:130,
                  fieldLabel: '用户ID',
                  allowBlank: true,
                  listeners:{
                  }
              },{
                  xtype: 'textfield',
                  name: 'condition',
                  // itemId: 'codeQuery',
                  // reference:'codeQuery',
                  labelWidth:35,
                  width:170,
                  margin:'0 0 0 10',
                  fieldLabel: '账号',
                  allowBlank: true,
                  listeners:{
                  }
              },
            {
                xtype: 'textfield',
                name: 'condition',
                // itemId: 'codeQuery',
                // reference:'codeQuery',
                labelWidth:45,
                width:170,
                margin:'0 0 0 10',
                fieldLabel: '订单号',
                allowBlank: true,
                listeners:{
                }
            },{
                 xtype: 'combobox',
                //  itemId: 'orderStatusComboBox',
                //  reference:'orderStatusComboBox',
                 bind:{
                  // store:'{statusComboBox}'
                 },
                 value:'all',
                 forceSelection: true,
                 fieldLabel: '订单状态',
                 labelWidth:60,
                 width:170,
                 margin:'0 0 0 10',
                 loadMask:false,
                 triggerAction:'all',
                //  multiSelect: true,
                 editable: false,
                 displayField: 'value',
                 valueField: 'key',
                //  emptyText: '订单状态',
                 allowBlank: true
             },{
                  xtype: 'combobox',
                  // itemId: 'orderStatusComboBox',
                  // reference:'orderStatusComboBox',
                  bind:{
                   // store:'{statusComboBox}'
                  },
                  value:'all',
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
                margin:'0 0 0 10',
                itemId:'tradeAddFilterBtn',
                handler:'onAddFilter'
              },
              {
               xtype:'button',
               text:'查询',
               margin:'0 0 0 30',
               handler:'onSearchClick'
             }]
              },
             {
               xtype:'container',
               padding:'7 0 0 0',
               layout:'hbox',
               items:[
                 {
                        xtype: 'datefield',
                        anchor: '100%',
                        padding:'0 0 0 10',
                        fieldLabel:'下单时间',
                        labelWidth:60,
                        width:185,
                        name: 'startDate',
                        maxValue: new Date(),
                        // itemId:'pondStartDate'
                    },{
                                html: '—',
                                padding:'7 0 0 0'
                        },
                    {
                        xtype: 'datefield',
                        anchor: '100%',
                        width:125,
                        name: 'endDate',
                        maxValue: new Date(),
                        // itemId:'pondEndDate'
                    },
                    {
                       xtype: 'datefield',
                       anchor: '100%',
                       padding:'0 0 0 10',
                       fieldLabel:'下单时间',
                       labelWidth:60,
                       width:185,
                       name: 'startDate',
                       maxValue: new Date(),
                      //  itemId:'pondStartDate'
                   },{
                               html: '—',
                               padding:'7 0 0 0'
                       },
                   {
                       xtype: 'datefield',
                       anchor: '100%',
                       width:125,
                       name: 'endDate',
                       maxValue: new Date(),
                      //  itemId:'pondEndDate'
                   }
               ]
             }

            ]
      },

                //grid
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
                        text:'支付流水号',
                        dataIndex:'code',
                        sortable:true,
                        width:150,
                        align : 'center'
                      },{
                        text:'第三方流水号',
                        dataIndex:'name',
                        sortable:true,
                        width:150,
                        align : 'center'
                      },{
                        text:'订单编号',
                        dataIndex:'orderCode',
                        sortable:true,
                        width:150,
                        align : 'center'
                      },{
                        text:'金额',
                        dataIndex:'payTrades.payMoney',
                        sortable:true,
                        width:100,
                        align : 'center'
                      },{
                        text:'支付时间',
                        dataIndex:'createTime',
                        sortable:true,
                        width:120,
                        align : 'center'
                      },{
                        text:'流水状态',
                        dataIndex:'status',
                        sortable:true,
                        width:100,
                        align : 'center'
                      },{
                        text:'支付成功时间',
                        dataIndex:'pay_time',
                        sortable:true,
                        width:120,
                        align : 'center'
                      },{
                        text:'付款方式',
                        dataIndex:'email',
                        sortable:true,
                        width:100,
                        align : 'center'
                      }
                      ,{
                        text:'支付账号',
                        dataIndex:'remark_title',
                        sortable:true,
                        width:120,
                        align : 'center'
                      },
                      {
                        menuDisabled: true,
                        sortable: false,
                        text:'退款',
                        align : 'center',
                        xtype: 'actioncolumn',
                        width: 100,
                        items: [{
                            iconCls: 'x-fa fa-sign-out',
                            tooltip: '退款',
                            handler:  'onDelete'
                        }]
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
