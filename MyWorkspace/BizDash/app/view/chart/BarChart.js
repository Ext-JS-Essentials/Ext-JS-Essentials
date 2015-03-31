Ext.define('BizDash.view.chart.BarChart', {
	//extend: 'Ext.chart.Chart',
	extend: 'Ext.Component',

	xtype: 'chart-BarChart',

	config: {
		animate: true,
		store  : 'BarChart',
		axes   : [
			{
				type    : 'numeric',
				position: 'bottom',
				fields  : ['value'],
				title   : 'Value'
			},
			{
				type    : 'category',
				position: 'left',
				fields  : ['name'],
				title   : 'Name'
			}
		],
		series : [
			{
				type  : 'bar',
				axis  : 'bottom',
				xField: 'name',
				yField: 'value'
			}
		]
	}
});