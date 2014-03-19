Ext.define('Chart.controller.Startup', {
    extend: 'Ext.app.Controller',
    views: ['Viewport','MainPanel'],
    stores:['Chart'],
    refs: [
        {ref: 'viewport', selector: 'viewport'},
        {ref: 'mainPanel', selector: 'mainPanel'}
    ],
    init: function(){
        this.control({
            'mainPanel combo[action=changeYear]' : {
                change : this.changeYear
            }
        });
    },
    changeYear : function(combo){
        this.getMainPanel().down('chart').store.clearFilter(true);
        this.getMainPanel().down('chart').store.filter('year',combo.getValue());
    }
    

})
