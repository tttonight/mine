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
	/*initComponent:function() {
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
	}*/
	
	//也可以这样写
	initComponent:function() {
		var me=this;
		Ext.apply(me,{
			items:[{
				region:'north',
				height:90,
				html:'<h1>标题</h1>',
				//xtype:'image',
				//src:'./images/1.jpg'
			},{
				region:'west',
				title:'导航栏',
				width:200,
				//xtype:'Menu',   //如果不是xtype的常见类型，为alias为'widget.Menu'，即view中Menu.js文件          
				split:true, //可变大小
				collapsible:true //可向旁边收起来
				
			},{
				region:'center',
				border:'fit'
			}]
		});
		me.callParent(arguments);
	}
});