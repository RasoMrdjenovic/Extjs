Ext.define('WebToSms.view.Workspace.Budget.Income', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.income',
    xtype:'income',
    bodyStyle:'background: #d2d7dc',
    width:'100%',
    autoScroll:true,
    id:'income',
    requires: [
        'WebToSms.store.Income.FixCosts',
        'WebToSms.store.Income.FlexibleCosts',
        'WebToSms.store.Income.Finances',
        'WebToSms.store.FinanceChartByMonth'
    ],
    initComponent: function() {
        Ext.apply(this, {
            items:[
                {
                  xtype:'panel',
                  width:'100%',
                  border:false,
                  padding:'5 10',         
                  height:50,
                  bodyStyle:'background:#57cf8c',
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
                          id:'budgetIncomeDiv'
                      }
                  ]
                  //html:'<div id="budgetIncomeDiv" style="text-align:center;background:#57cf8c; width:100%; height:100%; color:#fff; font: 20px bold"></div>'
              
                },
                {
                    xtype:'grid',
                    id:'fixCostsGrid',
                    width:'100%',
                    plugins: {ptype:'cellediting', clicksToEdit:1},
                    store: Ext.create('WebToSms.store.Income.FixCosts'),
                    columns: [
                        { text: 'Id',  dataIndex: 'id', width:'10%' },
                        { text: 'Label',  dataIndex: 'label', width:'40%',editor:'textarea', flex:1 },
                        { text: 'Value', dataIndex: 'value', width:'40%' ,editor:'numberfield', flex:2},
                        { text: 'Save', xtype:'actioncolumn', width:'10%', items: [{
                            icon: 'static/extjs/images/icons/save.png',
                            handler: this.editCost, 
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
                            handler: this.addNew
                        }
                    ]

                },
                {
                    xtype:'grid',
                    id:'flexibleCostsGrid',
                    margin:'10 0 0 0',
                    width:'100%',
                    plugins: {ptype:'cellediting', clicksToEdit:1},
                    store: Ext.create('WebToSms.store.Income.FlexibleCosts'),
                    columns: [
                        { text: 'Id',  dataIndex: 'id', width:'10%' },
                        { text: 'Label',  dataIndex: 'label', width:'40%',editor:'textarea', flex:1 },
                        { text: 'Value', dataIndex: 'value', width:'40%' ,editor:'numberfield', flex:2},
                        { text: 'Save', xtype:'actioncolumn', width:'10%', items: [{
                            icon: 'static/extjs/images/icons/save.png',
                            handler: this.editFlexibleCost, 
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
                            handler: this.addNewFlexible
                        }

                    ]
                } 
            ]
        });

        this.callParent(arguments);
    },
    editCost: function(grid, rowIndex, colIndex){
       
       var id = grid.getStore().getAt(rowIndex).data.id;
       var label = grid.getStore().getAt(rowIndex).data.label;
       var val = grid.getStore().getAt(rowIndex).data.value;
       Ext.Ajax.request({
               url: '?controller=default&action=editfixincome',
               params: { id: id, label:label, val: val },
               success: function(res){ if(res){ Ext.example.msg('Fix income','Successfuly changed');}},
               failure: function(){ Ext.example.msg('Warning','Change failed!'); }
       });
    },
    addNew: function(){

        Ext.create('Ext.window.Window', {
            title: 'Add new fix cost',
            id:'addCostWindow',
            height: 150,
            width: 250,
            style:'padding:5px 5px',
            items:[ 
              { 
                xtype: 'textfield',
                id:'newFixCostLabel',
                fieldLabel:'Label',
                style:'margin-top:10px;'
              },
              {
                xtype: 'numberfield',
                id:'newFixCostValue',
                fieldLabel:'Value'
              }
          ],
          buttons:[
              {
                  text:'save',
                  handler:function(){
                      var label = Ext.getCmp('newFixCostLabel').getValue();
                      var val = Ext.getCmp('newFixCostValue').getValue();
                      var month = Ext.getCmp('budgetCurrentMonth').getValue();
                      Ext.getCmp('addCostWindow').close();
                      Ext.Ajax.request({
                           url: '?controller=default&action=addfixcost',
                           params: { 
                               label: label,
                               val:val,
                               month:month
                           },
                           success: function(res){ if(res){
                                  Ext.getCmp('fixCostsGrid').store.load({ params: { month: month} });
                                  Ext.getCmp('fixCostsGrid').getView().refresh();
                                  var financeStore = Ext.create('WebToSms.store.FinanceChartByMonth');
                                    financeStore.on('load',function (store, records, successful, eOpts ){
                                         Ext.getCmp('budgetIncomeVal').setValue('+' + records[0].data.income);
                                         Ext.getCmp('budgetIncomeDiv').setValue('Income +' + records[0].data.income);
                                   
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
    editFlexibleCost: function(grid, rowIndex, colIndex){
       var id = grid.getStore().getAt(rowIndex).data.id;
       var label = grid.getStore().getAt(rowIndex).data.label;
       var val = grid.getStore().getAt(rowIndex).data.value;
       Ext.Ajax.request({
               url: '?controller=default&action=editflexibleincome',
               params: { id: id, label:label, val: val },
               success: function(res){ if(res){ Ext.example.msg('Flexible income','Successfuly changed');}},
               failure: function(){ Ext.example.msg('Warning','Change failed!'); }
       });

    },
    addNewFlexible: function(){

        Ext.create('Ext.window.Window', {
            title: 'Add new flexible cost',
            id:'addCostWindowFlexible',
            height: 150,
            width: 250,
            style:'padding:5px 5px',
            items:[ 
              { 
                xtype: 'textfield',
                id:'newFlexibleCostLabel',
                fieldLabel:'Label',
                style:'margin-top:10px;'
              },
              {
                xtype: 'numberfield',
                id:'newFlexibleCostValue',
                fieldLabel:'Value'
              }
          ],
          buttons:[
              {
                  text:'save',
                  handler:function(){
                      var label = Ext.getCmp('newFlexibleCostLabel').getValue();
                      var val = Ext.getCmp('newFlexibleCostValue').getValue();
                      var month = Ext.getCmp('budgetCurrentMonth').getValue();
                      Ext.getCmp('addCostWindowFlexible').close();
                      Ext.Ajax.request({
                           url: '?controller=default&action=addflexiblecost',
                           params: { 
                               label: label,
                               val:val,
                               month:month
                           },
                           success: function(res){ if(res){
                                  Ext.getCmp('flexibleCostsGrid').store.load({ params: { month: month} });
                                  Ext.getCmp('flexibleCostsGrid').getView().refresh();
                                  var financeStore = Ext.create('WebToSms.store.FinanceChartByMonth');
                                    financeStore.on('load',function (store, records, successful, eOpts ){
                                         Ext.getCmp('budgetIncomeVal').setValue('+' + records[0].data.income);
                                         Ext.getCmp('budgetIncomeDiv').setValue('Income +' + records[0].data.income);
                                   
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
    }
  
});





