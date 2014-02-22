Ext.define('WebToSms.store.WishesChart', {
    extend: 'Ext.data.Store',
    alias:'widget.wishesByMonth',
    fields: ['label','value'],
    
    proxy: {
         type: 'ajax',
         url: '?controller=default&action=getwishesbymonth',
         reader: {
             type: 'json',
             root: 'wishes'
         },
         extraParams: {
            month: '01/2014'
        }
     },
     autoLoad:true 
})


