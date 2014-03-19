Ext.define('Chart.store.Chart', {
   extend: 'Ext.data.JsonStore',
   storeId:'chartStore',
   model:'Chart.model.Chart',
   constructor: function (year) {
      this.callParent(arguments);
      this.filter('year',year);
   },
   data: [
        {'year':2013, 'month': 'Jan',   'price':1000, 'ammount':200, 'size':2000 },
        {'year':2013, 'month': 'Feb',   'price': 1700, 'ammount':542, 'size':252 },
        {'year':2013, 'month': 'Mar', 'price': 1500, 'ammount':542, 'size':696},
        {'year':2013, 'month': 'Apr',  'price': 1200, 'ammount':252, 'size':2225 },
        {'year':2013, 'month': 'Maj',  'price':2705 , 'ammount':888, 'size':785},
        {'year':2013, 'month': 'Jun',   'price':1000, 'ammount':788 , 'size':525},
        {'year':2013, 'month': 'Jul',   'price': 1700, 'ammount':875, 'size':2000 },
        {'year':2013, 'month': 'Avg', 'price': 1500, 'ammount':744, 'size':3000 },
        {'year':2013, 'month': 'Sep',  'price': 1200 , 'ammount':474, 'size':2500},
        {'year':2013, 'month': 'Okt',  'price':2744, 'ammount':141, 'size':2400 },
        {'year':2013, 'month': 'Nov',  'price': 2200, 'ammount':140 , 'size':2400},
        {'year':2013, 'month': 'Dec',  'price':885, 'ammount':140, 'size':2600 },
        {'year':2014, 'month': 'Jan',   'price':656, 'ammount':2200, 'size':200 },
        {'year':2014, 'month': 'Feb',   'price': 1750, 'ammount':5452, 'size':852 },
        {'year':2014, 'month': 'Mar', 'price': 1800, 'ammount':1542, 'size':896},
        {'year':2014, 'month': 'Apr',  'price': 1250, 'ammount':252, 'size':1225 },
        {'year':2014, 'month': 'Maj',  'price':1705 , 'ammount':1888, 'size':1785},
        {'year':2014, 'month': 'Jun',   'price':2000, 'ammount':1788 , 'size':525},
        {'year':2014, 'month': 'Jul',   'price': 1900, 'ammount':875, 'size':1000 },
        {'year':2014, 'month': 'Avg', 'price': 2500, 'ammount':744, 'size':3000 },
        {'year':2014, 'month': 'Sep',  'price': 1250 , 'ammount':1274, 'size':1500},
        {'year':2014, 'month': 'Okt',  'price':1744, 'ammount':1410, 'size':400 },
        {'year':2014, 'month': 'Nov',  'price': 2200, 'ammount':840 , 'size':1400},
        {'year':2014, 'month': 'Dec',  'price':2270, 'ammount':740, 'size':2000 }
    ]
});