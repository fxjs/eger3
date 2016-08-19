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
                    this.showUI(this.pageA, false, 0, 0, 2);
                    break;
                }
                case PanelNotify.CLOSE_PAGE_A: {
                    this.closePanel(1);
                    break;
                }
            }
        };
        /**
         * 初始化面板ui
         */
        p.initUI = function () {
            this.pageA.pageClose.addEventListener(egret.TouchEvent.TOUCH_TAP, this.closeButtonClick, this);
        };
        /**
         * 初始化面板数据
         */
        p.initData = function () {
        };
        /**
         * 弹出面板前处理
         */
        // public beforShow(): void {
        //     console.log("显示前 。。");
        // }
        p.closeButtonClick = function (event) {
            egret.log("page A 已关闭");
            this.closePanel();
        };
        PageAMediator.NAME = "PageAMediator";
        return PageAMediator;
    }(BaseMediator));
    game.PageAMediator = PageAMediator;
    egret.registerClass(PageAMediator,'game.PageAMediator');
})(game || (game = {}));
//# sourceMappingURL=PageAMediator.js.map