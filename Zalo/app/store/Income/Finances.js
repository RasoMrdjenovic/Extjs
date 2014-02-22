Ext.define('WebToSms.store.Income.Finances', {
    extend: 'Ext.data.Store',
    alias:'widget.incomeFinances',
    id:'incomeFinances',
    fields:['label','value'],
    
    proxy: {
         type: 'ajax',
         url: '?controller=default&action=gettotal',
         reader: {
             type: 'json',
             root: 'total'
         },
         extraParams: {
            id: 11,
            month: '01/2014'
        }
     },
     autoLoad:true 
})


