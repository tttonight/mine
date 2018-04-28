Ext.define('LJW.view.Viewport',{
	extend:'Ext.container.Viewport',
	alias:'widget.viewport',
	
	//在实例化前加载相关类，一定要先加载，否则在构造函数initComponent中无法使用
	request:[
		'LJW.view.Topview',  //用命名空间
		'LJW.view.Bottomview',
		'LJW.view.Leftview',
		'LJW.view.Contentview'
	],
	layout:'border',
	
	//构造函数
	initComponent:function() {
		var me = this;
		Ext.applyIf(me,
		{
			items:[
				Ext.create('LJW.view.Topview'),
				Ext.create('LJW.view.Bottomview'),
				Ext.create('LJW.view.Leftview'),
				Ext.create('LJW.view.Contentview')
			]
		});
		me.callParent(arguments);
	}
});