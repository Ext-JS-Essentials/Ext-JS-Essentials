Ext.define('BizDash.store.users.Customers', {
	extend: 'Ext.data.ChainedStore',

	config: {
		source: 'Users',

		filters: [
			{
				property: 'Role',
				value   : 'Customer'
			}
		]
	}
});