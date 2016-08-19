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
                    this.showUI(this.pageA, false, 0, 0, 2);
                    break;
                }
                case PanelNotify.CLOSE_PAGE_A: {
                    this.closePanel(1);
                    break;
                }
            }
        }

        /**
         * 初始化面板ui
         */
        public initUI(): void {
            this.pageA.pageClose.addEventListener(egret.TouchEvent.TOUCH_TAP, this.closeButtonClick, this);
        }

        /**
         * 初始化面板数据
         */
        public initData(): void {

        }

        /**
         * 弹出面板前处理
         */
        // public beforShow(): void {
        //     console.log("显示前 。。");
        // }


        private closeButtonClick(event: egret.TouchEvent): void {
            egret.log("page A 已关闭");
            this.closePanel();
        }
    }
}