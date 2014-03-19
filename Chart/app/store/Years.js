Ext.define('Chart.store.Years', {
   extend: 'Ext.data.JsonStore',
   storeId:'yearStore',
   model:'Chart.model.Year',
   data: [
        {'year':'2013'},
        {'year':'2014'}
   ]
});