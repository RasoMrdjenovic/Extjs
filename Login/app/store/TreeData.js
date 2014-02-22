Ext.define('Login.store.TreeData', {
    extend: 'Ext.data.TreeStore',
    root: {
        expanded: true,
        children: [
            { text: "detention", leaf: true, qtitle:{price:527} },
            { text: "homework", expanded: true,qtitle:{price:8589}, children: [
                { text: "book report", leaf: true, qtitle:{price:7852} },
                { text: "algebra", leaf: true, qtitle:{price:4747}}
            ] },
            { text: "buy lottery tickets", leaf: true , qtitle:{price:63875}}
        ]
    }
});