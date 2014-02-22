Ext.define('WebToSms.store.FixExpensesChart', {
    extend: 'Ext.data.Store',
    alias:'widget.fixExpensesChart',
    fields: ['label','value'],
    
    proxy: {
         type: 'ajax',
         url: '?controller=default&action=getfixexpenses',
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


