Ext.define('TreeToGrid.view.MainPanel', {
    requires:[
      'TreeToGrid.store.GridData'  
    ],
    extend: 'Ext.Panel',
    alias:'widget.mainPanel',
    xtype:'mainPanel',
    region:'center',
    split:true,
    initComponent: function() {
        var store = Ext.create('TreeToGrid.store.GridData');
        this.items = [{
            xtype:'grid',
            title:'Grid',
            width:'40%',
            enableDragDrop: true, 
            columns:[
                {text:'name', dataIndex:'name', width:'40%'},
                {text:'price', dataIndex:'price', width:'40%'},
                { header: 'Actions',width: '20%', xtype: 'actioncolumn', itemId:'drop',
                    icon: '../resources/images/delete.png',
                    tooltip:'Drop',
                    handler: function(grid, rowIndex, colIndex){
                        this.fireEvent('dropRecord',grid, rowIndex, colIndex);
                    }
                }
            ],
            store:store,
            listeners: {
                  render: function(grid){
                    var dropTarget = new Ext.dd.DropTarget(grid.getId(),{
                      ddGroup: 'books',
                      notifyDrop: function(dragSource, event, data){
                        grid.store.add({name:data.records[0].data.text, price:data.records[0].data.qtitle.price});            
                      }
                    });
                  }
            }
        }];
        
        this.callParent(arguments);
    }
})


