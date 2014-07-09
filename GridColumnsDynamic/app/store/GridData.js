Ext.define('GridColumnsDynamic.store.GridData', {
    extend: 'Ext.data.Store',
    fields:[
        'name','price'
    ],
    data:[
        {name:'foo',price:'5656'},
        {name:'bar',price:'4545'}
    ]
})