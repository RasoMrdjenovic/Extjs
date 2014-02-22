Ext.require([
    'Ext.tree.*',
    'Ext.data.*',
    'Ext.tip.*',
    'Ext.panel.*'
]);
Ext.define('WebToSms.view.Viewport', {
    
    extend: 'Ext.Viewport',
    layout: 'border',
    bodyStyle:'background:#34495E',
    alias:'widget.viewport',
    requires: [
        'WebToSms.view.Menu', 
        'WebToSms.view.TabPanel',
        'WebToSms.view.BottomPanel',
        'WebToSms.view.TopPanel'
    ],
    
    items:[
        {
            xtype:'mainPanel',
            region:'center'
        },
        {
            xtype:'menu',
            region:'west',
            border: false,
            split:true,
            width:'10%',
            bodyStyle:'background:#34495E'
            
        },
        {
            xtype:'topPanel',
            border:false,
            bodyStyle:'background:#34495E'
        },
        {
            xtype:'bottomPanel',
            bodyStyle:'background:#34495E',
            border:false
        }
    ]
});