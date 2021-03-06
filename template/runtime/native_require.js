
var game_file_list = [
    //以下为自动修改，请勿修改
    //----auto game_file_list start----
	"libs/modules/egret/egret.js",
	"libs/modules/egret/egret.native.js",
	"libs/modules/eui/eui.js",
	"libs/modules/res/res.js",
	"libs/modules/game/game.js",
	"libs/modules/game/game.native.js",
	"libs/modules/tween/tween.js",
	"libs/modules/socket/socket.js",
	"libs/modules/puremvc/puremvc.js",
	"libs/modules/protobuf/protobuf.js",
	"bin-debug/component/EButton.js",
	"bin-debug/component/EImage.js",
	"bin-debug/component/ETextField.js",
	"bin-debug/constants/MainNotify.js",
	"bin-debug/constants/PanelNotify.js",
	"bin-debug/constants/SceneNotify.js",
	"bin-debug/constants/SysNotify.js",
	"bin-debug/core/config/AppFacade.js",
	"bin-debug/core/config/GameLayerManager.js",
	"bin-debug/core/controller/ControllerPrepCommand.js",
	"bin-debug/core/controller/ModelPrepCommand.js",
	"bin-debug/core/controller/Processor/Processor_100_1.js",
	"bin-debug/core/controller/request/UserInfoRequest.js",
	"bin-debug/core/controller/StartupCommand.js",
	"bin-debug/core/controller/ViewPrepCommand.js",
	"bin-debug/core/model/P.js",
	"bin-debug/core/model/ResourceProxyBase.js",
	"bin-debug/core/model/proxy/GameProxy.js",
	"bin-debug/core/model/proxy/TemplateProxy.js",
	"bin-debug/core/model/vo/GameVO.js",
	"bin-debug/core/view/main/manager/MainManager.js",
	"bin-debug/core/view/main/ui/FunctionBar.js",
	"bin-debug/core/view/main/ui/MainUI.js",
	"bin-debug/core/view/panel/base/BaseMediator.js",
	"bin-debug/core/view/panel/base/PopUpManager.js",
	"bin-debug/core/view/panel/mediator/PageAMediator.js",
	"bin-debug/core/view/panel/mediator/PageBMediator.js",
	"bin-debug/core/view/panel/ui/PageA.js",
	"bin-debug/core/view/panel/ui/PageB.js",
	"bin-debug/core/view/panel/ui/PageCloseBtn.js",
	"bin-debug/core/view/scene/manager/SceneManager.js",
	"bin-debug/core/view/scene/ui/HomeCity.js",
	"bin-debug/Global/GlobalConfig.js",
	"bin-debug/Global/GlobalData.js",
	"bin-debug/loading/AssetAdapter.js",
	"bin-debug/loading/LoadingPanel.js",
	"bin-debug/loading/WaitPanel.js",
	"bin-debug/Main.js",
	"bin-debug/net/SocketManager.js",
	"bin-debug/utils/EffectUtils.js",
	"bin-debug/utils/Global.js",
	"bin-debug/utils/NativeApi.js",
	"bin-debug/utils/RegUtils.js",
	"bin-debug/utils/TipsManager.js",
	"bin-debug/utils/TipsPanel.js",
	"bin-debug/utils/UtilsClass/BitmapBlink.js",
	"bin-debug/utils/UtilsClass/TipsUtils.js",
	//----auto game_file_list end----
];

var window = {};

egret_native.setSearchPaths([""]);

egret_native.requireFiles = function () {
    for (var key in game_file_list) {
        var src = game_file_list[key];
        require(src);
    }
};

egret_native.egretInit = function () {
    egret_native.requireFiles();
    egret.TextField.default_fontFamily = "/system/fonts/DroidSansFallback.ttf";
    //egret.dom为空实现
    egret.dom = {};
    egret.dom.drawAsCanvas = function () {
    };
};

egret_native.egretStart = function () {
    var option = {
        //以下为自动修改，请勿修改
        //----auto option start----
		entryClassName: "Main",
		frameRate: 30,
		scaleMode: "noBorder",
		contentWidth: 640,
		contentHeight: 1136,
		showPaintRect: false,
		showFPS: true,
		fpsStyles: "x:0,y:0,size:12,textColor:0x00c200,bgAlpha:0.9",
		showLog: false,
		logFilter: "",
		maxTouches: 2,
		textureScaleFactor: 1
		//----auto option end----
    };

    egret.native.NativePlayer.option = option;
    egret.runEgret();
    egret_native.Label.createLabel(egret.TextField.default_fontFamily, 20, "", 0);
    egret_native.EGTView.preSetOffScreenBufferEnable(true);
};