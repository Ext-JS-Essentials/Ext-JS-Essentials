/**
 * BizDash.store.Users
 */
Ext.define('BizDash.store.Users', {

	extend: 'Ext.data.Store',

	model: 'BizDash.model.User',

	/*proxy: {
	 type: 'localstorage',
	 id  : 'users'
	 }*/

	autoLoad: true,

	proxy: {
		//type  : 'rest',
		//url   : 'users/index.php',
		type: 'ajax',
		api   : {
			create : 'user-add.php',
			read   : 'data/users.json',
			update : 'user-update.php',
			destroy: 'user-delete.php'
		},
		reader: {
			type        : 'json',
			rootProperty: 'rows'
		},
		writer: {
			type          : 'json',
			writeAllFields: true,
			transform     : {
				fn: function(data, request) {
					data.Email = data.Email.toLowerCase();

					return data;
				}
			}
		}
	}

});