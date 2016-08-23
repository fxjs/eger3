module game {

    export class PageBMediator extends BaseMediator {
        public static NAME: string = "PageBMediator";

        public constructor(viewComponent: any = null) {
            super(PageBMediator.NAME, viewComponent);
        }

        public listNotificationInterests(): Array<any> {
            return [
                PanelNotify.OPEN_PAGE_B,
                PanelNotify.CLOSE_PAGE_B
            ];
        }

        private pageB: PageB = new PageB();
        public handleNotification(notification: puremvc.INotification): void {
            var data: any = notification.getBody();
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
        }

        /**
         * 页面切换
         */
        private pageAction(): void {
            this.swipePage(this.pageB ,() => { this.sendpageAction(PanelNotify.CLOSE_PAGE_B, PanelNotify.OPEN_PAGE_A, 6)}, () => { this.sendpageAction(PanelNotify.CLOSE_PAGE_B, PanelNotify.OPEN_PAGE_A, 5)});
        }

        /**
         * 初始化面板
         */
        public initUI(): void {
            this.pageAction();
        }
    }
}