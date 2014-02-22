Ext.define('WebToSms.view.BottomPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.bottomPanel',
    xtype:'bottomPanel',
    height:'5%',
    region:'south',
    initComponent: function() {
        Ext.apply(this, {
            items: [

            ]
        })
        this.callParent(arguments);
    }
})


