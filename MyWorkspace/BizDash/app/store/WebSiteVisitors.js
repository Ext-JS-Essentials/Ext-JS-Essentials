Ext.define('BizDash.store.WebSiteVisitors', {

	extend: 'Ext.data.Store',

	model: 'BizDash.model.WebSiteVisitor',

	proxy: {
		type  : 'ajax',
		url   : 'data/visitors.json',
		reader: {
			type        : 'json',
			rootProperty: 'rows'
		}
	}
});