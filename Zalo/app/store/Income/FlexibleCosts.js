Ext.define('WebToSms.store.Income.FlexibleCosts', {
    extend: 'Ext.data.Store',
    alias:'widget.flexibleCosts',
    id:'flexibleCostsStore',
    fields:['id','label','value'],
    
    proxy: {
         type: 'ajax',
         url: '?controller=default&action=flexiblecosts',
         reader: {
             type: 'json',
             root: 'flexiblecosts'
         },
         extraParams: {
            id: 11,
            month: '01/2014'
        }
     },
     autoLoad:true 
})


