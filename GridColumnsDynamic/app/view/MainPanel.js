Ext.define('GridColumnsDynamic.view.MainPanel', {
    requires:[
      'GridColumnsDynamic.store.GridData', 
      'GridColumnsDynamic.store.ColumnStore',
    ],
    extend: 'Ext.Panel',
    alias:'widget.mainPanel',
    xtype:'mainPanel',
    region:'center',
    split:true,
    tbar:[
        {
            xtype:'button',
            text:'Add column',
            itemId:'addColumn'
        }
    ],
    initComponent: function() {
        var store = Ext.create('GridColumnsDynamic.store.GridData');
        var columns = Ext.create('GridColumnsDynamic.store.ColumnStore');
        var columnsArray = [];
        columns.each(function(record,id){
            columnsArray.push({text:record.data.text, dataIndex: record.data.dataIndex});
        });
        
        this.items = [{
            xtype:'grid',
            title:'Grid',
            width:'100%',
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


