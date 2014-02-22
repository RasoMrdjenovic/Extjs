Ext.define('WebToSms.view.Workspace.Budget.Expendings', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.expendings',
    xtype:'expendings',
    bodyStyle:'background: #d2d7dc',
    width:'100%',
    id:'expendings',
    requires: [
        'WebToSms.store.Expendings.FixCosts',
        'WebToSms.store.Expendings.FlexibleCosts',
        'WebToSms.store.Expendings.Provisions',
        'WebToSms.store.FinanceChartByMonth'
    ],
    initComponent: function() {
        Ext.apply(this, {
            items:[
                {
                  xtype:'panel',
                  width:'100%',
                  height:30,
                  border:false,
                  padding:'5 10',         
                  height:50,
                  bodyStyle:'background:#c56157',
                  items:[
                      {
                          xtype:'image',
                          src:'/static/extjs/images/dashImg.png',
                          width:50,
                          height:50,
                          margin:'0 10 0 0',
                          style:'float:left'
                      },
                      {
                          xtype:'displayfield',
                          value:'',
                          fieldStyle:'color:#fff;float:left;font-size:20px',
                          margin:'5 auto',
                          id:'budgetExpensesDiv'
                      }
                  ]
            //     html:'<div id="budgetExpensesDiv" style="text-align:center;background:#c56157; width:100%; height:100%; color:#fff; font: 20px bold"></div>'
              
                },
                {
                    xtype:'grid',
                    id:'expendings_fixCostsGrid',
                    width:'100%',
                    plugins: {ptype:'cellediting', clicksToEdit:1},
                    store: Ext.create('WebToSms.store.Expendings.FixCosts'),
                    columns: [
                        { text: 'Id',  dataIndex: 'id', width:'10%' },
                        { text: 'Label',  dataIndex: 'label', width:'40%',editor:'textarea', flex:1 },
                        { text: 'Value', dataIndex: 'value', width:'40%' ,editor:'numberfield', flex:2},
                        { text: 'Save', xtype:'actioncolumn', width:'10%', items: [{
                            icon: 'static/extjs/images/icons/save.png',
                            handler: this.editCostExpendings, 
                            tooltip:'save'
                        }]}
                    ],
                    tbar:[
                        {
                            xtype:'displayfield',
                            value:'Fix'
                        },'->',
                        {
                            xtype:'button',
                            text:'Add new',
                            icon: 'static/extjs/images/icons/add.png',
                            style:'padding:1px 3px;',
                            handler: this.addNewExpendings
                        }
             
                    ]

                },
                {
                    xtype:'grid',
                    id:'expendings_flexibleCostsGrid',
                    margin:'10 0 0 0',
                    width:'100%',
                    plugins: {ptype:'cellediting', clicksToEdit:1},
                    store: Ext.create('WebToSms.store.Expendings.FlexibleCosts'),
                    columns: [
                        { text: 'Id',  dataIndex: 'id', width:'10%' },
                        { text: 'Label',  dataIndex: 'label', width:'40%',editor:'textarea', flex:1 },
                        { text: 'Value', dataIndex: 'value', width:'40%' ,editor:'numberfield', flex:2},
                        { text: 'Save', xtype:'actioncolumn', width:'10%', items: [{
                            icon: 'static/extjs/images/icons/save.png',
                            handler: this.editFlexibleCostExpendings, 
                            tooltip:'save'
                        }]}
                    ],
                    tbar:[
                        {
                            xtype:'displayfield',
                            value:'Variable'
                        },'->',
                        {
                            xtype:'button',
                            text:'Add new',
                            icon: 'static/extjs/images/icons/add.png',
                            style:'padding:1px 3px;',
                            handler: this.addNewFlexibleExpendings
                        }
                    ]
                }
//                ,
//                {
//                    xtype:'grid',
//                    id:'expendings_provisions',
//                    title:'Provisions',
//                    width:'100%',
//                    plugins: {ptype:'cellediting', clicksToEdit:1},
//                    store: Ext.create('WebToSms.store.Expendings.Provisions'),
//                    columns: [
//                        { text: 'Id',  dataIndex: 'id', width:'10%' },
//                        { text: 'Label',  dataIndex: 'label', width:'40%',editor:'textarea', flex:1 },
//                        { text: 'Value', dataIndex: 'value', width:'40%' ,editor:'numberfield', flex:2},
//                        { text: 'Save', xtype:'actioncolumn', width:'10%', items: [{
//                            icon: 'static/extjs/images/icons/save.png',
//                            handler: this.editProvisionsExpendings, 
//                            tooltip:'save'
//                        }]}
//                    ],
//                    tbar:[
//                        {
//                            xtype:'button',
//                            text:'Add new',
//                            icon: 'static/extjs/images/icons/add.png',
//                            style:'padding:1px 3px;',
//                            handler: this.addNewProvisionExpending
//                        },
//                        {
//                            xtype:'button',
//                            text:'Refresh',
//                            icon: 'static/extjs/images/icons/reload.png',
//                            style:'padding:1px 3px;',
//                            handler: function(){
//                                Ext.getCmp('expendings_provisions').store.load({ params: { month: Ext.getCmp('expendings_month_provisions').getValue()} });
//                                Ext.getCmp('expendings_provisions').getView().refresh();
////                                          
//                            }
//                        },
//                        {
//                            xtype:'combo',
//                            id:'expendings_month_provisions',
//                            style:'float:right',
//                            mode:'local',
//                            lazyRender:true,
//                            store: new Ext.data.ArrayStore({
//                                fields: [
//                                    'month'
//                                ],
//                                data: [['01/2014'],['02/2014'],['03/2014'],['04/2014'],['05/2014'],['06/2014'],['07/2014'],['08/2014'],['09/2014'],['10/2014'],['11/2014'],['12/2014']]
//                             }),
//                             triggerAction: 'all',
//                             valueField: 'month',
//                             displayField: 'month',
//                             value:['01/2014'],
//                             listeners:{
//                                 change: this.changeMonthProvisionExpendings,
//                                        scope: this
//                             }
//
//                        }
//                    ]
//                }
    
            ]
        });

        this.callParent(arguments);
    },
    editCostExpendings: function(grid, rowIndex, colIndex){
       
        var id = grid.getStore().getAt(rowIndex).data.id;
       var label = grid.getStore().getAt(rowIndex).data.label;
       var val = grid.getStore().getAt(rowIndex).data.value;
       Ext.Ajax.request({
               url: '?controller=default&action=editfixiexpending',
               params: { id: id, label:label, val: val },
               success: function(res){ if(res){ Ext.example.msg('Fix expending','Successfuly changed');}},
               failure: function(){ Ext.example.msg('Warning','Change failed!'); }
       });
    },
    addNewExpendings: function(){

        Ext.create('Ext.window.Window', {
            title: 'Add new fix cost',
            id:'expendings_addCostWindow',
            height: 150,
            width: 250,
            style:'padding:5px 5px',
            items:[ 
              { 
                xtype: 'textfield',
                id:'expendings_newFixCostLabel',
                fieldLabel:'Label',
                style:'margin-top:10px;'
              },
              {
                xtype: 'numberfield',
                id:'expendings_newFixCostValue',
                fieldLabel:'Value'
              }
          ],
          buttons:[
              {
                  text:'save',
                  handler:function(){
                      var label = Ext.getCmp('expendings_newFixCostLabel').getValue();
                      var val = Ext.getCmp('expendings_newFixCostValue').getValue();
                      var month = Ext.getCmp('budgetCurrentMonth').getValue();
                      Ext.getCmp('expendings_addCostWindow').close();
                      Ext.Ajax.request({
                           url: '?controller=default&action=expendingsaddfixcost',
                           params: { 
                               label: label,
                               val:val,
                               month:month
                           },
                           success: function(res){ if(res){
                                  Ext.getCmp('expendings_fixCostsGrid').store.load({ params: { month: month} });
                                  Ext.getCmp('expendings_fixCostsGrid').getView().refresh();
                                  var financeStore = Ext.create('WebToSms.store.FinanceChartByMonth');
                                    financeStore.on('load',function (store, records, successful, eOpts ){
             
                                         Ext.getCmp('budgetExpensesVal').setValue('-' + records[0].data.expenses);
                                         Ext.getCmp('budgetExpensesDiv').setValue('Expenses -' + records[0].data.expenses);
                                

                                    });
                               }else{
                                   alert('fail');
                               }},
                           failure: function(){ alert('fail'); }
                       });
                  }
              }
          ]
        }).show();

        
    },
    editFlexibleCostExpendings: function(grid, rowIndex, colIndex){
       
       var id = grid.getStore().getAt(rowIndex).data.id;
       var label = grid.getStore().getAt(rowIndex).data.label;
       var val = grid.getStore().getAt(rowIndex).data.value;
       Ext.Ajax.request({
               url: '?controller=default&action=editflexibleexpending',
               params: { id: id, label:label, val: val },
               success: function(res){ if(res){ Ext.example.msg('Flexible expending','Successfuly changed');}},
               failure: function(){ Ext.example.msg('Warning','Change failed!'); }
       });
    },
    addNewFlexibleExpendings: function(){

        Ext.create('Ext.window.Window', {
            title: 'Add new flexible cost',
            id:'expendings_addCostWindowFlexible',
            height: 150,
            width: 250,
            style:'padding:5px 5px',
            items:[ 
              { 
                xtype: 'textfield',
                id:'expendings_newFlexibleCostLabel',
                fieldLabel:'Label',
                style:'margin-top:10px;'
              },
              {
                xtype: 'numberfield',
                id:'expendings_newFlexibleCostValue',
                fieldLabel:'Value'
              }
          ],
          buttons:[
              {
                  text:'save',
                  handler:function(){
                      var label = Ext.getCmp('expendings_newFlexibleCostLabel').getValue();
                      var val = Ext.getCmp('expendings_newFlexibleCostValue').getValue();
                      var month = Ext.getCmp('budgetCurrentMonth').getValue();
                      Ext.getCmp('expendings_addCostWindowFlexible').close();
                      Ext.Ajax.request({
                           url: '?controller=default&action=expendingsaddflexiblecost',
                           params: { 
                               label: label,
                               val:val,
                               month:month
                           },
                           success: function(res){ if(res){
                                  Ext.getCmp('expendings_flexibleCostsGrid').store.load({ params: { month: month} });
                                  Ext.getCmp('expendings_flexibleCostsGrid').getView().refresh();
                                  var financeStore = Ext.create('WebToSms.store.FinanceChartByMonth');
                                    financeStore.on('load',function (store, records, successful, eOpts ){
             
                                         Ext.getCmp('budgetExpensesVal').setValue('-' + records[0].data.expenses);
                                         Ext.getCmp('budgetExpensesDiv').setValue('Expenses -' + records[0].data.expenses);
                                

                                    });
                               }else{
                                   alert('fail');
                               }},
                           failure: function(){ alert('fail'); }
                       });
                  }
              }
          ]
        }).show();

        
    },
//    changeMonthFlexibleExpendings: function(field, newValue, oldValue) {
//         Ext.getCmp('expendings_flexibleCostsGrid').store.load({ params: { month: newValue} });
//         Ext.getCmp('expendings_flexibleCostsGrid').getView().refresh();
//    },
    editProvisionsExpendings:function(grid, rowIndex, colIndex){
       var id = grid.getStore().getAt(rowIndex).data.id;
       var label = grid.getStore().getAt(rowIndex).data.label;
       var val = grid.getStore().getAt(rowIndex).data.value;
       Ext.Ajax.request({
               url: '?controller=default&action=editprovisions',
               params: { id: id, label:label, val: val },
               success: function(res){ if(res){ Ext.example.msg('Fix income','Successfuly changed');}},
               failure: function(){ Ext.example.msg('Warning','Change failed!'); }
       });
    }
//    ,
//    addNewProvisionExpending: function(){
//         Ext.create('Ext.window.Window', {
//            title: 'Add new provision',
//            id:'expendings_addCostWindowProvision',
//            height: 150,
//            width: 250,
//            style:'padding:5px 5px',
//            items:[ 
//              { 
//                xtype: 'textfield',
//                id:'expendings_newProvisionCostLabel',
//                fieldLabel:'Label',
//                style:'margin-top:10px;'
//              },
//              {
//                xtype: 'numberfield',
//                id:'expendings_newProvisionCostValue',
//                fieldLabel:'Value'
//              }
//          ],
//          buttons:[
//              {
//                  text:'save',
//                  handler:function(){
//                      var label = Ext.getCmp('expendings_newProvisionCostLabel').getValue();
//                      var val = Ext.getCmp('expendings_newProvisionCostValue').getValue();
//                      var month = Ext.getCmp('expendings_month_provisions').getValue();
//                      Ext.getCmp('expendings_addCostWindowProvision').close();
//                      Ext.Ajax.request({
//                           url: '?controller=default&action=expendingsaddprovision',
//                           params: { 
//                               label: label,
//                               val:val,
//                               month:month
//                           },
//                           success: function(res){ if(res){
//                                  Ext.getCmp('expendings_provisions').store.load({ params: { month: month} });
//                                  Ext.getCmp('expendings_provisions').getView().refresh();
//                                  
//                               }else{
//                                   alert('fail');
//                               }},
//                           failure: function(){ alert('fail'); }
//                       });
//                  }
//              }
//          ]
//        }).show();
//    }
//    ,
//    changeMonthProvisionExpendings: function(field, newValue, oldValue){
//         Ext.getCmp('expendings_provisions').store.load({ params: { month: newValue} });
//         Ext.getCmp('expendings_provisions').getView().refresh();
//    }
});





