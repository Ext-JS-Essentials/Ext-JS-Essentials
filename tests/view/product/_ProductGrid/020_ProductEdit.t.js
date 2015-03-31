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

	// get the Details cell for Row #1
	var cell = t.getCell('product-ProductGrid', 0, 4);

	t.chain(
		function(next) {
			// click the button
			t.click(cell);

			// check ProductForm is created
			t.cqExists('product-ProductForm', 'Product Form is displayed');

			next();
		},
		// pause for 10ms to allow form to populate
		{
			waitFor: 'Ms',
			args   : 10
		},
		function(next) {

			// test fields are populated
			t.fieldHasValue('product-ProductForm textfield[fieldLabel="Name"]', 'Product 1', 'Name field has correct value');
			t.fieldHasValue('product-ProductForm textfield[fieldLabel="Description"]', 'Product 1 Description', 'Description field has correct value');
			t.fieldHasValue('product-ProductForm textfield[fieldLabel="Quantity"]', '1', 'Quantity field has correct value');
			t.fieldHasValue('product-ProductForm textfield[fieldLabel="Price"]', '9.99', 'Price field has correct value');

			next();
		},
		function(next) {

			// test changing field value updates grid
			var nameField = Ext.ComponentQuery.query('product-ProductForm textfield[fieldLabel="Name"]')[0];

			nameField.setValue('Updated Product 1');

			t.matchGridCellContent('product-ProductGrid', 0, 0, 'Updated Product 1', 'Cell 0, 0 contents are correct');

			// check the Product model instance is dirty
			t.expect(Ext.getStore('Products').getAt(0).dirty).toEqual(true);

			next();
		},
		function() {

			// test clicking 'Save' button commits record and closes ProductForm
			t.click('>>button[text="Save"]');

			// test ProductForm is removed
			t.cqNotExists('product-ProductForm');

			// check the Product model instance is dirty
			t.expect(Ext.getStore('Products').getAt(0).dirty).toEqual(false);

			t.done();
		}
	);


});



