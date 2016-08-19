module game {
	export
		class MainUI extends eui.Component {

		private activityBar: game.ActivityBar;
		private functionBar: game.FunctionBar;
		private mainBtn: eui.Button;

		constructor() {
			super();
			this.skinName = "MainUISkin";
		}

		protected childrenCreated(): void {
			super.childrenCreated();
		}
	}
}