Ext.require([
    'Ext.tree.*',
    'Ext.data.*',
    'Ext.tip.*',
    'Ext.panel.*'
]);
Ext.define('TreeToGrid.view.Viewport', {
    extend: 'Ext.Viewport',
    title:'Tree to Grid Drag & Drop',
    requires: ['TreeToGrid.view.MainPanel','TreeToGrid.view.LeftPanel'],
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