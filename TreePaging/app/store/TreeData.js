Ext.define('TreePaging.store.TreeData', {
    extend: 'Ext.data.TreeStore',
    proxy: {
        type: 'ajax',
        url: '/extjs/TreePaging/data.php'
    },
    root: {
        text: 'Dummy data',
        id: 'src',
        expanded: true
    }
});
