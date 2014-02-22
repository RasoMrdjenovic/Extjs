Ext.define('WebToSms.store.FinanceChartByMonth', {
    extend: 'Ext.data.Store',
    alias:'widget.financeByMonth',
    fields: ['label','income', 'expenses', 'wishes', 'savings'],
    
    proxy: {
         type: 'ajax',
         url: '?controller=default&action=getfinancebymonth',
         reader: {
             type: 'json',
             root: 'balance'
         },
         extraParams: {
            month: '01/2014'
        }
     },
     autoLoad:true 
})


