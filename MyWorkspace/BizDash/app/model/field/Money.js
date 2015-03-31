/**
 * BizDash.model.field.Money
 */
Ext.define('BizDash.model.field.Money', {

	extend: 'Ext.data.field.Number',

	requires: [
		'Ext.data.validator.Range'
	],

	alias: 'data.field.money',

	validators: [
		{
			type: 'range',
			min : 0
		}
	],

	getType: function() {
		return 'money';
	}

});