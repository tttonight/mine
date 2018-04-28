Ext.define('LJW.view.Topview', {
    extend: 'Ext.Panel',
    alias: 'widget.top',
    initComponent: function () {
        var me = this;
        Ext.apply(this, {
            region: 'north',
            //title: 'top',
            height: 100,
            layout:'border',
            html:'<center><h1>this is north panel</h1></center>'
        });
        me.callParent(arguments);
    }
});