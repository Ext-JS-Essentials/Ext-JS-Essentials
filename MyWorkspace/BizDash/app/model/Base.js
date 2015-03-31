Ext.define('BizDash.model.Base', {
	extend: 'Ext.data.Model',

	fields: [{
		name: 'id',
		type: 'int'
	}],

	schema: {
		namespace: 'BizDash.model',  // generate auto entityName

		proxy: {     // Ext.util.ObjectTemplate
			type: 'ajax',
			url: 'data/{entityName}.json',
			reader: {
				type: 'json'
			}
		}
	}
});