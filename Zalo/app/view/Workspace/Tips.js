Ext.require([
    'Ext.tree.*',
    'Ext.data.*',
    'Ext.tip.*',
    'Ext.panel.*',
    'Ext.chart.*'
]);

Ext.define('WebToSms.view.Workspace.Tips', {
    
    extend: 'Ext.Panel',
    xtype:'tips',
    id:'tips',
    alias:'widget.tips',
    requires:[
//        'WebToSms.store.MyFinance'
    ],
    title:'Tips',
    closable:true,
    items:[

    ]
   
});




