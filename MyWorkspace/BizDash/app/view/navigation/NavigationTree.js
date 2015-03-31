/**
 * BizDash.view.navigation.NavigationTree
 */
	Ext.define('BizDash.view.navigation.NavigationTree', {
		extend: 'Ext.tree.Panel',

		alias: 'widget.navigation-NavigationTree',

		store  : 'Navigation',
		columns: [
			{
				xtype    : 'treecolumn',
				text     : 'Navigation',
				dataIndex: 'Label',
				flex     : 1
			}
		],

		rootVisible: false,
		useArrows  : true
	});