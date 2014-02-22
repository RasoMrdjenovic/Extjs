Ext.define('WebToSms.view.TabPanel', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.tabpanel',   
    xtype:'mainPanel',
    initComponent: function() {
        this.items = [{
            xtype: 'panel',
            title: 'Home',
            html:'lorem ipsum...'
        }];
        
        this.callParent(arguments);
    }
});


