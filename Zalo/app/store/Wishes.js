Ext.define('WebToSms.store.Wishes', {
    extend: 'Ext.data.Store',
    alias:'widget.wishes',
    fields: ['id','label','value','progress','valuePerMonth','date','image'],
    
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


