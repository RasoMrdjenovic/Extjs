Ext.define('TreeToGrid.view.LeftPanel', {
    requires:[
        'TreeToGrid.store.TreeData'
    ],
    extend: 'Ext.Panel',
    alias:'widget.leftPanel',
    xtype:'leftPanel',
    region:'west',
    layout:'fit',
    width:'20%',
    split:true,
    initComponent: function() {
        var store = Ext.create('TreeToGrid.store.TreeData');
        this.items = [{
              xtype:'treepanel',
              title:'Tree',
              store:store,
              rootVisible:true,         
              viewConfig: {
                    plugins: {
                        ptype: 'treeviewdragdrop',
                        ddGroup: 'books'
                    }
                }
        }];
        
        this.callParent(arguments);
    }
})