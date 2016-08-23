
module game {
	export class PageA extends eui.Component {

		private pageABg: eui.Image;
		public pageClose: eui.Button;

		constructor() {
			super();
			this.skinName = "PageASkin";
			EffectUtils.playScaleEffect(this.pageClose);			
		}

		protected childrenCreated(): void {
			super.childrenCreated();
			// console.log("pageA 创建成功");
		}		
	}
}