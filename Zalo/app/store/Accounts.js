Ext.define('WebToSms.store.Accounts', {
    extend: 'Ext.data.Store',
    alias:'widget.accounts',
    fields: ['id','label','value'],
    
    proxy: {
         type: 'ajax',
         url: '?controller=default&action=getaccounts',
         reader: {
             type: 'json',
             root: 'accounts'
         },
         extraParams: {
           
        }
     },
     autoLoad:true 
})


