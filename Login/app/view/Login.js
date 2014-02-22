Ext.define('Login.view.Login' ,{
    extend: 'Ext.container.Viewport',
    alias : 'widget.loginview', 
    requires:[
        'Ext.fx.Anim'
    ],
    layout:'fit',
    initComponent: function() {
    var self = this;    
    Ext.apply(this, {
        items: [
            {
                xtype:'panel',
          //      bodyStyle:{"background":"url('resources/images/vipLogin.jpg') no-repeat !important","background-size":"800px 500px !important"},
                layout: {
                    type: 'vbox',
                    align: 'center',
                    pack: 'center'
                },
                items:[
                    {
                        xtype:'form',
                        width:500,
                        height:200,
                        hidden: true,
                        id:'loginFormPanel',
                        frame: true,
                        title:'Login',
                        items:[
                            {
                                    xtype: 'textfield',
                                    fieldLabel: 'User',
                                    margin:'30 20 10 20',
                                    labelWidth:40,
                                    width:'80%',
                                    name: 'username',
                                    itemId: 'username',
                                    allowblank: false
                            },
                            {
                                    xtype: 'textfield',
                                    fieldLabel: 'Password',
                                    name: 'password',
                                    margin:'10 20 0 20',
                                    labelWidth:40,
                                    width:'80%',
                                    itemId: 'password',
                                    allowblank: false,
                                    inputType: 'password'
                            },
                            {
                                     xtype:'displayfield',
                                     value:'(raso,raso)',
                                     margin:'10 0 0 100'
                            }
                        ],
                        buttons:[
                            {
                                text: 'Login',
                                listeners :{
                                    click: function(){
                                            var username = this.up('form').down('#username').getValue();
                                            var password = this.up('form').down('#password').getValue();
                                            this.fireEvent('signin', username, password);
                                    }
                                }
                            }
                        ],
                        listeners:{
                            'afterrender' : function(form){
                                Ext.create('Ext.fx.Anim', {
                                    target: form,
                                    duration: 1500,
                                    from: {
                                        opacity: 0.05
                                    },
                                    to: {
                                        opacity: 1.00
                                    }
                                })
                                form.show();                     
                            }
                        }
                    }
                ]
            }
                    
        ]
  })
  this.callParent(arguments);
 }
	
});
