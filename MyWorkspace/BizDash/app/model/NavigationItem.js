/**
 * BizDash.model.NavigationItem
 */
	Ext.define('BizDash.model.NavigationItem', {

		extend: 'Ext.data.TreeModel',

		fields: [
			{
				name: 'Label',
				type: 'string'
			},
			{
				name: 'Route',
				type: 'string'
			}
		]
	});