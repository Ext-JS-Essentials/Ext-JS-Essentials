	var Harness = Siesta.Harness.Browser.ExtJS;

	Harness.configure({
		title: 'ProductGrid Tests',

		preload: [
			'../../../../MyWorkspace/build/production/BizDash/resources/BizDash-all.css',
			'../../../../MyWorkspace/build/production/BizDash/app.js'
		]
	});


	Harness.start(
		{
			group: 'Product Grid',

			items: [
				'010_GridCellContents.t.js',
				'020_ProductEdit.t.js',
				'030_ProductEdit_Cancel.t.js'
			]
		}
	);
