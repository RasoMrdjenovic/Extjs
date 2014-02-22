Ext.define('WebToSms.store.Income.FixCosts', {
    extend: 'Ext.data.Store',
    alias:'widget.fixCosts',
    id:'fixCostsStore',
    fields:['id','label','value'],
    
    proxy: {
         type: 'ajax',
         url: '?controller=default&action=fixcosts',
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


