module game {
	export class MainUI extends eui.Component {
		
		private functionBar: game.FunctionBar;
		private mainBtn: eui.Button;

		constructor() {
			super();
			this.skinName = "MainUISkin";
			this.functionBar.roleBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onRoleBtnClick, this);
		}

		private onRoleBtnClick(egret: egret.TouchEvent): void {
			console.log("role clicked");			
		}

		protected childrenCreated(): void {
			super.childrenCreated();
		}
	}
}