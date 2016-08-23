var game;
(function (game) {
    var PageBMediator = (function (_super) {
        __extends(PageBMediator, _super);
        function PageBMediator(viewComponent) {
            if (viewComponent === void 0) { viewComponent = null; }
            _super.call(this, PageBMediator.NAME, viewComponent);
            this.pageB = new game.PageB();
        }
        var d = __define,c=PageBMediator,p=c.prototype;
        p.listNotificationInterests = function () {
            return [
                PanelNotify.OPEN_PAGE_B,
                PanelNotify.CLOSE_PAGE_B
            ];
        };
        p.handleNotification = function (notification) {
            var data = notification.getBody();
            switch (notification.getName()) {
                case PanelNotify.OPEN_PAGE_B: {
                    //显示页面 + 动画效果
                    this.showUI(this.pageB, false, 0, 0, GlobalConfig.direction);
                    // console.log("opened PageB ");
                    break;
                }
                case PanelNotify.CLOSE_PAGE_B: {
                    this.closePanel(GlobalConfig.direction);
                    // console.log("closeed PageB ");
                    break;
                }
            }
        };
        /**
         * 页面切换
         */
        p.pageAction = function () {
            var _this = this;
            this.swipePage(this.pageB, function () { _this.sendpageAction(PanelNotify.CLOSE_PAGE_B, PanelNotify.OPEN_PAGE_A, 6); }, function () { _this.sendpageAction(PanelNotify.CLOSE_PAGE_B, PanelNotify.OPEN_PAGE_A, 5); });
        };
        /**
         * 初始化面板
         */
        p.initUI = function () {
            this.pageAction();
        };
        PageBMediator.NAME = "PageBMediator";
        return PageBMediator;
    }(BaseMediator));
    game.PageBMediator = PageBMediator;
    egret.registerClass(PageBMediator,'game.PageBMediator');
})(game || (game = {}));
//# sourceMappingURL=PageBMediator.js.map