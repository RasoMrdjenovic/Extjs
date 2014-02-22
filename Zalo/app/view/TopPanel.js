Ext.define('WebToSms.view.TopPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.topPanel',
    xtype:'topPanel',
    height:'5%',
    region:'north',
    initComponent: function() {
        Ext.apply(this, {
            items: [

            ]
        })
        this.callParent(arguments);
    }
})