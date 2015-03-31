/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('BizDash.view.main.Main', {
    extend: 'Ext.container.Container',

    xtype: 'app-main',

    controller: 'main',
    viewModel: {
        type: 'main'
    },

    layout: {
        type: 'border'
    },

    items: [{
        xtype: 'navigation-NavigationTree',
	    region: 'west',
	    width: 200
    },
	    {
		    region: 'center',
		    //xtype : 'user-UsersView'
		    xtype : 'product-ProductGrid'
	    }],


    getButton: function () {
        return this.query('button[text="Button"]')[0];
    }
});
