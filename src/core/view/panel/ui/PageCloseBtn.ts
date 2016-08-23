module game {
	export class PageCloseBtn extends eui.Component {

		private closeBtn: eui.Image;

		constructor() {
			super();
			this.skinName = "PageCloseBtnSkin";			
		}

		protected childrenCreated(): void {			
			super.childrenCreated();			
		}
	}
}