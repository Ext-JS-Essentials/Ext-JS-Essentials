Ext.define('BizDash.view.product.ProductFormController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.ProductForm',

	onSave: function(btn){
		var productModel = this.getView().getViewModel().getData().rec;

		productModel.commit();

		this.closeForm();
	},

	onCancel: function(btn){
		var productModel = this.getView().getViewModel().getData().rec;

		productModel.reject();

		this.closeForm();
	},

	closeForm: function(){
		var productForm = this.getView();

		productForm.close();

		productForm.destroy();
	}
});
