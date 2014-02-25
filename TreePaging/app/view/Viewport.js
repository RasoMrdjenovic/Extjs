Ext.require([
    'Ext.tree.*',
    'Ext.data.*',
    'Ext.tip.*',
    'Ext.panel.*'
]);
Ext.define('TreePaging.view.Viewport', {
    extend: 'Ext.Viewport',
    title:'Tree to Grid Drag & Drop',
    requires: ['TreePaging.view.MainPanel','TreePaging.view.LeftPanel'],
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