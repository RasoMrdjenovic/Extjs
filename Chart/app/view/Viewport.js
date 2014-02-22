Ext.require([
    'Ext.tree.*',
    'Ext.data.*',
    'Ext.tip.*',
    'Ext.panel.*'
]);
Ext.define('Chart.view.Viewport', {
    extend: 'Ext.Viewport',
    title:'Chart',
    requires: ['Chart.view.MainPanel'],
    layout: 'border',
    alias:'widget.viewport',
    
    items:[
         {
             xtype:'mainPanel'
         }
    ]
});