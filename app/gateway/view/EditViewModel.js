Ext.define('settlement.gateway.view.EditViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.edit',

    requires: [
      'Ext.data.Store'
    ],
    stores:{
      edit:{
        fields:[
          {val:'',type:'string'},
          {level:'',type:'string'}
        ],
        autoLoad:true,
        pageSize:5,
        data:[
            {val:'1',level:'1级'},
            {val:'2',level:'2级'},
            {val:'3',level:'3级'},
            {val:'4',level:'4级'},
            {val:'5',level:'5级'},
            {val:'6',level:'6级'},
            {val:'7',level:'7级'},
            {val:'8',level:'8级'},
            {val:'9',level:'9级'},
            {val:'10',level:'10级'},
            {val:'11',level:'11级'}
        ]
      }
    }

});
