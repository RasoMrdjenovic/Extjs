Ext.define('WebToSms.store.Expendings.FlexibleCosts', {
    extend: 'Ext.data.Store',
    alias:'widget.flexibleCostsExpendings',
    id:'flexibleCostsExpendingsStore',
    fields:['id','label','value'],
    
    proxy: {
         type: 'ajax',
         url: '?controller=default&action=expendingsflexiblecosts',
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


