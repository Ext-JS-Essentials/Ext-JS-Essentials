// sencha generate model Location Name:string,Row:int,Shelf:int
Ext.define('BizDash.model.Location', {
	//extend: 'BizDash.model.Base',
	extend: 'Ext.data.Model',

	manyToMany: [
		'Product'
	],

	fields: [
		{ name: 'Name', type: 'string' },
		{ name: 'Row', type: 'int' },
		{ name: 'Shelf', type: 'int' }

	]
});