	Ext.define('BizDash.config.Config', {
		extend: 'Ext.util.Observable',

		singleton: true,

		requires: ['BizDash.config.Constants'],

		config: {
			version: '0.0.1-0',

			isPhone  : false,
			isTablet : false,
			isDesktop: false
		},

		platformConfig: [
			{
				platform: ['phone'],
				isPhone : true
			},
			{
				platform: ['tablet'],
				isTablet: true
			},
			{
				platform : ['desktop'],
				isDesktop: true
			}
		],

		constructor: function(config){
			this.initConfig(config);

			this.callParent([config]);
		},

		getBuildNumber: function() {
			var versionSplit = this.getVersion().split('-');

			return versionSplit[1];
		},

		applyVersion: function(newVersion, oldVersion){
			return newVersion;
		},

		updateVersion: function(newVersion, oldVersion){
			if(this.hasListeners) {
				this.fireEvent('versionchanged', newVersion, oldVersion);
			}
		}

	}, function() {

		/*console.log('BizDash.config.Config defined');

		// logs "true"
		console.log(BizDash.config.Config.isInstance);

		// logs "0.0.1-0"
		console.log(BizDash.config.Config.version);

		// logs "0"
		console.log(BizDash.config.Config.getBuildNumber());

		// logs "function(){..}"
		console.log(BizDash.config.Config.on);*/

		// logs "true", "false", "false"
		console.log(BizDash.config.Config.getIsDesktop());
		console.log(BizDash.config.Config.getIsPhone());
		console.log(BizDash.config.Config.getIsTablet());
	});