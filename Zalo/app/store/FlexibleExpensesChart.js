Ext.define('WebToSms.store.FlexibleExpensesChart', {
    extend: 'Ext.data.Store',
    alias:'widget.flexibleExpensesChart',
    fields: ['label','value'],
    
    proxy: {
         type: 'ajax',
         url: '?controller=default&action=getflexibleexpenses',
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


