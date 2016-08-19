/**
 * 功能条
 */
module game {

    export class FunctionBar extends eui.Component {

        public constructor() {
            super();
            this.skinName = "FunctionBarSkin";
        }
        
        public roleBtn: eui.Button;
        public backpackBtn: eui.Button;
        public qianghuaBtn: eui.Button;
        public zhaoXianBtn: eui.Button;
        public chuangDangBtn: eui.Button;
        public shopBtn: eui.Button;
        public mapBtn: eui.Button;
    }
}