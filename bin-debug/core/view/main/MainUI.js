var game;
(function (game) {
    var MainUI = (function (_super) {
        __extends(MainUI, _super);
        function MainUI() {
            _super.call(this);
            this.skinName = "MainUISkin";
        }
        var d = __define,c=MainUI,p=c.prototype;
        p.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
        };
        return MainUI;
    }(eui.Component));
    game.MainUI = MainUI;
    egret.registerClass(MainUI,'game.MainUI');
})(game || (game = {}));
//# sourceMappingURL=MainUI.js.map