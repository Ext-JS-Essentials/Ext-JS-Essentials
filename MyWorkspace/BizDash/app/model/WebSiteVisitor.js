Ext.define('BizDash.model.WebSiteVisitor', {
	extend: 'Ext.data.Model',

	fields: [
		{
			name: 'Time',
			type: 'int'
		},
		{
			name: 'Visitors',
			type: 'int'
		}
	]
});