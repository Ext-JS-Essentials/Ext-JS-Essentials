StartTest(function(t) {

	t.diag("Product Grid Contents");

	var productsStore = Ext.getStore('Products');

	productsStore.removeAll();
	productsStore.add([
		{

			"id"         : 1,
			"Name"       : "Product 1",
			"Description": "Product 1 Description",
			"Quantity"   : 1,
			"Price"      : 9.99
		},
		{

			"id"         : 2,
			"Name"       : "Product 2",
			"Description": "Product 2 Description",
			"Quantity"   : 5,
			"Price"      : 2.99
		},
		{

			"id"         : 3,
			"Name"       : "Product 3",
			"Description": "Product 3 Description",
			"Quantity"   : 1000,
			"Price"      : 5.49
		}
	]);

	t.chain(
		{ click: "button[text=Details] => .x-btn-button", offset: [10, 13] },

		function(next) {
			t.cqExists('product-ProductForm', 'Product Form is displayed');

			next();
		},

		{ click: "product-ProductForm[title=Product 1] textfield[inputType=text] => .x-form-text", offset: [127, 10] },

		{ action: "type", text: " Updated" },

		function(next) {

			t.matchGridCellContent('product-ProductGrid', 0, 0, 'Product 1 Updated', 'Cell 0, 0 contents are correct');

			// check the Product model instance is dirty
			t.expect(Ext.getStore('Products').getAt(0).dirty).toEqual(true);

			next();
		},

		{ click: "button[text=Cancel] => .x-btn-inner", offset: [16, 1] },

		function() {

			// test ProductForm is removed
			t.cqNotExists('product-ProductForm');

			// check the Product model instance is dirty
			t.expect(Ext.getStore('Products').getAt(0).dirty).toEqual(false);

			t.done();
		}
	);
});
