Ext.define('WebToSms.store.Expendings.Provisions', {
    extend: 'Ext.data.Store',
    alias:'widget.provisionsCostsExpendings',
    id:'provisionsCostsExpendingsStore',
    fields:['id','label','value'],
    
    proxy: {
         type: 'ajax',
         url: '?controller=default&action=expendingsprovisionscosts',
         reader: {
             type: 'json',
             root: 'provisions'
         },
         extraParams: {
            id: 11,
            month: '01/2014'
        }
     },
     autoLoad:true 
})


