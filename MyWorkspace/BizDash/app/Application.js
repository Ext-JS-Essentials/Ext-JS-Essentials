/**
 * The main application class. An instance of this class is created by app.js when it calls
 * Ext.application(). This is the ideal place to handle application launch and initialization
 * details.
 */

Ext.Loader.setConfig({
	paths: {
		Ext    : '../ext/src',
		BizDash: 'app'
	}
});

Ext.define('BizDash.Application', {
	extend: 'Ext.app.Application',

	name: 'BizDash',

	requires: [
		'BizDash.config.Config',
		'BizDash.model.Product',
		'BizDash.model.Sale',
		'BizDash.model.User',
		'BizDash.model.WebSiteVisitor'
	],

	views: [
		// TODO: add views here
		'product.ProductGrid',
		'navigation.NavigationTree',
		'user.UsersView'
	],

	controllers: [
		'Main',
		'Root'
		// TODO: add controllers here
	],

	stores: [
		'Users',
		'Products',
		'Navigation',
		'users.Admins',
		'users.Customers',
		'users.Suppliers',
		'WebSiteVisitors'
	],

	launch: function() {
		// TODO - Launch the application

	/*Ext.define('MyComponent', {
		extend: 'Ext.Component',

		config: {
			myConfig: 'test'
		},

		//floating: true,
		html: 'Ext JS Essentials!',
		//renderTo: Ext.getBody(),

		constructor: function(config){
			console.log('constructor');
			//this.initConfig(config);

			this.callParent(arguments);
			//console.log('constructor - myConfig: ', this.getMyConfig());
		},

		initComponent: function(){
			console.log('initComponent');

			this.callParent(arguments);
			//console.log('initComponent - myConfig: ', this.getMyConfig());
		},

		applyMyConfig: function(val){
			console.log('applyMyConfig', val);

			return val;
		},

		updateMyConfig: function(){
			console.log('updateMyConfig');


		},

		listeners: {
			activate: function(){
				console.log('activate');
			},
			boxready: function(){
				console.log('boxready');
			},
			deactivate: function(){
				console.log('deactivate');
			},
			destroy: function(){
				console.log('destroy');
			},
			focus: function(){
				console.log('focus');
			},
			hide: function(){
				console.log('hide');
			},
			show: function(){
				console.log('show');
			},
			render: function(){
				console.log('render');
			},
			staterestore: function(){
				console.log('staterestore');
			},
			afterrender: function(comp){
				console.log('afterrender');
			}
		}
	});*/

		/*var simpleComponent = Ext.create('MyComponent', {
		});
		//simpleComponent.show();

		//simpleComponent.hide();

		//simpleComponent.destroy();
		var tabPanel = Ext.getCmp('tabpanel-1014');

		tabPanel.removeAll();

			tabPanel.add(simpleComponent)

		tabPanel.remove(simpleComponent);

		console.log(simpleComponent);
*/

		/*var panel = Ext.create('Ext.panel.Panel', {

			height: 500,
			width: 500,
			renderTo: Ext.getBody(),

			layout: {
				type: 'vbox',
				align: 'stretch'
			},
			items: [{
				xtype: 'tabpanel',
				itemId: 'mainTabPanel',
				flex: 1,
				items: [{
					xtype: 'panel',
					title: 'Users',
					id: 'usersPanel',
					layout: {
						type: 'vbox',
						align: 'stretch'
					},
					tbar: [{
						xtype: 'button',
						text: 'Edit',
						itemId: 'editButton'
					}],
					items: [{
						xtype: 'form',
						border: 0,
						items: [{
							xtype: 'textfield',
							fieldLabel: 'Name',
							allowBlank: false
						}, {
							xtype: 'textfield',
							fieldLabel: 'Email',
							allowBlank: false
						}],
						buttons: [{
							xtype: 'button',
							text: 'Save',
							action: 'saveUser'
						}]
					}, {
						xtype: 'grid',
						flex: 1,
						border: 0,
						columns: [{
							header: 'Name',
							dataIndex: 'Name',
							flex: 1
						}, {
							header: 'Email',
							dataIndex: 'Email'
						}],
						store: Ext.create('Ext.data.Store', {
							fields: ['Name', 'Email'],
							data: [{
								Name: 'Joe Bloggs',
								Email: 'joe@example.com'
							}, {
								Name: 'Jane Doe',
								Email: 'jane@example.com'
							}]
						})
					}]
				}]
			}, {
				xtype: 'component',
				itemId: 'footerComponent',
				html: 'Footer Information',
				extraOptions: {
					option1: 'test',
					option2: 'test'
				},
				height: 40
			}]
		});*/


		/*
				var usersStore = Ext.getStore('Users');

				usersStore.load(function(){
						var adminStore = Ext.create('BizDash.store.users.Admins', {});

						var customerStore = Ext.create('BizDash.store.users.Customers', {});

						var supplierStore = Ext.create('BizDash.store.users.Suppliers', {});

						console.log(usersStore.getCount()); // 4
						console.log(adminStore.getCount()); // 2
						console.log(customerStore.getCount()); // 1
						console.log(supplierStore.getCount()); // 1
					}
				);*/


		//console.log(usersStore);


/*
	BizDash.model.Product.load(1, {
		success: function(productRecord) {

			productRecord.locations().load(function() {
				console.log(productRecord.locations().getCount()); // 2

				productRecord.locations().getAt(0).products().load(function() {
					console.log()
				});

			});
		}
	});
*/


		/*BizDash.model.Sale.load(1, {
		 success: function(saleRecord) {

		 saleRecord.getProduct(function(productRecord) {
		 console.log('Sale: ', saleRecord);
		 console.log('Product: ', saleRecord.getProduct());

		 productRecord.locations().load(function(){
		 debugger;

		 productRecord.locations().getAt(0).products().load(function(){
		 debugger;
		 })

		 })
		 })
		 }
		 });
		 */
		/*	var saleRecord = Ext.create('BizDash.model.Sale', {
		 id       : 1,
		 userId   : 1,
		 productId: 1,
		 Date     : '2014-08-04T14:41:17.220Z',
		 Quantity : 1,
		 TotalCost: 9.99
		 });

		 saleRecord.getUser(function(userRecord){
		 console.log(userRecord.get('Name')) // Joe Bloggs
		 });*/


		/*BizDash.model.User.load(1, {
			success: function(userRecord) {

				userRecord.sales().load(function() {

					console.log('User: ', userRecord);
					console.log('Sales: ', userRecord.sales().getCount());

				});

			}
		});*/

		//rec.set('Price', -1);
		/*debugger;
		 rec.locations().load(function() {
		 debugger;

		 rec.locations().getAt(1).products().load(function() {
		 debugger;
		 })
		 });
		/*
		 BizDash.model.Sale.load(1, { success: function(saleRecord) {
		 debugger;
		 saleRecord.getUser(function(){
		 debugger;
		 });


		 console.log('User: ', userRecord);
		 console.log('Product Sales: ', userRecord.sales().getCount());
		 }

		 } );
		 */
		//	}
		//});

		/*
		 BizDash.model.User.load(99, {
		 success: function(rec) {
		 console.log('User: ', rec);
		 rec.sales().load(function() {
		 console.log('User Sales: ', rec.sales().getCount());


		 });

		 rec.getUserGroup(function(group) {
		 console.log('Group: ', group.get('Name'));
		 })

		 }
		 });*/

	}
});
