Ext.define('WebToSms.store.MySavings', {
    extend: 'Ext.data.Store',
    alias:'widget.mySavings',
    fields: ['month','savings'],
    
    proxy: {
         type: 'ajax',
         url: '?controller=default&action=getsavings',
         reader: {
             type: 'json',
             root: 'savings'
         }
     },
     autoLoad:true 
})


