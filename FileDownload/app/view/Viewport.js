Ext.require([
    'Ext.tree.*',
    'Ext.data.*',
    'Ext.tip.*',
    'Ext.panel.*'
]);
Ext.define('FileDownload.view.Viewport', {
    extend: 'Ext.Viewport',
    title:'File download example',
    requires: ['FileDownload.view.MainPanel','FileDownload.view.LeftPanel'],
    layout: 'border',
    alias:'widget.viewport',
    
    items:[
         {
             xtype:'mainPanel'
         },
         {
             xtype:'leftPanel'
         }
    ]
});