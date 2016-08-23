module game {
	export class PageB extends eui.Component {


		constructor() {
			super();
			this.skinName = "PageBSkin";
		}

		protected childrenCreated(): void {
			super.childrenCreated();
			// console.log("pageB 创建成功");
		}
	}
}