Ext.define('WebToSms.store.SavingsChart', {
    extend: 'Ext.data.Store',
    alias:'widget.savingsByMonth',
    fields: ['label','value'],
    
    proxy: {
         type: 'ajax',
         url: '?controller=default&action=getsavingsbymonth',
         reader: {
             type: 'json',
             root: 'savings'
         },
         extraParams: {
            month: '01/2014'
        }
     },
     autoLoad:true 
})


