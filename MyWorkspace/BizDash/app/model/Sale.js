// sencha generate model Sale productId:int,Date:date,Quantity:int,TotalCost:float
	Ext.define('BizDash.model.Sale', {
	    //extend: 'BizDash.model.Base',
	    extend: 'Ext.data.Model',

		requires: [
			'BizDash.model.Product'
		],

		proxy: {
			type  : 'ajax',
			url   : 'data/sale.json',
			reader: {
				type: 'json'
			}
		},

	    fields: [
		    { name: 'productId', type: 'int', reference: 'Product' },
		    { name: 'userId', type: 'int', reference: 'User' },
	        { name: 'Date', type: 'date' },
	        { name: 'Quantity', type: 'int' },
	        { name: 'TotalCost', type: 'float' }
	    ]
	});
