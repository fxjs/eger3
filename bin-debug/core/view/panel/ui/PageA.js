var game;
(function (game) {
    var PageA = (function (_super) {
        __extends(PageA, _super);
        function PageA() {
            _super.call(this);
            this.skinName = "PageASkin";
        }
        var d = __define,c=PageA,p=c.prototype;
        p.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
        };
        return PageA;
    }(eui.Component));
    game.PageA = PageA;
    egret.registerClass(PageA,'game.PageA');
})(game || (game = {}));
//# sourceMappingURL=PageA.js.map