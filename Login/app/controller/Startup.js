Ext.define('Login.controller.Startup', {
    extend: 'Ext.app.Controller',
    views: ['Viewport','MainPanel','LeftPanel','Login'],
    refs: [
        {ref: 'viewport', selector: 'viewport'},
        {ref: 'mainPanel', selector: 'mainPanel'},
        {ref:'leftPanel', selector:'leftPanel'},
        {ref: 'loginview',selector: 'loginview'}
    ],
    init: function(){
        this.control({
            'loginview button': {
                signin: this.signinuser
            },
            'leftPanel button[action=logout]':{
                click: this.logout
            }
        });
    },
    signinuser : function(username, password){
        var self = this;
        if(username == 'raso' && password == 'raso'){
            self.getLoginview().destroy();
            Ext.create('Login.view.Viewport');
        }
        
        //to check credentials in backend use ajax :
//        Ext.Ajax.request({
//           url: '/some_path/controllers/login',
//           params: { username: username, password: password },
//           success: function(res){
//                var result = Ext.decode(res.responseText);
//                if(result.success){
//                     self.getLoginview().destroy();
//                     Ext.create('Login.view.Viewport');
//                }else{
//                     Ext.example.msg('Failed!','Wrong credentials');
//                }
//           },
//           failure: function(){ Ext.example.msg('Failed!','Some error!'); }
//         })
    },
    logout: function(){
        this.getViewport().destroy();
        Ext.create('Login.view.Login');
    }
    

})
