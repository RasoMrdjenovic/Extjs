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
            width:'20%',
            enableDragDrop: true, 
            columns:[
                {text:'name', dataIndex:'name', width:'50%'},
                {text:'price', dataIndex:'price', width:'50%'}
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


