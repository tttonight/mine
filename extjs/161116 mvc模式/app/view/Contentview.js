Ext.define('LJW.view.Contentview', {
    extend: 'Ext.Panel',
    alias: 'widget.content',
    initComponent: function () {
        var me = this;
        Ext.apply(this, {
            region: 'center',
            title:'center',
            layout: 'fit',
            html: 'this is center panel'
        });
        me.callParent(arguments);
    }
});