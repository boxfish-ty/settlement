Ext.define('settlement.store.PayStatus',{
  extend:'Ext.data.Store',
  storeId: 'PayStatus',
  data:[
    {key:'',value:'全部'},
    {key:1,value:'已支付'},
    {key:2,value:'未支付'},
    {key:3,value:'已退款'}

  ],
  autoLoad:true
});
