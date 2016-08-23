/**
  * 游戏公用方法汇总
  * by dily
  * (c) copyright 2014 - 2035
  * All Rights Reserved.
  * 使用方法如：Global.setCookie()
  */
var Global;
(function (Global) {
    //显示等待界面
    function showWaritPanel() {
        Global.waitPanel = new WaitPanel(1);
        GameLayerManager.gameLayer().maskLayer.removeChildren();
        GameLayerManager.gameLayer().maskLayer.addChild(Global.waitPanel);
    }
    Global.showWaritPanel = showWaritPanel;
    //移除界面
    function hideWaritPanel() {
        if ((Global.waitPanel != null) && GameLayerManager.gameLayer().maskLayer.contains(Global.waitPanel)) {
            GameLayerManager.gameLayer().maskLayer.removeChild(Global.waitPanel);
        }
    }
    Global.hideWaritPanel = hideWaritPanel;
    //获取html文本
    function getTextFlow(str) {
        var styleParser = new egret.HtmlTextParser();
        return styleParser.parser(str);
    }
    Global.getTextFlow = getTextFlow;
    function getMessage(str) {
        if (Global.message == null) {
            //初始化template_proto
            Global.message = dcodeIO.ProtoBuf.loadProto(RES.getRes("template_proto"));
        }
        return Global.message.build(str);
    }
    Global.getMessage = getMessage;
    //获取大写数字
    function getNumber(num) {
        var str = '';
        switch (num) {
            case 0: {
                str = "零";
                break;
            }
            case 1: {
                str = "一";
                break;
            }
            case 2: {
                str = "二";
                break;
            }
            case 3: {
                str = "三";
                break;
            }
            case 4: {
                str = "四";
                break;
            }
            case 5: {
                str = "五";
                break;
            }
            case 6: {
                str = "六";
                break;
            }
            case 7: {
                str = "七";
                break;
            }
            case 8: {
                str = "八";
                break;
            }
            case 9: {
                str = "九";
                break;
            }
            default: {
                // TODO: Implemente default case
                console.log("default case");
            }
        }
        return str;
    }
    Global.getNumber = getNumber;
})(Global || (Global = {}));
//# sourceMappingURL=Global.js.map