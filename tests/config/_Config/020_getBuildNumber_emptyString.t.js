	StartTest(function(t) {

	    t.diag("Config.getBuildNumber");

		BizDash.config.Config.setVersion('');

		var buildNumber = BizDash.config.Config.getBuildNumber();

		t.expect(buildNumber).toBeUndefined();

	    t.done();
	});