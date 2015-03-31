/**
 * BizDash.store.Products
 */
	Ext.define('BizDash.store.Products', {
		extend: 'Ext.data.Store',

		model: 'BizDash.model.Product',

		autoLoad: true,
		proxy: {
			type  : 'ajax',
			url   : 'data/products.json',
			reader: {
				type        : 'json',
				rootProperty: 'rows'
			}
		}

	});