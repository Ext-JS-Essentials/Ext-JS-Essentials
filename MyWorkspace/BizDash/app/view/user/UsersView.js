Ext.define('BizDash.view.user.UsersView', {
	extend: 'Ext.view.View',

	alias: 'widget.user-UsersView',



	store: 'Users',

	tpl: [
		'<tpl for=".">',
		'   <div class="user-item">',
		'       <img src="resources/images/{Photo}" />',
		'      <div class="name">{Name}</div>',
		'       <div class="role">{Role}</div>',
		'   </div>',
		'</tpl>'
	].join(''),

	itemSelector: '.user-item'
});