Ext.define('Login.view.LeftPanel', {
    requires:[
        'Login.store.TreeData'
    ],
    extend: 'Ext.Panel',
    alias:'widget.leftPanel',
    xtype:'leftPanel',
    region:'west',
    layout:'fit',
    width:'20%',
    split:true,
    tbar:[
        {
            text:'Welcome, Raso'
        },
        {
            xtype: 'button',
            icon: '../resources/images/logout.png',
            text:'Logout',
            action:'logout'
        }
    ],
    initComponent: function() {
        var store = Ext.create('Login.store.TreeData');
        this.items = [{
              xtype:'treepanel',
              title:'Tree',
              store:store,
              rootVisible:true,         
              viewConfig: {
                    plugins: {
                        ptype: 'treeviewdragdrop',
                        ddGroup: 'books'
                    }
                }
        }];
        
        this.callParent(arguments);
    }
})