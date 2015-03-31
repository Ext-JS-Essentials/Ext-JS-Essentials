// sencha generate model User Name:string,Email:string,TelNumber:string,Role:string
Ext.define('BizDash.model.User', {
	//extend: 'BizDash.model.Base',
	extend: 'Ext.data.Model',

	proxy: {
		type  : 'ajax',
		url   : 'data/user.json',
		reader: {
			type: 'json'
		}
	},

/*	hasMany: [
		{
			model: 'BizDash.model.Sale',
			name: 'sales'
		}
	],*/
    
    fields: [
        { name: 'Name', type: 'string' },
        { name: 'Email', type: 'string' },
        { name: 'TelNumber', type: 'string' },
        { name: 'Role', type: 'string' },
        { name: 'Photo', type: 'string' }
    ]
});
