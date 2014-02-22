Ext.define('Chart.store.Chart', {
   extend: 'Ext.data.JsonStore',
   storeId:'chartStore',
   fields: ['month', 'price', 'ammount', 'size'],
   data: [
        { 'month': 'Jan',   'price':1000, 'ammount':200, 'size':2000 },
        { 'month': 'Feb',   'price': 1700, 'ammount':542, 'size':252 },
        { 'month': 'Mar', 'price': 1500, 'ammount':542, 'size':696},
        { 'month': 'Apr',  'price': 1200, 'ammount':252, 'size':2225 },
        { 'month': 'Maj',  'price':2705 , 'ammount':888, 'size':785},
        { 'month': 'Jun',   'price':1000, 'ammount':788 , 'size':525},
        { 'month': 'Jul',   'price': 1700, 'ammount':875, 'size':2000 },
        { 'month': 'Avg', 'price': 1500, 'ammount':744, 'size':3000 },
        { 'month': 'Sep',  'price': 1200 , 'ammount':474, 'size':2500},
        { 'month': 'Okt',  'price':2744, 'ammount':141, 'size':2400 },
        { 'month': 'Nov',  'price': 2200, 'ammount':140 , 'size':2400},
        { 'month': 'Dec',  'price':270, 'ammount':140, 'size':2600 }
    ]
});