var game;
(function (game) {
    var PageB = (function (_super) {
        __extends(PageB, _super);
        function PageB() {
            _super.call(this);
            this.skinName = "PageBSkin";
        }
        var d = __define,c=PageB,p=c.prototype;
        p.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
            // console.log("pageB 创建成功");
        };
        return PageB;
    }(eui.Component));
    game.PageB = PageB;
    egret.registerClass(PageB,'game.PageB');
})(game || (game = {}));
//# sourceMappingURL=PageB.js.map