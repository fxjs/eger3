var game;
(function (game) {
    var S1 = (function (_super) {
        __extends(S1, _super);
        function S1() {
            _super.call(this);
            this.skinName = "S1";
        }
        var d = __define,c=S1,p=c.prototype;
        p.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
        };
        return S1;
    }(eui.Component));
    game.S1 = S1;
    egret.registerClass(S1,'game.S1');
})(game || (game = {}));
//# sourceMappingURL=S1.js.map