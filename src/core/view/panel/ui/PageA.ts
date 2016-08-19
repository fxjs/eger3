
module game {
	export class PageA extends eui.Component {

		private pageABg: eui.Image;
		public pageClose: eui.Button;

		constructor() {
			super();
			this.skinName = "PageASkin";
		}

		protected childrenCreated(): void {
			super.childrenCreated();
		}
	}
}