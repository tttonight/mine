Ext.Loader.setConfig({
	enabled:true
});

Ext.require([

]);

Ext.application({
	name:'LJW',  //�趨Ӧ�ó���������ռ�(������controller,view.model��store�������ռ�)
	appFolder:'app', //�趨Ӧ�ó����·��
	autoCreateViewport:true, //�����Զ�����Viewport,�����Զ�ȥviewĿ¼�²���Viewport�ļ���ʵ����
	controllers:[] //����Ӧ�ó������õ�������controller
});