/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('BizDash.view.main.MainController', {
	extend: 'Ext.app.ViewController',

	requires: [
		'Ext.MessageBox'
	],

	alias: 'controller.main',

	onClickButton: function() {
		Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
		this.getView().getButton().disable();
	},

	onConfirm: function(choice) {
		if (choice === 'yes') {
			this.getView().getButton().fireEvent('confirmed', choice)
		}
	},

	onConfirmed: function(choice) {
		console.log('The CONFIRMED event was fired');
	},

	init: function() {
		var button = this.getView().query('button[text="Button"]')[0];

		if (button) {
			//button.on('mouseover', 'onMouseOver');

			button.on({
				mouseover: 'onMouseOver',
				mouseout : 'onMouseOut',
				click    : { fn: 'onClickButton', single: true},
				confirmed: 'onConfirmed',
				scope    : this
			});

			var map = new Ext.util.KeyMap({
				target: this.getView().getEl(),
				key   : Ext.event.Event.ENTER,
				fn    : this.onEnterPress,
				scope : this
			});

			var el = this.getView().getEl();

			el.on('tap', function() {
				console.log('The Viewport was tapped/clicked.');
			});
		}
	},

	onMouseOver: function() {
		console.log('Button Mouseover Event Fired');
	},

	onMouseOut: function() {
		console.log('Button Mouseout Event Fired');
	},

	onEnterPress: function() {
		console.log('ENTER key was pressed');
	}
});
