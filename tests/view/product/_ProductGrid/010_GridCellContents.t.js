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

		// test Row 0, Cell 0
		t.matchGridCellContent('product-ProductGrid', 0, 0, 'Product 1', 'Cell 0, 0 contents are correct');

		// test Row 1, Cell 0
		t.matchGridCellContent('product-ProductGrid', 1, 0, 'Product 2', 'Cell 1, 0 contents are correct');

	    t.done();
	});



