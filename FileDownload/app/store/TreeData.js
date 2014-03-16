Ext.define('FileDownload.store.TreeData', {
    extend: 'Ext.data.TreeStore',
    root: {
        expanded: true,
        children: [
            { text: "file1",qtip:'Click on file for download', leaf: true, iconCls:'excelIcon' },
            { text: "file2",qtip:'Click on file for download', leaf: true, iconCls:'excelIcon' },
            { text: "file3",qtip:'Click on file for download', leaf: true, iconCls:'excelIcon'}
        ]
    },
    autoLoad:true
});