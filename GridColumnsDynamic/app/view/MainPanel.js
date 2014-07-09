Ext.define('TreeToGrid.view.MainPanel', {
    requires:[
      'TreeToGrid.store.GridData', 
      'TreeToGrid.store.ColumnStore',
    ],
    extend: 'Ext.Panel',
    alias:'widget.mainPanel',
    xtype:'mainPanel',
    region:'center',
    split:true,
    initComponent: function() {
        var store = Ext.create('TreeToGrid.store.GridData');
        var columns = Ext.create('TreeToGrid.store.ColumnStore');
        var columnsArray = [];
        columns.each(function(record,id){
            columnsArray.push({text:record.data.text, dataIndex: record.data.dataIndex, width: record.data.width});
        });
        
        this.items = [{
            xtype:'grid',
            title:'Grid',
            width:'40%',
            enableDragDrop: true, 
            columns:columnsArray,
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


