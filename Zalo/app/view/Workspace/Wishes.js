Ext.require([
    'Ext.tree.*',
    'Ext.data.*',
    'Ext.tip.*',
    'Ext.panel.*',
    'Ext.chart.*'
]);

Ext.define('WebToSms.view.Workspace.Wishes', {
    
    extend: 'Ext.Panel',
    xtype:'wishes',
    id:'wishes',
    alias:'widget.wishes',
    requires:[
        'WebToSms.store.Wishes'
    ],
    title:'Wishes',
    layout:'border',
    width:'100%',
    closable:true,
    initComponent: function() {
        var dataArray = [];
        var store = Ext.create('WebToSms.store.Wishes');
        store.on('load',function (store, records, successful, eOpts ){
            for(var i = 0; i < records.length; i++){
                var image;
                if(records[i].data.image !== null){
                    image = records[i].data.image.filename
                }else{
                    image = 'mushrooms.jpg'
                }
                var item = {
                    xtype:'panel',
                    width:'50%',
                    margin:'10 75%',
                    items:[
                        {
                            xtype:'image',
                            width:100,
                            height:100,
                            padding:'10 10',
                            margin:'10 10',
                            style:'float:left;opacity:0.5',
                            src:'/website/var/assets/' + image
                        },
                        {
                            xtype:'displayfield',
                            padding:'10 10',
                            margin:'10 0',
                            style:'float:left',
                            width:50,
                            value:records[i].data.value
                        },
                        {
                            xtype:'displayfield',
                            style:'clear:both',
                            width:200,
                            margin:'10',
                            value:records[i].data.label
                        },
                        {
                            xtype:'fieldset',
                            collapsible:true,
                            collapsed:true,
                            title:'Info',
                            items:[
                                {
                                    xtype:'numberfield',
                                    fieldLabel:'Per month',
                                    value:records[i].data.valuePerMonth
                                },
                                {
                                    xtype:'textfield',
                                    fieldLabel:'Date',
                                    disabled:true,
                                    value:records[i].data.date
                                }
                            ]
                        }
                    ]
                }
                Ext.getCmp('wishesWest').add(item);
            }
        });

        Ext.apply(this, {
            items:[
                {
                    xtype:'panel',
                    region:'west',
                    id:'wishesWest',
                    split:true,
                    width:'33%',
                    tbar:[
                        {
                            xtype:'button',
                            text:'Add new',
                            icon: 'static/extjs/images/icons/add.png',
                            handler: this.addNewWish
                        }
                    ],
                    items:[
                        
                    ]
                },
                {
                    xtype:'panel',
                    region:'center',
                    split:true,
                    width:'33%',
                    items:[
                        
                    ]
                },
                {
                    xtype:'panel',
                    region:'east',
                    width:'33%',
                    split:true,
                    items:[
                        
                    ]
                },
                
//                {
//                    xtype:'grid',
//                    id:'wishesGrid',
//                    plugins: {ptype:'cellediting', clicksToEdit:1},
//                    title:'Wishes',
//                    margin:'10 5%',
//                    width:'80%',
//                    store: Ext.create('WebToSms.store.Wishes'),
//                    columns: [
//                        {text: 'Id',  dataIndex: 'id', width:'5%'},
//                        { text: 'Name',  dataIndex: 'label', width:'10%',editor:'textfield'},
//                        { text: 'Value', dataIndex:'value', width:'10%',editor:'numberfield' },
//                        { text: 'Value per month', dataIndex:'valuePerMonth', width:'10%',editor:'numberfield' },
//                        { text: 'Date', dataIndex:'date', width:'10%',editor:'datefield' },
//                        { text: 'Progress', dataIndex: 'progress', width:'45%', renderer:function(value, meta, rec, row, col, store, grid){
//
//                            return '<div style="text-align:right;heigth:100%;width:' + value + '%;background-color:#7CC36B">'+ value +'%</div>';
//                         }
//
//                        },
//                        
//                        { text: 'Save', xtype:'actioncolumn', width:'7%', items: [{
//                            icon: 'static/extjs/images/icons/save.png',
//                            handler: this.editWish, 
//                            tooltip:'save'
//                        }]}
//                    ],
//                    tbar:[
//                                        {
//                                            xtype:'button',
//                                            text:'Add new',
//                                            icon: 'static/extjs/images/icons/add.png',
//                                            style:'padding:1px 3px;',
//                                            handler: this.addNewWish
//                                        }
//                    ]
//                }
            ]
        })
        this.callParent(arguments);
    },
    editWish:function(grid, rowIndex, colIndex){
       var id = grid.getStore().getAt(rowIndex).data.id;
       var val = grid.getStore().getAt(rowIndex).data.value;
       var label = grid.getStore().getAt(rowIndex).data.label;
       var permonth = grid.getStore().getAt(rowIndex).data.valuePerMonth;
       var reachDate = grid.getStore().getAt(rowIndex).data.date;
       Ext.Ajax.request({
               url: '?controller=default&action=editwish',
               params: { id: id, val: val, label:label, permonth: permonth, reachDate:reachDate },
               success: function(res){ if(res){ 
                       Ext.example.msg(label,'Successfuly changed');
                       Ext.getCmp('wishesGrid').store.load();
                       Ext.getCmp('wishesGrid').getView().refresh();
                   }
               },
               failure: function(){ Ext.example.msg('Warning','Change failed!'); }
       });
    },
    addNewWish:function(){
        Ext.create('Ext.window.Window', {
            title: 'Add new wish',
            id:'addWishWindow',
            height: 250,
            width: 280,
            style:'padding:5px 5px',
            items:[ 
              { 
                xtype: 'textfield',
                id:'newWishLabel',
                fieldLabel:'Label',
                style:'margin-top:10px;',
                allowBlank: false
              },
              {
                xtype: 'numberfield',
                id:'newWishValue',
                fieldLabel:'Value',
                allowBlank: false
              },
              {
                xtype: 'numberfield',
                id:'newWishValuePerMonth',
                fieldLabel:'Value/Month'
              },
              {
                xtype:'datefield',
                id:'newWishDate',
                fieldLabel:'Date'
              }
          ],
          buttons:[
              {
                  text:'save',
                  handler:function(){
                      
                      var label = Ext.getCmp('newWishLabel').getValue();
                      var val = Ext.getCmp('newWishValue').getValue();
                      var perMonth = Ext.getCmp('newWishValuePerMonth').getValue();
                      var wDate = Ext.getCmp('newWishDate').getValue();
                      Ext.getCmp('addWishWindow').close();
                      Ext.Ajax.request({
                           url: '?controller=default&action=addwish',
                           params: { 
                               label: label,
                               val:val,
                               perMonth : perMonth,
                               wDate : wDate
                           },
                           success: function(res){ if(res){
                                  Ext.getCmp('wishesGrid').store.load();
                                  Ext.getCmp('wishesGrid').getView().refresh();
                                  
                               }else{
                                   Ext.example.msg('Warning','Adding new wish failed!');
                               }},
                           failure: function(){ Ext.example.msg('Warning','Adding new wish failed!'); }
                       });
                  }
              }
          ]
        }).show();
    },
    addNewWish: function(){
         Ext.create('Ext.window.Window', {
            title: 'Add new wish',
            id:'addNewWishWindow',
            border:false,
            padding:'20 20',
            items:[ 
              { 
                xtype: 'form',
                border:false,
                id:'newWishForm',
                items:[
                    {
                        xtype:'textfield',
                        name:'label',
                        fieldLabel:'Name'
                        
                    },
                    {
                        xtype:'numberfield',
                        fieldLabel:'Cost',
                        name:'value'
                    },
                    {
                        xtype:'filefield',
                        name:'image'
                    }
                ],
                buttons:[
                    {
                        text:'Save',
                        icon: 'static/extjs/images/icons/save.png',
                        handler:function(){
                            Ext.Ajax.request({
                                   url: '?controller=default&action=addnewwish',
                                   params: { id: id, label:label, val: val },
                                   success: function(res){ if(res){ Ext.example.msg('Fix income','Successfuly changed');}},
                                   failure: function(){ Ext.example.msg('Warning','Change failed!'); }
                           });
                        }
                    }
                ]

              }
          ]
     
        }).show(); 
    }
   
});





