Ext.require([
    'Ext.grid.*',
    'Ext.data.*',
]);
Ext.define('WebToSms.view.Workspace.Budget', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.budget',
    title:'Budget',
    xtype:'budget',
    id:'budget',
    requires: [
        'WebToSms.store.FinanceChartByMonth',
        'WebToSms.view.Workspace.Budget.Income',
        'WebToSms.view.Workspace.Budget.Expendings',
        'WebToSms.store.Wishes'
    ],

    closable: true,
    width:'100%',
    layout:'border',

    initComponent: function() {
        var financeStore = Ext.create('WebToSms.store.FinanceChartByMonth');
        financeStore.on('load',function (store, records, successful, eOpts ){
             Ext.getCmp('budgetIncomeVal').setValue('+' + records[0].data.income);
             Ext.getCmp('budgetIncomeDiv').setValue('Income +' + records[0].data.income);
             Ext.getCmp('budgetExpensesVal').setValue('-' + records[0].data.expenses);
             Ext.getCmp('budgetExpensesDiv').setValue('Expenses -' + records[0].data.expenses);
             Ext.getCmp('budgetSavingsVal').setValue('-' + records[0].data.savings);
             Ext.getCmp('budgetSavingsDiv').setValue('Savings -' + records[0].data.savings);
             Ext.getCmp('budgetWishesVal').setValue('-' + records[0].data.wishes);
             Ext.getCmp('budgetWishesDiv').setValue('Wishes -' + records[0].data.wishes);

        });
        var wishesStore = Ext.create('WebToSms.store.Wishes');
        Ext.apply(this, {
            items:[
                {
                    xtype:'panel',
                    region:'west',
                    bodyStyle:'background: #d2d7dc',
                    split:true,
                    width:'25%',
                    items:[
                        {
                            xtype:'hiddenfield',
                            id:'budgetCurrentMonth',
                            value:'01/2014'
                        },
                        {
                            xtype:'buttongroup',
                            width:'100%',
                            columns:6,
                            items:[
                                {
                                    text:'Jan',
                                    value:'01/2014',
                                    handler: this.getFinanceByMonth
                                },
                                {
                                    text:'Feb',
                                    value:'02/2014',
                                    handler: this.getFinanceByMonth
                                },
                                {
                                    text:'Mar',
                                    value:'03/2014',
                                    handler: this.getFinanceByMonth
                                },
                                {
                                    text:'Apr',
                                    value:'04/2014',
                                    handler: this.getFinanceByMonth
                                },
                                {
                                    text:'May',
                                    value:'05/2014',
                                    handler: this.getFinanceByMonth
                                },
                                {
                                    text:'Jun',
                                    value:'06/2014',
                                    handler: this.getFinanceByMonth
                                },
                                {
                                    text:'Jul',
                                    value:'07/2014',
                                    handler: this.getFinanceByMonth
                                },
                                {
                                    text:'Aug',
                                    value:'08/2014',
                                    handler: this.getFinanceByMonth
                                },
                                {
                                    text:'Sep',
                                    value:'09/2014',
                                    handler: this.getFinanceByMonth
                                },
                                {
                                    text:'Oct',
                                    value:'10/2014',
                                    handler: this.getFinanceByMonth
                                },
                                {
                                    text:'Nov',
                                    value:'11/2014',
                                    handler: this.getFinanceByMonth
                                },
                                {
                                    text:'Dec',
                                    value:'12/2014',
                                    handler: this.getFinanceByMonth
                                }
                            ]
                        },
                        {
                            xtype:'panel',
                            width:'80%',
                            layout:'border',
                            bodyStyle:'background: #d2d7dc',
                            border:false,
                            height:158,
                            margin:'10 25%',
                            items:[
                                {
                                    xtype:'panel',
                                    width:'100%',
                                    region:'north',
                                    margin:'0 0 2 0',
                                    height:30,
                                    border:false,
                                    bodyStyle:'background:#57cf8c',
                                    items:[
                                        {
                                           xtype:'displayfield',
                                           width:'50%',
                                           value:'Income',
                                           style:'float:left'
                                        },
                                        {
                                           xtype:'displayfield',
                                           id:'budgetIncomeVal',
                                           height:'100%',
                                           width:120,
                                           fieldStyle:'color:#fff;text-align:right',
                                           value:'',
                                           style:'float:right;background:#6f7375'
                                       }
                                        
                                    ]
                                }, 
                                {
                                    xtype:'panel',
                                    width:'100%',
                                    region:'center',
                                    height:30,
                                    border:false,
                                    margin:'0 0 2 0',
                                    bodyStyle:'background:#c56157',
                                    items:[
                                        {
                                           xtype:'displayfield',
                                           width:'50%',
                                           value:'Expenses',
                                           style:'float:left'
                                        },
                                        {
                                           xtype:'displayfield',
                                           id:'budgetExpensesVal',
                                           height:'100%',
                                           width:120,
                                           fieldStyle:'color:#fff;text-align:right',
                                           value:'',
                                           style:'float:left;background:#6f7375'
                                       }
                                        
                                    ]
                                },
                                {
                                    xtype:'panel',
                                    region:'south',
                                    border:false,
                                    layout:'border',
                                    bodyStyle:'background:#ccc',
                                    width:'100%',
                                    height:90,
                                    items:[
                                        {
                                            xtype:'panel',
                                            region:'north',
                                            border:false,
                                            margin:'0 0 2 0',
                                            width:'100%',
                                            height:30,
                                            bodyStyle:'background:#ebab45',
                                            items:[
                                                {
                                                   xtype:'displayfield',
                                                   width:'50%',
                                                   value:'Savings',
                                                   style:'float:left'
                                                },
                                                {
                                                   xtype:'displayfield',
                                                   id:'budgetSavingsVal',
                                                   height:'100%',
                                                   width:120,
                                                   fieldStyle:'color:#fff;text-align:right',
                                                   value:'',
                                                   style:'float:left;background:#6f7375'
                                               }
                                            ]
                                        },
                                        {
                                            xtype:'panel',
                                            region:'center',
                                            margin:'0 0 2 0',
                                            border:false,
                                            width:'100%',
                                            height:30,
                                            bodyStyle:'background:#5ca8db',
                                            items:[
                                                {
                                                   xtype:'displayfield',
                                                   width:'50%',
                                                   value:'Wishes',
                                                   style:'float:left'
                                                },
                                                {
                                                   xtype:'displayfield',
                                                   id:'budgetWishesVal',
                                                   height:'100%',
                                                   width:120,
                                                   fieldStyle:'color:#fff;text-align:right',
                                                   value:'',
                                                   style:'float:left;background:#6f7375'
                                               }
                                            ]
                                        },
                                        {
                                            xtype:'panel',
                                            region:'south',
                                            border:false,
                                            width:'100%',
                                            height:30,
                                            bodyStyle:'background:#fff',
                                            items:[
                                                 {
                                                   xtype:'displayfield',
                                                   width:'50%',
                                                   value:'Difference',
                                                   style:'float:left'
                                                },
                                                {
                                                   xtype:'displayfield',
                                          //         id:'budgetWishesVal',
                                                   height:'100%',
                                                   width:120,
                                                   fieldStyle:'color:#fff;text-align:right',
                                                   value:'=',
                                                   style:'float:left;background:#6f7375'
                                               }
                                            ]
                                        }
                                    ]
                                }
//                                {
//                                    xtype:'panel',
//                                    width:'100%',
//                                    region:'south',
//                                    border:false,
//                                    layout:'border',
//                                    items:[
//                                        {
//                                            
//                                            xtype:'panel',
//                                            width:'100%',
//                                            region:'north',
//                                            height:30,
//                                            border:false,
//                                            bodyStyle:'background:#ebab45',
//                                            items:[
//                                                {
//                                                   xtype:'displayfield',
//                                                   width:100,
//                                                   value:'Savings',
//                                                   style:'float:left'
//                                                },
//                                                {
//                                                   xtype:'displayfield',
//                                                   id:'budgetSavingsVal',
//                                                   width:100,
//                                                   height:'100%',
//                                                   fieldStyle:'color:#fff',
//                                                   value:'',
//                                                   style:'float:left;background:#6f7375'
//                                               }
//
//                                            ]
//                                
//                                        },
//                                        {
//                                            xtype:'panel',
//                                            width:'100%',
//                                            region:'center',
//                                            height:30,
//                                            border:false,
//                                            bodyStyle:'background:#5ca8db',
//                                            items:[
//                                                {
//                                                   xtype:'displayfield',
//                                                   width:100,
//                                                   value:'Wishes',
//                                                   style:'float:left'
//                                                },
//                                                {
//                                                   xtype:'displayfield',
//                                                   id:'budgetWishesVal',
//                                                   width:100,
//                                                   height:'100%',
//                                                   fieldStyle:'color:#fff',
//                                                   value:'',
//                                                   style:'float:left;background:#6f7375'
//                                               }
//
//                                            ]
//                                        },
//                                        {
//                                             xtype:'panel',
//                                            width:'100%',
//                                            region:'south',
//                                       //     height:30,
//                                            border:false,
//                                            bodyStyle:'background:#5ca8db',
//                                            items:[
//                                                {
//                                                   xtype:'displayfield',
//                                                   width:100,
//                                                   value:'Difference',
//                                                   style:'float:left'
//                                                },
//                                                {
//                                                   xtype:'displayfield',
//                                       //            id:'budgetWishesVal',
//                                                   width:100,
//                                                   height:'100%',
//                                                   fieldStyle:'color:#fff',
//                                                   value:'',
//                                                   style:'float:left;background:#6f7375'
//                                               }
//
//                                            ]
//                                        }
//                                    ]
//                                }
//                               {
//                                   xtype:'panel',
//                                   region:'west',
//                                   border:false,
//                                   width:'50%',
//                                   items:[
//                                       {
//                                           xtype:'displayfield',
//                                           value:'+Income'
//                                       },
//                                       {
//                                           xtype:'displayfield',
//                                           value:'-Expenses'
//                                       },
//                                       {
//                                           xtype:'displayfield',
//                                           value:'-Savings'
//                                       },
//                                       {
//                                           xtype:'displayfield',
//                                           value:'-Wishes'
//                                       },
//                                       {
//                                           xtype:'displayfield',
//                                           value:'=Difference'
//                                       }
//                                   ]
//                               },
//                               {
//                                   xtype:'panel',
//                                   region:'center',
//                                   border:false,
//                                   width:'50%',
//                                   items:[
//                                       {
//                                           xtype:'displayfield',
//                                           id:'budgetIncomeVal',
//                                           value:''
//                                       },
//                                       {
//                                           xtype:'displayfield',
//                                           id:'budgetExpensesVal',
//                                           value:''
//                                       },
//                                       {
//                                           xtype:'displayfield',
//                                           id:'budgetSavingsVal',
//                                           value:''
//                                       },
//                                       {
//                                           xtype:'displayfield',
//                                           id:'budgetWishesVal',
//                                           value:''
//                                       },
//                                       {
//                                           xtype:'displayfield',
//                                           id:'budgetDiffVal',
//                                           value:''
//                                       }
//                                   ]
//                               }
                            ]
                            
                            
                        },
                         {
                            xtype:'chart',
                            id:'budgetFinanceChartByMonth',
                            animate: {
                                easing: 'elasticIn',
                                duration: 1000
                            },
                            width:300,
                            height:230,
//                            legend: {
//                                position: 'right'
//                            },
                            store:financeStore,
                            axes: [
                                    {
                                        type: 'Numeric',
                                        width:50,
                                        position: 'left',
                                        fields: ['balance'],
                                        minimum: 0,
                                        maximum: 10000
                                    },
                                    {
                                 
                                        type: 'Category',
                                        position: 'bottom',
                                        fields: ['label']

                                    }
                                ],
                              series: [
                                    {
                                        type: 'column',
                                        showInLegend: true,
                                        xField: 'label',
                                        yField: ['income','expenses','wishes','savings']
                                    }

                              ]
                        }
                    ]
                },
                {
                    xtype:'panel',
                    region:'center',
                    split:true,
                    layout:'border',
                    width:'50%',
                    items:[
                        {
                            xtype:'panel',
                            region:'west',
                            bodyStyle:'background: #d2d7dc',
                            split:true,
                            layout:'fit',
                            width:'50%',
                            items:[
                                
                                {
                                    xtype:'income'
                                }
                            ]
                        },
                        {
                            xtype:'panel',
                            region:'center',
                            bodyStyle:'background: #d2d7dc',
                            split:true,
                            width:'50%',
                            items:[
                                {
                                    xtype:'expendings'
                                }
                            ]
                        }
                    ]
                },
                {
                    
                    xtype:'panel',
                    region:'east',
                    split:true,
                    bodyStyle:'background: #d2d7dc',
                    layout:'border',
                    width:'25%',
                    items:[
                        {
                            xtype:'panel',
                            width:'100%',
                            height:'50%',
                            bodyStyle:'background: #d2d7dc',
                            region:'north',
                            items:[
                                {
                                  xtype:'panel',
                                  width:'100%',
                                  height:30,
                                 border:false,
                                  padding:'5 10',         
                                  height:50,
                                  bodyStyle:'background:#ebab45',
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
                                          id:'budgetSavingsDiv'
                                      }
                                  ]
                                 //html:'<div id="budgetSavingsDiv" style="text-align:center;background:#ebab45; width:100%; height:100%; color:#fff; font: 20px bold"></div>'
                                },
                            ]
                        },
                        {
                            xtype:'panel',
                            width:'100%',
                            height:'50%',
                            bodyStyle:'background: #d2d7dc',
                            region:'center',
                            items:[
                                {
                                  xtype:'panel',
                                  width:'100%',
                                  height:30,
                                  border:false,
                                  padding:'5 10',         
                                  height:50,
                                  bodyStyle:'background:#5ba9d0',
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
                                          id:'budgetWishesDiv'
                                      }
                                  ]
                          
                                  //html:'<div id="budgetWishesDiv" style="text-align:center;background:#5ba9d0; width:100%; height:100%; color:#fff; font: 20px bold"></div>'
                                },
                                {
                                    xtype:'grid',
                                    id:'budgetWishesGrid',
                                    width:'80%',
                                    margin:'10 25%',
                                    hideHeaders:true,
                                    columns:[
                                        {text: 'Label',  dataIndex: 'label', width:'50%'},
                                        {text: 'Value',  dataIndex: 'value', width:'50%'}
                                    ],
                                    store: wishesStore
                                }
                            ]
                        }
                    ]
                
                }
//                {
//                    xtype: 'income'
//                },
//                {
//                    xtype: 'expendings' 
//                }
            ]
        });

        this.callParent(arguments);
    },
    getFinanceByMonth: function(btn){
        Ext.getCmp('budgetCurrentMonth').setValue(btn.value);
        Ext.getCmp('budgetFinanceChartByMonth').store.load({ params: { month: btn.value} });
        Ext.getCmp('flexibleCostsGrid').store.load({ params: { month: btn.value} });
        Ext.getCmp('fixCostsGrid').store.load({ params: { month: btn.value} });
        Ext.getCmp('budgetWishesGrid').store.load({ params: { month: btn.value} });
    }

});





