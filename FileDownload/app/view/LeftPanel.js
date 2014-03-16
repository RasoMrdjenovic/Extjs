Ext.define('FileDownload.view.LeftPanel', {
    requires:[
        'FileDownload.store.TreeData'
    ],
    extend: 'Ext.Panel',
    alias:'widget.leftPanel',
    xtype:'leftPanel',
    region:'west',
    layout:'fit',
    width:'20%',
    split:true,
    initComponent: function() {
        var self = this;
        var store = Ext.create('FileDownload.store.TreeData');
        this.items = [{
              xtype:'treepanel',
              title:'Tree',
              itemId:'tree',
              store:store,
              rootVisible:true
              
        }];
        this.callParent(arguments);
    }
})