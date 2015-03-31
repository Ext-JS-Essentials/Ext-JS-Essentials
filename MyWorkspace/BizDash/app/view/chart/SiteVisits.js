Ext.define('BizDash.view.chart.SiteVisits', {
	//extend: 'Ext.chart.Chart',
	extend: 'Ext.Component',

	xtype: 'chart-SiteVisits',

	config: {
		animate: true,
		store  : 'WebSiteVisitors',
		series : [
			{
				type  : 'line',
				smooth: false,
				axis  : 'left',
				xField: 'Time',
				yField: 'Visitors'
			}
		],
		axes   : [
			{
				type          : 'numeric',
				grid          : true,
				position      : 'left',
				fields        : ['Visitors'],
				title         : 'Visitors',
				minimum       : 0,
				maximum       : 200,
				majorTickSteps: 5
			},
			{
				type          : 'numeric',
				position      : 'bottom',
				fields        : 'Time',
				title         : 'Time',
				minimum       : 0,
				maximum       : 20,
				decimals      : 0,
				constrain     : true,
				majorTickSteps: 20
			}
		]
	}
});