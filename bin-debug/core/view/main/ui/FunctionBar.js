/**
 * 功能条
 */
var game;
(function (game) {
    var FunctionBar = (function (_super) {
        __extends(FunctionBar, _super);
        function FunctionBar() {
            _super.call(this);
            this.skinName = "FunctionBarSkin";
        }
        var d = __define,c=FunctionBar,p=c.prototype;
        return FunctionBar;
    }(eui.Component));
    game.FunctionBar = FunctionBar;
    egret.registerClass(FunctionBar,'game.FunctionBar');
})(game || (game = {}));
//# sourceMappingURL=FunctionBar.js.map