Ext.require([
    'Ext.tree.*',
    'Ext.data.*',
    'Ext.tip.*',
    'Ext.panel.*'
]);
Ext.define('Login.view.Viewport', {
    extend: 'Ext.Viewport',
    title:'Tree to Grid Drag & Drop',
    requires: ['Login.view.MainPanel','Login.view.LeftPanel'],
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