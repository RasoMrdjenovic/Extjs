Ext.define('Chart.view.MainPanel', {
    requires:[
      'Chart.store.Chart',
      'Chart.store.Years'
    ],
    extend: 'Ext.Panel',
    alias:'widget.mainPanel',
    xtype:'mainPanel',
    region:'center',
    split:true,
    width:'100%',
    height:'100%',
    title:'Chart example',
    initComponent: function() {
        var store = Ext.create('Chart.store.Chart', 2013);
        var years = Ext.create('Chart.store.Years');
        var chart = Ext.create('Ext.chart.Chart', {
            style:'display:block; margin: 150 auto',
            width: 1200,
            height: 400,
            animate: {
                easing: 'elasticIn',
                duration: 1500
            },
            store: store,
            legend: {
              position: 'right'
            },
            axes: [{
                type: 'Numeric',
                position: 'left',
                fields: ['price'],
                title: 'Total',
                grid: true,
                minimum: 0,
                maximum:3000,
                step:200
            }, {
                type: 'Category',
                position: 'bottom',
                fields: ['month'],
                title: 'Month'
            }],
            series: [{
                type: 'column',
                axis: 'bottom',
                highlight: true,
                tips: {
                  trackMouse: true,
                  width: 250,
                  height: 28,
                  renderer: function(storeItem, item) {
                    this.setTitle('Total ' + storeItem.get(item.yField) + ' ' + item.yField + ' for ' + storeItem.get('month'));
                  }
                },
                label: {
                    display: 'insideEnd',
                    field: ['price', 'ammount', 'size'],
                    renderer: Ext.util.Format.numberRenderer('0'),
                    orientation: 'horizontal',
                    color: '#333',
                    'text-anchor': 'middle'
                },
                xField: 'month',
                yField: ['price', 'ammount', 'size']
            }]
        });
        Ext.apply(this, {
            items: [
                {
                    xtype:'combo',
                    editable: false,
                    allowBlank:false,
                    action:'changeYear',
                    width:300,
                    margin:'30 50%',
                    queryMode: 'local',
                    displayField: 'year',
                    valueField: 'year',
                    fieldLabel:'Year:',
                    labelWidth:50,
                    store:years,
                    emptyText:'Choose year'
                },
                chart
            ]
        });
        this.callParent(arguments);
    }
})


