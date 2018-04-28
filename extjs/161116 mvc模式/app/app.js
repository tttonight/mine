Ext.Loader.setConfig({
	enabled:true
});

Ext.require([

]);

Ext.application({
	name:'LJW',  //设定应用程序的命名空间(它将是controller,view.model和store的命名空间)
	appFolder:'app', //设定应用程序的路径
	autoCreateViewport:true, //开启自动创建Viewport,它将自动去view目录下查找Viewport文件并实例化
	controllers:[] //加载应用程序所用到的所有controller
});