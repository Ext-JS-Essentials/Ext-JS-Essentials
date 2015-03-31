Ext.define('BizDash.store.users.Admins', {
    extend: 'Ext.data.ChainedStore',

    config: {
        source: 'Users',

	    filters: [
		    {
			    property: 'Role',
			    value: 'Administrator'
		    }
	    ]
    }
});