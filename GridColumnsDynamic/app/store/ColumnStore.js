Ext.define('TreeToGrid.store.ColumnStore', {
    extend: 'Ext.data.Store',
    fields:[
        'text','dataIndex', 'width'
    ],
    data:[
        {text:'name',dataIndex:'name',width: '40%'},
        {text:'price',dataIndex:'price',width: '40%'}
    ]
})