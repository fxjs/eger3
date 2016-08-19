/**
  * 加载类
  * by dily
  * (c) copyright 2014 - 2035
  * All Rights Reserved. 
  * 加载主游戏资源
  */
class LoadingUI extends eui.UILayer{

    public constructor() {
        super();
        this.createView();
    }


    private sW: number = egret.MainContext.instance.stage.stageWidth;
    private sH: number = egret.MainContext.instance.stage.stageHeight;
    private textField: egret.TextField;
    private loadLineBg: egret.Shape;
    private loadLine: egret.Shape;


    private createView(): void {
        this.textField = new egret.TextField();
        this.addChild(this.textField);
        this.textField.y = this.sH / 2 + 60;
        this.textField.width = this.sW;
        this.textField.height = 50;
        this.textField.textAlign = "center";
        this.textField.size = 20;
        this.textField.text = '请稍后 ...';
        this.addChild(this.textField);

        this.loadLineBg = new egret.Shape();
        this.loadLineBg.graphics.lineStyle(1, 0xf1f2f3);
        this.loadLineBg.graphics.moveTo(this.sW * 0.25, this.sH / 2);
        this.loadLineBg.graphics.lineTo(this.sW * 0.75, this.sH / 2);
        this.loadLineBg.graphics.endFill();
        this.addChild(this.loadLineBg);
        this.drawLine(this.sW * 0.3);
        this.drawIp();
    }

    private drawLine(len: number) {
        this.loadLine = new egret.Shape();
        this.loadLine.graphics.lineStyle(1, 0x00ff00);
        this.loadLine.graphics.moveTo(this.sW * 0.25, this.sH / 2);
        this.loadLine.graphics.lineTo(len, this.sH / 2);
        this.loadLine.graphics.endFill();
        this.addChild(this.loadLine);
    }

    private drawIp(): void {
        let logo: egret.Bitmap = new egret.Bitmap();
        logo.texture = RES.getRes("loading_icon_png");
        logo.x = this.sW - logo.width >> 1;
        logo.y = (this.sH - logo.height) / 2 - logo.height / 2;
        logo.alpha = 0;
        this.addChild(logo);

        this.btnAni(logo, 0, () => {
            egret.Tween.get(logo, { loop: true }).to({ alpha: 1 }, 600, egret.Ease.quadIn)
                .to({ alpha: 0 }, 400, egret.Ease.quadIn);
        });
    }

    private btnAniStat: Boolean = false;
    private btnAni(el: any, dt: number, cb?: Function) {
        this.btnAniStat = false;
        // 定义遮罩
        let btnMask: egret.Rectangle = new egret.Rectangle(0, 0, el.width, el.height);
        btnMask.x = dt ? el.width : -el.width;
        el.mask = btnMask;

        egret.Tween.removeTweens(btnMask);
        egret.Tween.get(btnMask, {
            onChange: function () {
                el.mask = btnMask;
            }, loop: true
        }).to({ x: 0 }, 1000, egret.Ease.quadInOut);

        if (cb) {
            return cb();
        }
    }

    public setProgress(current, total): void {
        //this.textField.text = Math.ceil(current/total * 100)+'%';
        //console.log((current / total));
        this.drawLine(Math.ceil(current / total * this.sW * 0.5) + this.sW * 0.25);
    }
}
