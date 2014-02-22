Ext.define('WebToSms.controller.Startup', {
    extend: 'Ext.app.Controller',
    views: ['Viewport',
            'Workspace.Dashboard', 
            'Workspace.Budget',
            'Workspace.Savings',
            'Workspace.Wishes',
            'Workspace.Tips',
            'Menu',
            'TabPanel',
            'Workspace.Budget.Income',
            'Workspace.Budget.Expendings'
            
           ],
 //   stores:['MyFinance','Income.FixCosts','Income.FlexibleCosts','Expendings.FixCosts','Expendings.FlexibleCosts'],
    refs: [
        {ref: 'viewport', selector: 'viewport'},
        {ref: 'tabPanel', selector: 'tabpanel'},
        {ref: 'menu', selector: 'menu'},
        
    ],
    requires: [
    
        'WebToSms.view.Viewport',
        'WebToSms.view.Menu',
        'WebToSms.view.TabPanel',
        'WebToSms.view.Workspace.Dashboard',
        'WebToSms.view.Workspace.Budget',
        'WebToSms.view.Workspace.Budget.Income',
        'WebToSms.view.Workspace.Budget.Expendings'
    ],
    init: function(){
        this.control({
            
            'menu button[action=menu]': {
                click: this.addWorkspace
            }
        });
    },
    addWorkspace: function(btn){
        var item = {
            xtype:btn.value
        
        };
        var tab = this.getTabPanel().items.find(function(i){
                       return i.id === btn.value;
                  });
        if(!tab){
           this.getTabPanel().add(item).show();
        }else{
           this.getTabPanel().setActiveTab(btn.value);
//           this.getViewport().doLayout();
        }               
       
    }
    

})
