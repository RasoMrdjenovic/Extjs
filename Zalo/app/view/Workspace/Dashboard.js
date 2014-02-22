Ext.define('WebToSms.view.Workspace.Dashboard', {
    extend: 'Ext.panel.Panel',
    xtype:'dashboard',
    id:'dashboard',
    alias:'widget.dashboard',
    requires:[
        'WebToSms.store.FinanceChartByMonth',
        'WebToSms.store.FixExpensesChart',
        'WebToSms.store.FlexibleExpensesChart',
        'WebToSms.store.WishesChart',
        'WebToSms.store.MySpendings',
        'WebToSms.store.AccountGoals',
        'WebToSms.store.Wishes',
        'WebToSms.store.Provisions'
    ],
    title:'Dashboard',
    closable:true,
    layout:'border',
    width:'100%',
    initComponent: function() {
        var financeStore = Ext.create('WebToSms.store.FinanceChartByMonth');
        
        var incomeValue;
        financeStore.on('load',function (store, records, successful, eOpts ){
             Ext.getCmp('incomeValueDiv').setValue('Income: +' + records[0].data.income);
             Ext.getCmp('expensesValueDiv').setValue('Expenses: -' + records[0].data.expenses);
             Ext.getCmp('savingsValueDiv').setValue('Savings: -' + records[0].data.savings);
             Ext.getCmp('wishesValueDiv').setValue('Wishes: -' + records[0].data.wishes);
          
        });
        var fixExpensesChart = Ext.create('WebToSms.store.FixExpensesChart');
        var flexibleExpensesChart = Ext.create('WebToSms.store.FlexibleExpensesChart');
        var wishesChart = Ext.create('WebToSms.store.WishesChart');
        var savingsChart = Ext.create('WebToSms.store.SavingsChart');
        var provisionsStore = Ext.create('WebToSms.store.Provisions');
        var wishesStore = Ext.create('WebToSms.store.Wishes');
        Ext.apply(this, {
            items: [
                {
                    xtype:'panel',
                    region:'west',
                    split:true,
                    width:'25%',
                    items:[
                        {
                          xtype:'panel',
                          id:'incomeValuePanel',
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
                                  id:'incomeValueDiv'
                              }
                          ]
               //           html:'<div id="incomeValueDiv" style="background:#57cf8c; width:100%; height:100%; color:#fff"></div>'
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
                            xtype:'chart',
                            id:'financeChartByMonth',
                            margin:'20 0 0 0',
                            animate: {
                                easing: 'elasticIn',
                                duration: 1000
                            },
                            width:315,
                            height:230,
                            legend: {
                                position: 'right'
                            },
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
                                        yField: ['income','wishes','expenses','savings']
                                    }

                              ]
                        }
                    ]
                },
                {
                    xtype:'panel',
                    region:'center',
                    width:'50%',
                    split:true,
                    layout:'border',
                    items:[
                        {
                            xtype:'panel',
                            region:'west',
                            split:true,
                            width:'50%',
                            items:[
                                {
                                  xtype:'panel',
                                  width:'100%',
                                  height:50,
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
                                          id:'expensesValueDiv'
                                      }
                                  ]
                       
                                 },
                                {
                                    xtype:'panel',
                                    title:'Fix',
                                    margin:'0 25%',
                                    padding:'2 20',
                                    width:'80%',
                                    items:[
                                        {
                                            xtype:'chart',
                                            id:'expensesFixPieChart',
                                            animate: {
                                                easing: 'elasticIn',
                                                duration: 1000
                                            },
                                            width: 180,
                                            height:180,

                                            store: fixExpensesChart,
                                              series: [
                                                    {
                                                        type: 'pie',
                                                        field: 'value',
                                                        showInLegend: false,
                                                        label: {
                                                            field: 'label',
                                                            display: 'rotate',
                                                            contrast: true,
                                                            font: '12px Arial'
                                                        }
                                                    }

                                              ]
                                        }
                                    ]
                                },
                                {
                                    xtype:'panel',
                                    title:'Variable',
                                    margin:'0 25%',
                                    padding:'2 20',
                                    width:'80%',
                                    items:[
                                        {
                                            xtype:'chart',
                                            id:'expensesFlexiblePieChart',
                                            animate: {
                                                easing: 'elasticIn',
                                                duration: 1000
                                            },
                                            width: 180,
                                            height:180,

                                            store: flexibleExpensesChart,
                                              series: [
                                                    {
                                                        type: 'pie',
                                                        field: 'value',
                                                        showInLegend: false,
                                                        label: {
                                                            field: 'label',
                                                            display: 'rotate',
                                                            contrast: true,
                                                            font: '12px Arial'
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
                            split:true,
                            width:'50%',
                            items:[
                                {
                                  xtype:'panel',
                                  width:'100%',
                                  height:50,
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
                                          id:'savingsValueDiv'
                                      }
                                      
                                  ]
                           
                                },
                                {
                                      xtype:'panel',
                                      width:'100%',
                                      border:false,
                                      bodyStyle:'background:#fff',
                                      margin:'50 0 0 0',
                                      padding:'5 10',
                                      items:[
                                          {
                                              
                                            xtype:'chart',
                                            id:'savingsPieChart',
                                            style:'display:block',
                                            bodyStyle:'background:#fff',
                                            animate: {
                                                easing: 'elasticIn',
                                                duration: 1000
                                            },
                                            width: 200,
                                            height:200,
                                            margin:'0 30%',
                                            store: savingsChart,
                                            series: [
                                                    {
                                                        type: 'pie',
                                                        field: 'value',
                                                        showInLegend: false,
                                                        label: {
                                                            field: 'value',
                                                            display: 'rotate',
                                                            contrast: true,
                                                            font: '12px Arial'
                                                        },
                                                        renderer: function(sprite, record, attr, index, store) {
                                                             return Ext.apply(attr, {
                                                                 fill: [ "#EBAB45"][index%1]
                                                             });
                                                        }
                                                    }

                                              ]
                                        
                                          },
                                          {
                                              xtype:'panel',
                                              width:'100%',
                                              margin:'20 0 0 0',
                                              height:120,
                                              border:false,
                                              items:[
                                                  {
                                                      xtype:'grid',
                                                      id:'dsh_provisionsGrid',
                                                      cls: 'provisions_grid',
                                                      hideHeaders:true,
                                                      width:'100%',
                                                      columns:[
                                                          {
                                                              text:'label',
                                                              width:'50%',
                                                              dataIndex:'label'
                                                          },
                                                          {
                                                              text:'value',
                                                              width:'50%',
                                                              dataIndex:'value'
                                                          }
                                                          
                                                      ],
                                                      store: provisionsStore
                                                     
                                                      
                                                  }
                                              ]
                                          }
                                      ]
                                  }
                            ]
                        }
                    ]
                },
                {
                    xtype:'panel',
                    region:'east',
                    split:true,
                    width:'25%',
                    items:[
                        {
                          xtype:'panel',
                          width:'100%',
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
                                  id:'wishesValueDiv'
                              }
                          ]
                         
                          //html:'<div id="wishesValueDiv" style="background:#5ba9d0; width:100%; height:100%; color:#fff">Wishes:-</div>'
                        },
                        {
                           xtype:'panel',
                           style:'display:block;',
                           id:'wishesPanel',
                           width:'100%',
                           border:false,
                           margin:'50 0 0 0',
                           padding:'5 10',
                           items:[       
                                 {         
                                    xtype:'chart',
                                    id:'wishesPieChart',
                                    style:'display:block',
                                    animate: {
                                        easing: 'elasticIn',
                                        duration: 1000
                                    },
                                    width: 200,
                                    height:200,
                                    margin:'0 30%',
                                    store: wishesChart,
                                    series: [
                                            {
                                                type: 'pie',
                                                field: 'value',
                                                showInLegend: false,
                                                label: {
                                                    field: 'label',
                                                    display: 'rotate',
                                                    contrast: true,
                                                    font: '12px Arial'
                                                },
                                                renderer: function(sprite, record, attr, index, store) {
                                                     return Ext.apply(attr, {
                                                         fill: [ "#5BA9D0","#115FA6","#157FCC"][index%5]
                                                     });
                                                }
                                            }

                                      ]

                                  },
                                        {
                                              xtype:'panel',
                                              width:'100%',
                                              margin:'20 0 0 0',
                                              cls: 'wishes_grid',
                                              height:120,
                                              border:false,
                                              items:[
                                                  {
                                                      xtype:'grid',
                                                      id:'dsh_wishesGrid',
                                                      hideHeaders:true,
                                                      width:'100%',
                                                      columns:[
                                                          {
                                                              text:'label',
                                                              width:'50%',
                                                              dataIndex:'label'
                                                          },
                                                          {
                                                              text:'value',
                                                              width:'50%',
                                                              dataIndex:'value'
                                                          }
                                                          
                                                      ],
                                                      store: wishesStore
                                                      
                                                  }
                                              ]
                                          }
                             ]
                       }
                    ]
                }
            ]
        });

        this.callParent(arguments);
    },
    changeMonthPieChart: function(field, newValue, oldValue){
        Ext.getCmp('dashboardPieChart').store.load({ params: { month: newValue} });
//        Ext.getCmp('dashboardPieChart').getView().refresh();
    },
    getFinanceByMonth: function(btn){
        Ext.getCmp('financeChartByMonth').store.load({ params: { month: btn.value} });
        Ext.getCmp('expensesFixPieChart').store.load({ params: { month: btn.value} });
        Ext.getCmp('expensesFlexiblePieChart').store.load({ params: { month: btn.value} });
        Ext.getCmp('wishesPieChart').store.load({ params: { month: btn.value} });
        Ext.getCmp('savingsPieChart').store.load({ params: { month: btn.value} });
        Ext.getCmp('dsh_provisionsGrid').store.load({ params: { month: btn.value} });
        Ext.getCmp('dsh_wishesGrid').store.load({ params: { month: btn.value} });
    }
   
});


