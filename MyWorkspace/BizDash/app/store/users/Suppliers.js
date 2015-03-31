Ext.define('BizDash.store.users.Suppliers', {
	extend: 'Ext.data.ChainedStore',

	config: {
		source: 'Users',

		filters: [
			{
				property: 'Role',
				value   : 'Supplier'
			}
		]
	}
});