Ext.require([
    'Ext.tree.*',
    'Ext.data.*',
    'Ext.tip.*',
    'Ext.panel.*'
]);
Ext.define('GridColumnsDynamic.view.Viewport', {
    extend: 'Ext.Viewport',
    title:'Tree to Grid Drag & Drop',
    requires: ['GridColumnsDynamic.view.MainPanel','GridColumnsDynamic.view.LeftPanel'],
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