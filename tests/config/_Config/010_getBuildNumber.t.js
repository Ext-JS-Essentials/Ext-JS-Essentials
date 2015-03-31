	StartTest(function(t) {

	    t.diag("Config.getBuildNumber");

		var buildNumber = BizDash.config.Config.getBuildNumber();

		t.expect(buildNumber).toEqual('0');

	    t.done();
	});