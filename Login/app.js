Ext.application({
    name: 'Login',
    controllers: ['Startup'],
    autoCreateViewport: false,
    launch: function() {      
        Ext.create('Login.view.Login');
    }
});
