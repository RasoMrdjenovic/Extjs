Ext.define('TreeToGrid.controller.Startup', {
    extend: 'Ext.app.Controller',
    views: ['Viewport','MainPanel','LeftPanel'],
    refs: [
        {ref: 'viewport', selector: 'viewport'},
        {ref: 'mainPanel', selector: 'mainPanel'},
        {ref:'leftPanel', selector:'leftPanel'} 
    ],
    init: function(){
        this.control({
            'mainPanel actioncolumn' : {
                dropRecord : this.drop
            }
        });
    },
    drop: function(grid, rowIndex, colIndex){
        grid.getStore().removeAt(rowIndex);
    }
    

})
