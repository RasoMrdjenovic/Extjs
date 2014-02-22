Ext.define('WebToSms.store.Provisions', {
    extend: 'Ext.data.Store',
    alias:'widget.provisions',
    fields: ['label','value'],
    
    proxy: {
         type: 'ajax',
         url: '?controller=default&action=getprovisions',
         reader: {
             type: 'json',
             root: 'provisions'
         },
         extraParams: {
            month: '01/2014'
        }
     },
     autoLoad:true 
})


