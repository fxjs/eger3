/**
  * 游戏配置文件
  * by dily
  * (c) copyright 2014 - 2035
  * All Rights Reserved.
  * 存放游戏的配置数据
  * 比如：游戏界面尺寸、分享随机百分比、获取系统数据
  */
var GlobalConfig;
(function (GlobalConfig) {
    //是否在线
    GlobalConfig.isOnLine = navigator.onLine;
    //全局字体颜色表--可以扩展
    GlobalConfig.TextColors = {
        white: 0xFFFFFF,
        milkWhite: 0xfbf1af,
        grayWhite: 0xceb6a2,
        yellow: 0xffff00,
        lightYellow: 0xffd375,
        orangeYellow: 0xff9900,
        red: 0xf11300,
        green: 0x00e500,
        blue: 0x1a94d7,
        grayBlue: 0x2f5177,
        purple: 0xe938f2,
        pink: 0xFF3030,
        black: 0x2e2d2d,
        golden: 0xFFD700 //金色
    };
    //全局字体大小表--可以扩展
    GlobalConfig.LabelFontSize = {
        littleSize: 12,
        middleSize: 18,
        normalSize: 24,
        bigSize: 36 //大型字体大小
    };
    // //是不是微信浏览
    // export function isWeiXin(): boolean {
    //     var ua = window.navigator.userAgent.toLowerCase();
    //     var microStr = "" + ua.match(/MicroMessenger/i);
    //     if(microStr == "null") {
    //         return false;
    //     } else if(microStr == "micromessenger") {
    //         return true;
    //     }
    // } 
    // //是不是大屏
    // export function isBigScreen(): boolean {
    //     return (document.body.clientHeight / document.body.clientWidth > 1.32);
    // } 
    // //获得浏览器类型 pc android ios -- 可扩展为其他 如 微信、qqzone、qq、微博、校内、facebook
    // export function systemType(): string {
    //     var ua = window.navigator.userAgent.toLowerCase();
    //     var microStr = "" + ua.match(/MicroMessenger/i);
    //     if(("" + ua.match(/windows nt/i)) == "windows nt") {
    //         return "windows";
    //     } else if(("" + ua.match(/iphone/i)) == "iphone") {
    //         return "ios";
    //     } else if(("" + ua.match(/android/i)) == "android") {
    //         return "android";
    //     } else if(("" + ua.match(/ipad/i)) == "ipad") {
    //         return "ipad";
    //     } else if(("" + ua.match(/linux/i)) == "linux") {
    //         return "linux";
    //     } else if(("" + ua.match(/mac/i)) == "mac") {
    //         return "mac";
    //     } else if(("" + ua.match(/ucbrower/i)) == "ucbrower") {
    //         return "ucbrower";
    //     } else {
    //         console.log("未知系统类型");
    //     }
    // }  
    // //获得平台类型 如 微信、qqzone、qq、微博、校内、facebook
    // export function platformType(): string {
    //     var ua = window.navigator.userAgent.toLowerCase();
    //     if(("" + ua.match(/micromessenger/i)) == "micromessenger") {
    //         return "micromessenger";
    //     } else if(("" + ua.match(/qzone/i)) == "qzone") {
    //         return "qzone";
    //     } else if(("" + ua.match(/weibo/i)) == "weibo") {
    //         return "weibo";
    //     } else if(("" + ua.match(/qq/i)) == "qq") {
    //         return "qq";
    //     } else if(("" + ua.match(/renren/i)) == "renren") {
    //         return "renren";
    //     } else if(("" + ua.match(/txmicroblog/i)) == "txmicroblog") {
    //         return "txmicroblog";
    //     } else if(("" + ua.match(/douban/i)) == "douban") {
    //         return "douban";
    //     } else {
    //         return "other";
    //     }
    // }
    //当前舞台
    function curStage() {
        return egret.MainContext.instance.stage;
    }
    GlobalConfig.curStage = curStage;
    //当前游戏宽度
    function curWidth() {
        return egret.MainContext.instance.stage.stageWidth;
    }
    GlobalConfig.curWidth = curWidth;
    //当前游戏宽度
    function curHeight() {
        return egret.MainContext.instance.stage.stageHeight;
    }
    GlobalConfig.curHeight = curHeight;
    //======================================================
    // By Fx 2016-8-22 15:36:56
    //动画时间常量
    GlobalConfig.FAST = 100;
    GlobalConfig.SLOW = 300;
    // 资源缩放常量
    GlobalConfig.SN = 0.618; //全局min缩放比例
    GlobalConfig.SNLG = 0.75; //全局LG缩放比例
    GlobalConfig.SNMAX = 0.85; // 全局max缩放比例
    // 滑动方向
    GlobalConfig.direction = 7; // 7淡入 6向上 5向下
    // 滑动锁
    GlobalConfig.isPageSwitchDone = false;
    GlobalConfig.autoTimer = null;
})(GlobalConfig || (GlobalConfig = {}));
//# sourceMappingURL=GlobalConfig.js.map