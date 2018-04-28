Ext.define('LJW.view.Bottomview',{
	extend:'Ext.Panel',//继承Panel,类似于表格之类的
	alias:'widget.bottom',
	
	initComponent:function() {
		var me = this; //自己理解：this指向自己的函数，而不是window
		Ext.apply(this, {  //覆盖掉this即自己的属性
			region: 'south', //
			title:'底部',
			height:100,
			layout:'border',
			html:'这是底部'
		});
		me.callParent(arguments);
	}
});