/**
  * 面板mediator基类
  * by dily
  * (c) copyright 2014 - 2035
  * All Rights Reserved.
  * todo:面板特效，全屏+非全屏蒙层
  */
var BaseMediator = (function (_super) {
    __extends(BaseMediator, _super);
    function BaseMediator(mediatorName, viewComponent) {
        if (mediatorName === void 0) { mediatorName = ""; }
        if (viewComponent === void 0) { viewComponent = null; }
        _super.call(this, mediatorName, viewComponent);
        this.isInitialized = false; //是否初始化
        this.isPopUp = false; //是否已经显示
        this.ui = null; //UI容器
        this.w = 0;
        this.h = 0;
        /**
         * 监听页面滑动 触发
         */
        this.touchPoint = [];
        this.bMap = [];
        this.w = GlobalConfig.curWidth();
        this.h = GlobalConfig.curHeight();
    }
    var d = __define,c=BaseMediator,p=c.prototype;
    /**
    * 添加面板方法
    * panel       		面板
    * dark        		背景是否变黑
    * popUpWidth      	指定弹窗宽度，定位使用
    * popUpHeight      	指定弹窗高度，定位使用
    * effectType        0：没有动画 1:从中间轻微弹出 2：从中间猛烈弹出  3：从左向右 4：从右向左 5、从上到下 6、从下到上 7、淡入
    * duration          动画持续时间
    */
    p.showUI = function (ui, dark, popUpWidth, popUpHeight, effectType, isAlert, duration) {
        if (dark === void 0) { dark = false; }
        if (popUpWidth === void 0) { popUpWidth = 0; }
        if (popUpHeight === void 0) { popUpHeight = 0; }
        if (effectType === void 0) { effectType = 0; }
        if (isAlert === void 0) { isAlert = false; }
        if (duration === void 0) { duration = 500; }
        this.ui = ui;
        this.beforShow();
        this.initUI();
        this.initData();
        PopUpManager.addPopUp(ui, dark, popUpWidth, popUpHeight, effectType, isAlert, duration, this.afterShow);
    };
    /**
     * 面板弹出之前处理
     */
    p.beforShow = function () {
        // console.log("开始加载");
    };
    /**
     * 初始化面板ui
     */
    p.initUI = function () {
        // console.log("初始化面板ui");
    };
    /**
     * 初始化面板数据
     */
    p.initData = function () {
        // console.log("初始化面板数据");
    };
    /**
     * 面板加载完毕
     */
    p.afterShow = function () {
        console.log("加载完毕");
        GlobalConfig.isPageSwitchDone = true;
    };
    /**
    * 移除面板方法
    * panel       		面板
    * effectType        0：没有动画 1:从中间缩小消失 2：  3：从左向右 4：从右向左 5、从上到下 6、从下到上
    */
    p.closePanel = function (effectType) {
        if (effectType === void 0) { effectType = 0; }
        PopUpManager.removePopUp(this.ui, effectType);
        this.destroy();
    };
    /**
     * 面板关闭后需要销毁的对象
     */
    p.destroy = function () {
    };
    /**
     * 面板是否弹出状态
     */
    p.getIsPopUp = function () {
        return this.isPopUp;
    };
    /**
     * 面板是否初始化完毕
     */
    p.getIsInit = function () {
        return this.isInitialized;
    };
    // 获取面板宽度
    p.getWidth = function () {
        return this.ui.width;
    };
    // 获取面板高度
    p.getHeight = function () {
        return this.ui.height;
    };
    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     * Fx 2016-7-12 09:44:48
     */
    p.createBitmapByName = function (name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        return result;
    };
    p.touchBegin = function (e) {
        console.log(GlobalConfig.isPageSwitchDone);
        console.log("监听触摸事件");
        this.touchPoint = [];
        this.touchPoint[0] = e.localY;
    };
    p.touchEnd = function (e) {
        this.touchPoint[1] = e.localY;
        if (this.touchPoint[1] - this.touchPoint[0] > 50) {
            if (this.prevFn)
                this.prevFn();
        }
        else if (this.touchPoint[0] - this.touchPoint[1] > 50) {
            if (this.nextFn)
                this.nextFn();
        }
    };
    p.swipePage = function (el, nextFn, prevFn) {
        if (prevFn)
            this.prevFn = prevFn;
        if (nextFn)
            this.nextFn = nextFn;
        el.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchBegin, this);
        el.addEventListener(egret.TouchEvent.TOUCH_END, this.touchEnd, this);
    };
    /**
     * 页面切换
     * direction 切换方向 5上一页 6下一页
     * By Fx 2016-8-22 15:52:31
     */
    p.sendpageAction = function (currentPageAction, nextPageAction, direction) {
        if (direction === void 0) { direction = 6; }
        // if(!GlobalConfig.isPageSwitchDone) return;
        // GlobalConfig.isPageSwitchDone = false;
        GlobalConfig.direction = direction;
        game.AppFacade.getInstance().sendNotification(currentPageAction);
        game.AppFacade.getInstance().sendNotification(nextPageAction);
        // game.AppFacade.getInstance().removeMediator(currentPageAction);
    };
    return BaseMediator;
}(puremvc.Mediator));
egret.registerClass(BaseMediator,'BaseMediator',["puremvc.IMediator","puremvc.INotifier"]);
//# sourceMappingURL=BaseMediator.js.map