Ext.define('BizDash.view.product.ProductGridController', {
	extend: 'Ext.app.ViewController',

	alias: 'controller.ProductGrid',

	onDetailsClick: function(btn) {
		var rec = btn.getWidgetRecord(),
			productForm = Ext.create('BizDash.view.product.ProductForm', {
				floating: true,
				modal   : true,
				closable: true,
				center  : true,
				width   : 500,
				height  : 300
			});

		productForm.getViewModel().setData({
			rec: rec
		});

		productForm.show();
	}
});
