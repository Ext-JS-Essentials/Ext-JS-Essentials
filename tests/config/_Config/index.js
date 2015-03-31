	var Harness = Siesta.Harness.Browser.ExtJS;

	Harness.configure({
		title: 'Config Tests',

		preload: [
			'../../../MyWorkspace/build/production/BizDash/resources/BizDash-all.css',
			'../../../MyWorkspace/build/production/BizDash/app.js'
		]
	});


	Harness.start(
		{
			group: 'Config',

			items: [
				'010_getBuildNumber.t.js',
				'020_getBuildNumber_emptyString.t.js',
				'030_getBuildNumber_null.t.js'
			]
		}
	);
