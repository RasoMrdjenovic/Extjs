Ext.define('WebToSms.store.AccountGoals', {
    extend: 'Ext.data.Store',
    alias:'widget.accountGoals',
    fields: ['id','label','progress','goal'],
    
    proxy: {
         type: 'ajax',
         url: '?controller=default&action=getaccountgoals',
         reader: {
             type: 'json',
             root: 'accounts'
         },
         extraParams: {
           
        }
     },
     autoLoad:true 
})


