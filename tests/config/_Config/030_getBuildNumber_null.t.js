	StartTest(function(t) {

	    t.diag("Config.getBuildNumber");

		BizDash.config.Config.setVersion(null);

		t.expect(BizDash.config.Config.getBuildNumber).toThrow();

	    t.done();
	});