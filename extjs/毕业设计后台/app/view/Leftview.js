Ext.define('LJW.view.Leftview', {
    extend: 'Ext.Panel',
    alias: 'widget.left',
    initComponent: function () {
        var me = this;
        Ext.apply(this, {
            region: 'west',
            title: 'west',
            width: 200,
            layout: 'border',
            html: 'this is west panel'
        });
        me.callParent(arguments);
    }
});