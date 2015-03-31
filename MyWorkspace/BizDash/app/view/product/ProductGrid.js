Ext.define('BizDash.view.product.ProductGrid', {
	extend: 'Ext.grid.Panel',

	requires: [
		'BizDash.view.product.ProductGridController'
	],

	xtype: 'product-ProductGrid',

	controller: 'ProductGrid',

	store  : 'Products',
	columns: [
		{ text: 'Name', dataIndex: 'Name' },
		{ text: 'Description', dataIndex: 'Description', flex: 1 },
		{
			text     : 'Quantity',
			dataIndex: 'Quantity',
			renderer : function(value, metaData, record, rowIndex, colIndex, store, view) {
				var colour = 'black';

				if (value <= 3) {
					colour = 'red';
				} else if (value > 3 && value <= 7) {
					colour = 'orange';
				}

				return '<span style="color: ' + colour + ';">' + value + '</span>';
			}
		},
		{
			xtype    : 'templatecolumn',
			width    : 200,
			text     : 'Price ',
			dataIndex: 'Price',
			tpl      : '&pound;{Price} <span class="stock-value" style="font-size:0.8em; color: #999;">(&pound;{StockValueConvert})</span>'
		},
		{
			xtype : 'widgetcolumn',
			width : 100,
			text  : 'Action',
			widget: {
				xtype    : 'button',
				text     : 'Details',
				listeners: {
					click: 'onDetailsClick'
				}
			}
		},
		{
			text     : 'Historic Sales',
			xtype    : 'widgetcolumn',
			dataIndex: 'HistoricSales',
			widget   : {
				xtype: 'sparklineline'
			}
		}
	]
});
