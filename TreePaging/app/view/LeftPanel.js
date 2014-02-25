Ext.define('TreePaging.view.LeftPanel', {
    requires:[
        'TreePaging.store.TreeData'
    ],
    extend: 'Ext.Panel',
    alias:'widget.leftPanel',
    xtype:'leftPanel',
    region:'west',
    layout:'fit',
    width:'20%',
    split:true,
    treeStart: 0,                    
    treeLimit: 3,  //nodes per page
    initComponent: function() {
        var self = this;
        var store = Ext.create('TreePaging.store.TreeData');
        store.load({
            params:{
                start : self.treeStart,
                limit: self.treeLimit
            }
        });
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
              },
              bbar:[
                  {
                      text:'<< Prev',
                      id:'prevPage',
                      handler : this.prevPage,
                      disabled : true
                  },
                  {
                      xtype:'splitter'  
                  },
                  {
                      text: 'Next >>',
                      id:'nextPage',
                      handler: this.nextPage
                  }
              ]
        }];
        this.callParent(arguments);
    },
    nextPage : function(btn){
        Ext.getCmp('prevPage').setDisabled(false);
        var tree = btn.up('treepanel');
        var nodes = tree.getRootNode().childNodes.length; 
        var self = tree.up('panel');
        if(nodes < self.treeLimit){   //if there is less nodes then we got per page disable next button 
            btn.setDisabled(true);
            return false;
        }
        self.treeStart = self.treeStart + self.treeLimit;
        tree.store.load({
            params:{
                start : self.treeStart,
                limit : self.treeLimit
            }
        });
        
    },
    prevPage : function(btn){
        var tree = btn.up('treepanel');
        var self = tree.up('panel');
        if(self.treeStart == 0){        // if start reaches 0 disable previous button
            btn.setDisabled(true);
            return false;
        }
        Ext.getCmp('nextPage').setDisabled(false);
        self.treeStart = self.treeStart - self.treeLimit;
        tree.store.reload({
            params:{
                start : self.treeStart,
                limit : self.treeLimit
            }
        });
    }
})