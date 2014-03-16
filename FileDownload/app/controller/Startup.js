Ext.define('FileDownload.controller.Startup', {
    extend: 'Ext.app.Controller',
    views: ['Viewport','MainPanel','LeftPanel'],
    refs: [
        {ref: 'viewport', selector: 'viewport'},
        {ref: 'mainPanel', selector: 'mainPanel'},
        {ref:'leftPanel', selector:'leftPanel'} 
    ],
    init: function(){
        this.control({
            'leftPanel > #tree ' : {
                itemclick : this.onTreeItemClick
            }
        });
    },
    
    onTreeItemClick: function(view,node){
        var exportApiUrl = 'static/' + node.data.text + '.xlsx';
        var body = Ext.getBody();
        var frame = body.createChild({
        tag:'iframe',
        cls:'x-hidden',
        id:'hiddenform-iframe',
        name:'iframe'
        });
        var form = body.createChild({
        tag:'form',
        cls:'x-hidden',
        id:'hiddenform-form',
        action: exportApiUrl,
        target:'iframe'
        });
        form.dom.submit();
    }

})
