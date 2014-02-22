Ext.define('Chart.controller.Startup', {
    extend: 'Ext.app.Controller',
    views: ['Viewport','MainPanel'],
    refs: [
        {ref: 'viewport', selector: 'viewport'},
        {ref: 'mainPanel', selector: 'mainPanel'}
    ],
    init: function(){
        this.control({
            
        });
    }
    

})
