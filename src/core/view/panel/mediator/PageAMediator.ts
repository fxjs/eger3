module game {

    export class PageAMediator extends BaseMediator {
        public static NAME: string = "PageAMediator";

        public constructor(viewComponent: any = null) {
            super(PageAMediator.NAME, viewComponent);
        }

        public listNotificationInterests(): Array<any> {
            return [
                PanelNotify.OPEN_PAGE_A,
                PanelNotify.CLOSE_PAGE_A
            ];
        }

        private pageA: PageA = new PageA();
        public handleNotification(notification: puremvc.INotification): void {
            var data: any = notification.getBody();
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
        }

        /**
         * 页面切换
         */
        private pageAction(): void {
            this.swipePage(this.pageA, () => { this.sendpageAction(PanelNotify.CLOSE_PAGE_A, PanelNotify.OPEN_PAGE_B, 6) }, null);
        }

        /**
         * 初始化面板
         */
        public initUI(): void {
            this.pageAction();
        }

        private closeButtonClick(event: egret.TouchEvent): void {
            this.closePanel();
        }
    }
}