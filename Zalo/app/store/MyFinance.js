Ext.define('WebToSms.store.MyFinance', {
    extend: 'Ext.data.Store',
    alias:'widget.myFinance',
    fields: ['month','income','expendings','wishes','savings'],
    
    proxy: {
         type: 'ajax',
         url: '?controller=default&action=getbalance',
         reader: {
             type: 'json',
             root: 'balance'
         },
         extraParams: {
            id: 2000
        }
     },
     autoLoad:true 
})


