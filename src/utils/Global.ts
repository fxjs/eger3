/**
  * 游戏公用方法汇总
  * by dily
  * (c) copyright 2014 - 2035
  * All Rights Reserved. 
  * 使用方法如：Global.setCookie()
  */

module Global {

	//等待界面，主要用在通讯等待展示
	export var waitPanel: WaitPanel;
    //显示等待界面
    export function showWaritPanel(): void {
        Global.waitPanel = new WaitPanel(1);
        GameLayerManager.gameLayer().maskLayer.removeChildren();
        GameLayerManager.gameLayer().maskLayer.addChild(Global.waitPanel);
    }

    //移除界面
    export function hideWaritPanel(): void {
        if ((Global.waitPanel != null) && GameLayerManager.gameLayer().maskLayer.contains(Global.waitPanel)) {
            GameLayerManager.gameLayer().maskLayer.removeChild(Global.waitPanel);
        }
    }

    //获取html文本
    export function getTextFlow(str: string): egret.ITextElement[] {
        var styleParser = new egret.HtmlTextParser();
        return styleParser.parser(str);
    }

    export var message;
    export function getMessage(str: string): any {
        if (message == null) {
            //初始化template_proto
            Global.message = dcodeIO.ProtoBuf.loadProto(RES.getRes("template_proto"));
        }
        return message.build(str);
    }

	//获取大写数字
	export function getNumber(num: number): string {
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
}