	Ext.define('Overrides.config.Config', {

		override: 'BizDash.config.Config',
		compatibility: '5.0.0',

		getBuildNumber: function(){
			return 'Build Number: ' + this.callParent(arguments);
		}

	});