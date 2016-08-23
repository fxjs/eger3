/**
  * 面板mediator基类
  * by dily
  * (c) copyright 2014 - 2035
  * All Rights Reserved. 
  * todo:面板特效，全屏+非全屏蒙层
  */
class BaseMediator extends puremvc.Mediator implements puremvc.IMediator {

    private isInitialized: Boolean = false;//是否初始化
    private isPopUp: Boolean = false;//是否已经显示
    private ui: eui.Component = null;//UI容器
    public w: number = 0;
    public h: number = 0;

    public constructor(mediatorName: string = "", viewComponent: Object = null) {
        super(mediatorName, viewComponent);
        this.w = GlobalConfig.curWidth();
        this.h = GlobalConfig.curHeight();
    }

    /**
    * 添加面板方法
    * panel       		面板
    * dark        		背景是否变黑
    * popUpWidth      	指定弹窗宽度，定位使用
    * popUpHeight      	指定弹窗高度，定位使用
    * effectType        0：没有动画 1:从中间轻微弹出 2：从中间猛烈弹出  3：从左向右 4：从右向左 5、从上到下 6、从下到上 7、淡入
    * duration          动画持续时间
    */
    public showUI(ui: eui.Component, dark: boolean = false, popUpWidth: number = 0, popUpHeight: number = 0, effectType: number = 0, isAlert: boolean = false, duration: number = 500): void {
        this.ui = ui;
        this.beforShow();
        this.initUI();
        this.initData();
        PopUpManager.addPopUp(ui, dark, popUpWidth, popUpHeight, effectType, isAlert, duration, this.afterShow);
    }

	/**
	 * 面板弹出之前处理
	 */
    public beforShow(): void {
        // console.log("开始加载");
    }

	/**
	 * 初始化面板ui
	 */
    public initUI(): void {
        // console.log("初始化面板ui");
    }


	/**
	 * 初始化面板数据
	 */
    public initData(): void {
        // console.log("初始化面板数据");
    }

    /**
     * 面板加载完毕
     */
    public afterShow(): void {
        console.log("加载完毕");
        GlobalConfig.isPageSwitchDone = true;
    }


    /**
    * 移除面板方法
    * panel       		面板
    * effectType        0：没有动画 1:从中间缩小消失 2：  3：从左向右 4：从右向左 5、从上到下 6、从下到上
    */
    public closePanel(effectType: number = 0): void {
        PopUpManager.removePopUp(this.ui, effectType);
        this.destroy();
    }


	/**
	 * 面板关闭后需要销毁的对象
	 */
    public destroy(): void {

    }


	/**
	 * 面板是否弹出状态
	 */
    public getIsPopUp(): Boolean {
        return this.isPopUp;
    }


	/**
	 * 面板是否初始化完毕
	 */
    public getIsInit(): Boolean {
        return this.isInitialized;
    }

    // 获取面板宽度
    public getWidth(): number {
        return this.ui.width;
    }

    // 获取面板高度
    public getHeight(): number {
        return this.ui.height;
    }

    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     * Fx 2016-7-12 09:44:48
     */
    public createBitmapByName(name: string): egret.Bitmap {
        var result: egret.Bitmap = new egret.Bitmap();
        var texture: egret.Texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }

    /**
     * 监听页面滑动 触发
     */
    private touchPoint: number[] = [];
    private prevFn: Function;
    private nextFn: Function;
    private touchBegin(e: egret.TouchEvent): void {
        console.log(GlobalConfig.isPageSwitchDone);        
        console.log("监听触摸事件");
        this.touchPoint = [];
        this.touchPoint[0] = e.localY;
    }
    private touchEnd(e: egret.TouchEvent): void {
        this.touchPoint[1] = e.localY;
        if (this.touchPoint[1] - this.touchPoint[0] > 50) {
            if (this.prevFn) this.prevFn();
        } else if (this.touchPoint[0] - this.touchPoint[1] > 50) {
            if (this.nextFn) this.nextFn();
        }
    }

    public swipePage(el: any,nextFn?: any, prevFn?: any) {        
        if (prevFn) this.prevFn = prevFn;
        if(nextFn) this.nextFn = nextFn;
        el.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchBegin, this);
        el.addEventListener(egret.TouchEvent.TOUCH_END, this.touchEnd, this);
    }

    /**
     * 页面切换
     * direction 切换方向 5上一页 6下一页
     * By Fx 2016-8-22 15:52:31
     */
    public sendpageAction(currentPageAction: string, nextPageAction: string, direction: number = 6): void {
        // if(!GlobalConfig.isPageSwitchDone) return;
        // GlobalConfig.isPageSwitchDone = false;
        GlobalConfig.direction = direction;
        game.AppFacade.getInstance().sendNotification(currentPageAction);
        game.AppFacade.getInstance().sendNotification(nextPageAction);
        // game.AppFacade.getInstance().removeMediator(currentPageAction);
    }

    public bMap: egret.Bitmap[] = [];

}