var game;
(function (game) {
    var PageAMediator = (function (_super) {
        __extends(PageAMediator, _super);
        function PageAMediator(viewComponent) {
            if (viewComponent === void 0) { viewComponent = null; }
            _super.call(this, PageAMediator.NAME, viewComponent);
            this.pageA = new game.PageA();
        }
        var d = __define,c=PageAMediator,p=c.prototype;
        p.listNotificationInterests = function () {
            return [
                PanelNotify.OPEN_PAGE_A,
                PanelNotify.CLOSE_PAGE_A
            ];
        };
        p.handleNotification = function (notification) {
            var data = notification.getBody();
            switch (notification.getName()) {
                case PanelNotify.OPEN_PAGE_A: {
                    //显示页面 + 动画效果
                    this.showUI(this.pageA, false, 0, 0, GlobalConfig.direction);
                    // console.log("opened PageA ");
                    break;
                }
                case PanelNotify.CLOSE_PAGE_A: {
                    this.closePanel(GlobalConfig.direction);
                    // console.log("closeed PageA ");
                    break;
                }
            }
        };
        /**
         * 页面切换
         */
        p.pageAction = function () {
            var _this = this;
            this.swipePage(this.pageA, function () { _this.sendpageAction(PanelNotify.CLOSE_PAGE_A, PanelNotify.OPEN_PAGE_B, 6); }, null);
        };
        /**
         * 初始化面板
         */
        p.initUI = function () {
            this.pageAction();
        };
        p.closeButtonClick = function (event) {
            this.closePanel();
        };
        PageAMediator.NAME = "PageAMediator";
        return PageAMediator;
    }(BaseMediator));
    game.PageAMediator = PageAMediator;
    egret.registerClass(PageAMediator,'game.PageAMediator');
})(game || (game = {}));
//# sourceMappingURL=PageAMediator.js.map