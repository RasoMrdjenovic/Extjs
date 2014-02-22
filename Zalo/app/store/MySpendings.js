Ext.define('WebToSms.store.MySpendings', {
    extend: 'Ext.data.Store',
    alias:'widget.mySpendings',
    fields: ['label','value'],
    
    proxy: {
         type: 'ajax',
         url: '?controller=default&action=getspendings',
         reader: {
             type: 'json',
             root: 'spendings'
         },
         extraParams: {
            month: '01/2014'
        }
     },
     autoLoad:true 
})


