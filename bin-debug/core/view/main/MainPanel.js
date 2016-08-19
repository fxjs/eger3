var MainPanel = (function (_super) {
    __extends(MainPanel, _super);
    function MainPanel() {
        _super.call(this);
        this.skinName = "MainUISkin";
    }
    var d = __define,c=MainPanel,p=c.prototype;
    p.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    return MainPanel;
}(eui.Component));
egret.registerClass(MainPanel,'MainPanel');
//# sourceMappingURL=MainPanel.js.map