Ext.define('WebToSms.view.Menu', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.menu',
    xtype:'menu',
    initComponent: function() {
        Ext.apply(this, {
            items: [
                {
                    xtype:'button',
                    text:'Dashboard',
                    value:'dashboard',
//                    id:'dashboard',
                    cls:'menuBtn',
                    style:'background: none!important',
                    border:false,
                    action:'menu'
                },
                {
                    xtype:'button',
                    text:'Budget',
                    value:'budget',
//                    id:'budget',
                    cls:'menuBtn',
                    style:'background: none!important',
                    border:false,
                    action:'menu'
                },
                {
                    xtype:'button',
                    text:'Savings',
                    value:'savings',
//                    id:'savings',
                    cls:'menuBtn',
                    style:'background: none!important',
                    border:false,
                    action:'menu'
                },
                {
                    xtype:'button',
                    text:'Wishes',
                    cls:'menuBtn',
                    value:'wishes',
                    style:'background: none!important',
                    border:false,
//                    id:'wishes',
                    action:'menu'
                },
                {
                    xtype:'button',
                    text:'Tips',
                    cls:'menuBtn',
                    value:'tips',
                    style:'background: none!important',
                    border:false,
//                    id:'tips',
                    action:'menu'
                }
            ]
        })
        this.callParent(arguments);
    }
})


