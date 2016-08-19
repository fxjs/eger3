var game;
(function (game) {
    var PageCloseBtn = (function (_super) {
        __extends(PageCloseBtn, _super);
        function PageCloseBtn() {
            _super.call(this);
            this.skinName = "PageCloseBtnSkin";
        }
        var d = __define,c=PageCloseBtn,p=c.prototype;
        p.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
        };
        return PageCloseBtn;
    }(eui.Component));
    game.PageCloseBtn = PageCloseBtn;
    egret.registerClass(PageCloseBtn,'game.PageCloseBtn');
})(game || (game = {}));
//# sourceMappingURL=PageCloseBtn.js.map