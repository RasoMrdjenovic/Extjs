Ext.define('GridColumnsDynamic.controller.Startup', {
    extend: 'Ext.app.Controller',
    views: ['Viewport','MainPanel','LeftPanel','Window'],
    refs: [
        {ref: 'viewport', selector: 'viewport'},
        {ref: 'mainPanel', selector: 'mainPanel'},
        {ref: 'grid', selector: 'mainPanel > grid'},
        {ref:'leftPanel', selector:'leftPanel'},
        {ref:'window', selector:'window'}
    ],
    init: function(){
        this.control({
            'mainPanel actioncolumn' : {
                dropRecord : this.drop
            },
            'mainPanel button#addColumn' : {
                click : this.addColumn
            }
        });
    },
    drop: function(grid, rowIndex, colIndex){
        grid.getStore().removeAt(rowIndex);
    },
    addColumn: function(button){
        var me = this, grid = me.getGrid();
     var window = Ext.create('Ext.window.Window', {
            title: 'Add new column',
            height: 200,
            width: 400,
            layout: 'fit',
            items: {
                xtype:'form',
                defaults:{
                    xtype:'textfield',
                    margin:'10 20'
                },
                items:[
                    {
                        fieldLabel:'Text',
                        name:'columnText'
                    },
                    {
                        fieldLabel:'DataIndex',
                        name:'columnDataIndex'
                    }
                ],
                buttons:[
                    {
                        text:'Add',
                        handler: function(btn){
                            var values = this.up('form').getForm().getValues();
                            var column = Ext.create('Ext.grid.column.Column', {text: values.columnText, dataIndex: values.columnDataIndex});
                            grid.headerCt.add(column);
                            grid.store.reload();
                            grid.getView().refresh();
                            window.close();
                        }
                    },
                    {
                        text:'Cancel',
                        handler:function(btn){
                            window.close();
                        }
                    }
                ]
            }
        }).show();
    }
    

})
