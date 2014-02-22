Ext.define('WebToSms.store.Expendings.FixCosts', {
    extend: 'Ext.data.Store',
    alias:'widget.fixCostsExpendings',
    id:'fixCostsExpendingsStore',
    fields:['id','label','value'],
    
    proxy: {
         type: 'ajax',
         url: '?controller=default&action=expendingsfixcosts',
         reader: {
             type: 'json',
             root: 'fixcosts'
         },
         extraParams: {
            id: 11,
            month: '01/2014'
        }
     },
     autoLoad:true 
})


