Ext.require([
    'Ext.tree.*',
    'Ext.data.*',
    'Ext.tip.*',
    'Ext.panel.*',
    'Ext.chart.*'
]);
Ext.define('WebToSms.view.Workspace.Savings', {
    
    extend: 'Ext.Panel',
    xtype:'savings',
    id:'savings',
    alias:'widget.savings',
    requires:[
        'WebToSms.store.MySavings',
        'WebToSms.store.Accounts',
        'WebToSms.store.AccountGoals',
        'WebToSms.store.FinanceChartByMonth'
    ],
    title:'Savings',
    closable:true,
    width:'100',
    layout:'border',
    initComponent: function() {
        var financeStore = Ext.create('WebToSms.store.FinanceChartByMonth');
         var date = new Date();
         var d = date.getDate();
         var m = date.getMonth() + 1;
         if(m < 10){
             m = '0' + m;
         }
         var y = date.getFullYear();
         var current  =  m + '/' + y;
        financeStore.load({
            params: { month: current}
        });
        financeStore.on('load',function (store, records, successful, eOpts ){
             Ext.getCmp('savingsIncomeValue').setValue('+' + records[0].data.income);
   //          Ext.get('budgetIncomeDiv').update('+' + records[0].data.value);
             Ext.getCmp('savingsExpensesValue').setValue('-' + records[0].data.expenses);
   //          Ext.get('budgetExpensesDiv').update('-' + records[1].data.value);
             Ext.getCmp('savingsWishesValue').setValue('-' + records[0].data.wishes);
   //          Ext.get('budgetSavingsDiv').update('-' + records[3].data.value);
             Ext.get('SavingsValueDiv').update(records[0].data.savings);
   //          Ext.get('budgetWishesDiv').update('-' + records[2].data.value);

        });
        Ext.apply(this, {
            items:[
                {
                    xtype:'panel',
                    region:'west',
                    bodyStyle:'background: #d2d7dc',
                    width:'50%',
                    split:true,
                    items:[
                        {
                            xtype:'displayfield',
                            margin:'0 0 0 15%',
                            value:'Income'
                        },
                        {
                            xtype:'displayfield',
                            margin:'0 0 0 15%',
                            id:'savingsIncomeValue',
                            width:200,
                            fieldStyle:'background:#55cf8b; padding:10px 10px;color:#fff',
                            value:''
                        },
                        {
                            xtype:'displayfield',
                            margin:'0 0 0 15%',
                            value:'Expenses'
                        },
                        {
                            xtype:'displayfield',
                            margin:'0 0 0 15%',
                            id:'savingsExpensesValue',
                            width:150,
                            fieldStyle:'background:#c45f55; padding:10px 10px;color:#fff',
                            value:''
                        },
                        {
                            xtype:'displayfield',
                            margin:'0 0 0 15%',
                            value:'Wishes'
                        },
                        {
                            xtype:'displayfield',
                            margin:'0 0 0 15%',
                            id:'savingsWishesValue',
                            width:80,
                            fieldStyle:'background:#5aa7db; padding:10px 10px;color:#fff',
                            value:''
                        },
                        {
                            xtype:'panel',
                            width:'75%'
                        },
                        {
                            xtype:'panel',
                            bodyStyle:'background: #d2d7dc',
                            html:'You saved <span id="SavingsValueDiv"></span> this month',
                            margin:'10 0 0 15%',
                            border:false
                        },
                        {
                            xtype:'panel',
                            bodyStyle:'background: #d2d7dc',
                            html:'SAVING FORECAST 12 MONTHS',
                            margin:'20 15%',
                            border:false
                        },
                        {
                            xtype:'panel',
                            width:'90%',
                            bodyStyle:'background: #ebaa42',
                            margin:'0 10',
                            border:false,
                            items:[
                                {
                                    xtype:'chart',
                                    style:'margin-top:10px',
                                    width:400,
                                    height:200,                           
                                    store:Ext.create('WebToSms.store.MySavings'),
                                    axes: [
                                            {
                                                title: 'Ammounts',
                                                type: 'Numeric',
                                                position: 'left',
                                                fields: ['savings'],
                                                minimum: 0,
                                                maximum: 10000
                                            },
                                            {
                                                title: 'Month',
                                                type: 'Category',
                                                position: 'bottom',
                                                fields: ['month']

                                            }
                                        ],
                                      series: [
                                            {
                                                type: 'line',
                                                axis: 'left',
                                                xField: 'month',
                                                yField: 'savings',
                                                tips:{
                                                    trackMouse:true,
                                                    width:120,
                                                    height:30,
                                                    padding:'10 20',
                                                    renderer: function(klass, item) {
                                                            var storeItem = item.storeItem;
                                                            this.setTitle(storeItem.get('month') + " : " + storeItem.get('savings'));

                                                        }
                                                }
                                            }

                                      ]


                                }
                            ]
                        }

                    ]
                },
                {
                    xtype:'panel',
                    region:'center',
                    width:'25%',
                    split:true,
                    items:[
                        
                    ]
                },
                {
                    xtype:'panel',
                    region:'east',
                    width:'25%',
                    split:true,
                    items:[
                        
                    ]
                }
//                
//                {
//                    xtype:'panel',
//                    region:'center',
//                    split:true,
//                    layout:'border',
//                    items:[
//                        {
//                            xtype:'panel',
//                            region:'north',
//                            split:true,
//                            height:'50%',
//                            items:[
//                                {
//                                    xtype:'grid',
//                                    id:'accountsGrid',
//                                    plugins: {ptype:'cellediting', clicksToEdit:1},
//                                    title:'My accounts',
//                                    margin:'10 5%',
//                                    width:'50%',
//                                    store: Ext.create('WebToSms.store.Accounts'),
//                                    columns: [
//                                        {text: 'Id',  dataIndex: 'id', width:'10%'},
//                                        { text: 'Name',  dataIndex: 'label', width:'40%' },
//                                        { text: 'Value', dataIndex: 'value', width:'40%',editor:'numberfield'},
//                                        { text: 'Save', xtype:'actioncolumn', width:'10%', items: [{
//                                            icon: 'static/extjs/images/icons/save.png',
//                                            handler: this.editAccount, 
//                                            tooltip:'save'
//                                        }]}
//                                    ],
//                                    tbar:[
//                                        {
//                                            xtype:'button',
//                                            text:'Add new',
//                                            icon: 'static/extjs/images/icons/add.png',
//                                            style:'padding:1px 3px;',
//                                            handler: this.addNewAccount
//                                        }
//                                    ]
//                                }
//                            ]
//                        },
//                        {
//                            xtype:'panel',
//                            region:'center',
//                            split:true,
//                            items:[
//                                {
//                                    xtype:'grid',
//                                    id:'goalsGrid',
//                                    plugins: {ptype:'cellediting', clicksToEdit:1},
//                                    title:'Accounts',
//                                    margin:'10 5%',
//                                    width:'50%',
//                                    store: Ext.create('WebToSms.store.AccountGoals'),
//                                    columns: [
//                                        {text: 'Id',  dataIndex: 'id', width:'8%'},
//                                        { text: 'Name',  dataIndex: 'label', width:'15%' },
//                                        { text: 'Progress', dataIndex: 'progress', width:'55%', renderer:function(value, meta, rec, row, col, store, grid){
//                                           
//                                            return '<div style="text-align:right;heigth:100%;width:' + value + '%;background-color:#7CC36B">'+ value +'%</div>';
//                                         }
//                                            
//                                        },
//                                        { text: 'Goal', dataIndex:'goal', width:'15%',editor:'numberfield' },
//                                        { text: 'Save', xtype:'actioncolumn', width:'7%', items: [{
//                                            icon: 'static/extjs/images/icons/save.png',
//                                            handler: this.editAccountGoal, 
//                                            tooltip:'save'
//                                        }]}
//                                    ]
//                                }
//                            ]
//                        }
//                    ]
//                    
//                },
//                {
//                    xtype:'panel',
//                    region:'south',
//                    title:'Saving potential',
//                    height:'35%',
//                    width:'100%',
//                    split:true,
//                    items:[
//                        {
//                            xtype:'chart',
//                            style:'margin-top:10px',
//                            width:800,
//                            height:200,                           
//                            store:Ext.create('WebToSms.store.MySavings'),
//                            axes: [
//                                    {
//                                        title: 'Ammounts',
//                                        type: 'Numeric',
//                                        position: 'left',
//                                        fields: ['savings'],
//                                        minimum: 0,
//                                        maximum: 10000
//                                    },
//                                    {
//                                        title: 'Month',
//                                        type: 'Category',
//                                        position: 'bottom',
//                                        fields: ['month']
//
//                                    }
//                                ],
//                              series: [
//                                    {
//                                        type: 'line',
//                                        axis: 'left',
//                                        xField: 'month',
//                                        yField: 'savings'
//                                    }
//
//                              ]
//                            
//                        }
//                    ]
//                }
            ]
        })
        this.callParent(arguments);
    },
    addNewAccount: function(){
         Ext.create('Ext.window.Window', {
            title: 'Add new account',
            id:'addAccountWindow',
            height: 150,
            width: 250,
            style:'padding:5px 5px',
            items:[ 
              { 
                xtype: 'textfield',
                id:'newAccountLabel',
                fieldLabel:'Label',
                style:'margin-top:10px;'
              },
              {
                xtype: 'numberfield',
                id:'newAccountValue',
                fieldLabel:'Value'
              }
          ],
          buttons:[
              {
                  text:'save',
                  handler:function(){
                      
                      var label = Ext.getCmp('newAccountLabel').getValue();
                      var val = Ext.getCmp('newAccountValue').getValue();
                      Ext.getCmp('addAccountWindow').close();
                      Ext.Ajax.request({
                           url: '?controller=default&action=addaccount',
                           params: { 
                               label: label,
                               val:val                          
                           },
                           success: function(res){ if(res){
                                  Ext.getCmp('accountsGrid').store.load();
                                  Ext.getCmp('accountsGrid').getView().refresh();
                                  
                               }else{
                                   Ext.example.msg('Warning','Adding new account failed!');
                               }},
                           failure: function(){ Ext.example.msg('Warning','Adding new account failed!'); }
                       });
                  }
              }
          ]
        }).show();
    },
    editAccount: function(grid, rowIndex, colIndex){
       var id = grid.getStore().getAt(rowIndex).data.id;
       var val = grid.getStore().getAt(rowIndex).data.value;
       var label = grid.getStore().getAt(rowIndex).data.label;
       Ext.Ajax.request({
               url: '?controller=default&action=editaccount',
               params: { id: id, val: val },
               success: function(res){ if(res){ Ext.example.msg(label,'Successfuly changed');}},
               failure: function(){ Ext.example.msg('Warning','Change failed!'); }
       });
    },
    editAccountGoal: function(grid, rowIndex, colIndex){
       var id = grid.getStore().getAt(rowIndex).data.id;
       var goal = grid.getStore().getAt(rowIndex).data.goal;
       var label = grid.getStore().getAt(rowIndex).data.label;
       Ext.Ajax.request({
               url: '?controller=default&action=editaccountgoal',
               params: { id: id, goal: goal },
               success: function(res){ 
                   if(res){ 
                       Ext.getCmp('goalsGrid').store.load();
                       Ext.getCmp('goalsGrid').getView().refresh();;
                       Ext.example.msg(label,'Goal successfuly changed');
                   }
               },
               failure: function(){ Ext.example.msg('Warning','Change failed!'); }
       });
    }
        
   
});


