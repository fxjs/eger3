/**
  * 游戏特效汇总
  * by zhaoxin
  * (c) copyright 2014 - 2035
  * All Rights Reserved.
  * 使用方法如：EffectUtils.rotationEffect()
  */
var EffectUtils;
(function (EffectUtils) {
    // 存储旋转对象
    var rotationArr = [];
    /*
     * 对象旋转特效
     * obj   旋转对象
     * time  旋转一周用时，毫秒
     * direction 旋转方向 1 顺时针 0 逆时针
    */
    function rotationEffect(obj, time, direction) {
        if (time === void 0) { time = 1000; }
        if (direction === void 0) { direction = 1; }
        if (this.rotationArr == null) {
            this.rotationArr = [];
        }
        if (this.rotationArr[obj.hashCode]) {
            return;
        }
        if ((this.rotationArr[obj.hashCode] == null) || !this.rotationArr[obj.hashCode]) {
            this.rotationArr[obj.hashCode] = true;
        }
        var deg = direction ? 360 : -360;
        var onComplete1 = function () {
            if (this.rotationArr[obj.hashCode] && (obj != null)) {
                obj.rotation = 0;
                egret.Tween.get(obj).to({ rotation: deg }, time).call(onComplete1, this);
            }
        };
        obj.rotation = 0;
        egret.Tween.get(obj).to({ rotation: deg }, time).call(onComplete1, this);
    }
    EffectUtils.rotationEffect = rotationEffect;
    //取消对象旋转
    //obj    旋转对象
    function removeRotationEffect(obj) {
        if (this.rotationArr == null) {
            this.rotationArr = [];
        }
        this.rotationArr[obj.hashCode] = false;
    }
    EffectUtils.removeRotationEffect = removeRotationEffect;
    //对象闪烁特效
    //obj         闪烁对象
    //interval    闪烁总工时间
    function blinkEffect(obj, interval) {
        if (interval === void 0) { interval = 1000; }
        new BitmapBlink(obj, interval);
    }
    EffectUtils.blinkEffect = blinkEffect;
    /*
    * 抖动对象特效
    * 类似ios密码输入错误的特效
    * infinite  无尽循环 true
    * delay     延时
    */
    function shakeObj(obj, delay) {
        if (delay === void 0) { delay = 0; }
        var startShake = function () {
            var shakeNum = 80;
            var oldX = obj.x;
            egret.Tween.get(obj).to({ x: obj.x - 10 }, shakeNum);
            egret.setTimeout(function () {
                egret.Tween.get(obj).to({ x: obj.x + 20 }, shakeNum);
            }, this, shakeNum * 2);
            egret.setTimeout(function () {
                egret.Tween.get(obj).to({ x: obj.x - 20 }, shakeNum);
            }, this, shakeNum * 3);
            egret.setTimeout(function () {
                egret.Tween.get(obj).to({ x: obj.x + 20 }, shakeNum);
            }, this, shakeNum * 4);
            egret.setTimeout(function () {
                egret.Tween.get(obj).to({ x: oldX }, shakeNum).wait(delay).call(startShake);
            }, this, shakeNum * 5);
        };
        startShake();
    }
    EffectUtils.shakeObj = shakeObj;
    //抖动对象特效
    // 1：抖动  2：震动
    function shakeScreen(effectType) {
        if (effectType === void 0) { effectType = 1; }
        var panel = GlobalConfig.curPanel;
        var shakeNum = 40;
        var oldX = panel.x;
        var oldY = panel.y;
        if (effectType == 1) {
            egret.Tween.get(panel).to({ x: panel.x - 10 }, shakeNum);
            egret.setTimeout(function () {
                egret.Tween.get(panel).to({ x: panel.x + 20 }, shakeNum);
            }, this, shakeNum * 2);
            egret.setTimeout(function () {
                egret.Tween.get(panel).to({ x: panel.x - 20 }, shakeNum);
            }, this, shakeNum * 3);
            egret.setTimeout(function () {
                egret.Tween.get(panel).to({ x: panel.x + 20 }, shakeNum);
            }, this, shakeNum * 4);
            egret.setTimeout(function () {
                egret.Tween.get(panel).to({ x: oldX }, shakeNum);
            }, this, shakeNum * 5);
        }
        else {
            egret.Tween.get(panel).to({ x: panel.x - 10, y: panel.y }, shakeNum);
            egret.setTimeout(function () {
                egret.Tween.get(panel).to({ x: panel.x + 20, y: panel.y }, shakeNum);
            }, this, shakeNum * 2);
            egret.setTimeout(function () {
                egret.Tween.get(panel).to({ x: panel.x, y: panel.y + 15 }, shakeNum);
            }, this, shakeNum * 3);
            egret.setTimeout(function () {
                egret.Tween.get(panel).to({ x: panel.x, y: panel.y - 20 }, shakeNum);
            }, this, shakeNum * 4);
            egret.setTimeout(function () {
                egret.Tween.get(panel).to({ x: panel.x, y: panel.y + 10 }, shakeNum);
            }, this, shakeNum * 5);
            egret.setTimeout(function () {
                egret.Tween.get(panel).to({ x: oldX, y: oldY }, shakeNum);
            }, this, shakeNum * 6);
        }
    }
    EffectUtils.shakeScreen = shakeScreen;
    /**
    * str             提示内容
    * effectType      动画类型 1：从下到上弹出 2：从左至右弹出 3：从右至左弹出 4：从中间弹出渐渐消失 5：从大变小 等等
    * isWarning       是否是警告，警告是红色
    */
    function showTips(str, effectType, isWarning) {
        if (str === void 0) { str = ""; }
        if (effectType === void 0) { effectType = 1; }
        if (isWarning === void 0) { isWarning = false; }
        switch (effectType) {
            case 1: {
                TipsUtils.showTipsDownToUp(str, isWarning);
                break;
            }
            case 2: {
                TipsUtils.showTipsLeftOrRight(str, isWarning, true);
                break;
            }
            case 3: {
                TipsUtils.showTipsLeftOrRight(str, isWarning, false);
                break;
            }
            case 4: {
                TipsUtils.showTipsFromCenter(str, isWarning);
                break;
            }
            case 5: {
                TipsUtils.showTipsBigToSmall(str, isWarning);
                break;
            }
            default: {
            }
        }
    }
    EffectUtils.showTips = showTips;
    //========================== a lot of effect will coming! ============================
    var isPlayEffectPlay = false;
    /**
    * 给显示对象增加特效
    * obj           对象
    * cartoonType   动画类型 1:【可爱】按下变小，放开弹大 2:按下变小，放开轻微弹大 3：按下变小，放开变大
    */
    function playEffect(obj, cartoonType) {
        if (cartoonType === void 0) { cartoonType = 1; }
        if (this.isPlayEffectPlay) {
            return;
        }
        this.isPlayEffectPlay = true;
        var onComplete2 = function () {
            this.isPlayEffectPlay = false;
        };
        var onComplete1 = function () {
            if (cartoonType == 1) {
                egret.Tween.get(obj).to({ scaleX: 1, scaleY: 1, x: obj.x - obj.width / 4, y: obj.y - obj.height / 4 }, 500, egret.Ease.elasticOut).call(onComplete2, this);
            }
            else if (cartoonType == 2) {
                egret.Tween.get(obj).to({ scaleX: 1, scaleY: 1, x: obj.x - obj.width / 4, y: obj.y - obj.height / 4 }, 500, egret.Ease.backOut).call(onComplete2, this);
            }
            else if (cartoonType == 3) {
                egret.Tween.get(obj).to({ scaleX: 1, scaleY: 1, x: obj.x - obj.width / 4, y: obj.y - obj.height / 4 }, 100).call(onComplete2, this);
            }
        };
        egret.Tween.get(obj).to({ scaleX: 0.5, scaleY: 0.5, x: obj.x + obj.width / 4, y: obj.y + obj.height / 4 }, 100, egret.Ease.sineIn).call(onComplete1, this);
    }
    EffectUtils.playEffect = playEffect;
    /**
    * 给显示对象增加持续放大特效
    * obj           对象
    * Fx changed 2016-7-13 17:52:54
    */
    function playScaleEffect(obj) {
        var _sx = obj.scaleX, _sy = obj.scaleY;
        var onComplete1 = function () {
            if (obj != null) {
                var onComplete2 = function () {
                    obj.scaleX = _sx;
                    obj.scaleY = _sy;
                    egret.Tween.get(obj).to({ alpha: 1 }, 1000, egret.Ease.quadInOut).call(onComplete1, self);
                };
                obj.alpha = 1;
                egret.Tween.get(obj).to({ scaleX: 1.5, scaleY: 1.5, alpha: 0 }, 1000).call(onComplete2, self);
            }
        };
        onComplete1();
    }
    EffectUtils.playScaleEffect = playScaleEffect;
    /**
    * 显示对象上线浮动特效
    * obj           对象
    * time          浮动时间 毫秒
    * space         浮动高度
    * todo          多个对象跳动
    */
    function flyObj(obj, time, space) {
        if (space === void 0) { space = 50; }
        var onComplete1 = function () {
            if (obj != null) {
                var onComplete2 = function () {
                    egret.Tween.get(obj).to({ y: obj.y - space }, time).call(onComplete1, this);
                };
                egret.Tween.get(obj).to({ y: obj.y + space }, time).call(onComplete2, this);
            }
        };
        onComplete1();
    }
    EffectUtils.flyObj = flyObj;
    /**
    * 显示对象摇头特效
    * obj           对象
    * time          浮动时间 毫秒
    * space         摇头幅度
    * todo          多个对象摇头
    * oneDirection  持续一个方向 true
    * infinite      是否循环 true
    * 注意：需要将对象的注册点位置：0.5,1
    */
    function rockObj(obj, time, space, oneDirection, infinite) {
        if (space === void 0) { space = 20; }
        if (oneDirection === void 0) { oneDirection = false; }
        if (infinite === void 0) { infinite = true; }
        var onComplete1 = function () {
            if (obj != null) {
                if (!infinite) {
                    egret.Tween.get(obj).to({ rotation: space }, time);
                    return;
                }
                var onComplete2 = function () {
                    egret.Tween.get(obj).to({ rotation: -space }, time).call(onComplete1, this);
                };
                if (oneDirection) {
                    egret.Tween.get(obj).to({ rotation: space }, time).call(onComplete1, this);
                }
                else {
                    egret.Tween.get(obj).to({ rotation: space }, time).call(onComplete2, this);
                }
            }
        };
        onComplete1();
    }
    EffectUtils.rockObj = rockObj;
    /**
    * 文字打字机效果
    * obj           文本对象
    * content       文字
    * interval      打字间隔 毫秒
    */
    function typerEffect(obj, content, interval) {
        if (content === void 0) { content = ""; }
        if (interval === void 0) { interval = 200; }
        var strArr = content.split("");
        var len = strArr.length;
        for (var i = 0; i < len; i++) {
            egret.setTimeout(function () {
                obj.appendText(strArr[Number(this)]);
            }, i, interval * i);
        }
    }
    EffectUtils.typerEffect = typerEffect;
    /**
    * 中心放大弹出
    * obj           文本对象
    * duration      持续时间
    */
    function zoomIn(obj, duration) {
        if (duration === void 0) { duration = 30; }
        var scaleX = obj.scaleX;
        var scaleY = obj.scaleY;
        obj.scaleX = 0;
        obj.scaleY = 0;
        egret.Tween.get(obj).to({ alpha: 1 }, duration >> 2, egret.Ease.sineIn);
        egret.Tween.get(obj).to({ scaleX: scaleX, scaleY: scaleY }, duration, egret.Ease.backOut);
    }
    EffectUtils.zoomIn = zoomIn;
    // 扩展方法 By Fx 2016-7-12
    /**
     * 自定义公共事件 [Author,Fx] start
     */
    /**
     * 等比缩放
     */
    function scaleEq(el, sn) {
        el.scaleX = el.scaleY = sn;
    }
    EffectUtils.scaleEq = scaleEq;
    /**
     * 居中显示
     */
    function posCenter(el) {
        el.anchorOffsetX = el.width / 2;
        el.anchorOffsetY = el.height / 2;
        el.x = GlobalConfig.curWidth() >> 1;
        el.y = GlobalConfig.curHeight() >> 1;
    }
    EffectUtils.posCenter = posCenter;
    /**
     * 水平居中显示
     */
    function posCenterX(el) {
        el.anchorOffsetX = el.width / 2;
        el.x = GlobalConfig.curWidth() >> 1;
    }
    EffectUtils.posCenterX = posCenterX;
    /**
     * 垂直居中显示
     */
    function posCenterY(el) {
        el.anchorOffsetY = el.height / 2;
        el.y = GlobalConfig.curHeight() >> 1;
    }
    EffectUtils.posCenterY = posCenterY;
    /**
     * 居中显示
     */
    function posCenterBottom(el, sn) {
        el.anchorOffsetX = el.width / 2;
        el.anchorOffsetY = el.height / 2;
        el.x = GlobalConfig.curWidth() >> 1;
        el.y = GlobalConfig.curHeight() - el.height * sn / 2;
    }
    EffectUtils.posCenterBottom = posCenterBottom;
    /**
     * 锚点居中
     */
    function setAnchorOffset(el, n, m) {
        el.anchorOffsetX = el.width / 2 * n;
        el.anchorOffsetY = el.height / 2 * m;
    }
    EffectUtils.setAnchorOffset = setAnchorOffset;
    /**
     *  动画函数 fadeIn
     */
    function fadeIn(el, dt, cb) {
        el.alpha = 0;
        var myTween = egret.Tween.get(el).to({
            alpha: 1
        }, dt, egret.Ease.sineIn);
        cb && myTween.call(cb);
    }
    EffectUtils.fadeIn = fadeIn;
    /**
     *  动画函数 fadeOut
     */
    function fadeOut(el, dt, cb) {
        //TweenLite.to     alpha:  e: Power0.e t });
        var myTween = egret.Tween.get(el).to({
            alpha: 0
        }, dt, egret.Ease.circOut);
        cb && myTween.call(cb);
    }
    EffectUtils.fadeOut = fadeOut;
    /**
     * 获取网址参数
     */
    function getQueryName(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) {
            return decodeURI(r[2]);
        }
        return null;
    }
    EffectUtils.getQueryName = getQueryName;
    /**
     * 随机数范围[min,max)
     */
    function rdNum(Min, Max) {
        var range = Max - Min;
        var rand = Math.random();
        var num = Min + Math.floor(rand * range);
        return num;
    }
    EffectUtils.rdNum = rdNum;
})(EffectUtils || (EffectUtils = {}));
//# sourceMappingURL=EffectUtils.js.map