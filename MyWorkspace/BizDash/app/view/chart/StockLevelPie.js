Ext.define('BizDash.view.chart.StockLevelPie', {
	//extend: 'Ext.chart.PolarChart',
	extend: 'Ext.Component',

	xtype: 'chart-StockLevelPie',

	config: {
		animate     : true,
		store       : 'Products',
		interactions: 'rotate',
		series      : {
			type  : 'pie',
			label : {
				field  : 'Name',
				display: 'rotate'
			},
			xField: 'Quantity',
			donut : 30
		}
	}
});