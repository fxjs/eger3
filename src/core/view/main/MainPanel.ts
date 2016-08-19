
class MainPanel extends eui.Component{

	private activityBar: game.ActivityBar;
	private functionBar: game.FunctionBar;
	private mainBtn: eui.Button;
	private roleInfo: game.RoleInfo;

	constructor(){
		super();
		this.skinName="MainUISkin";
	}

	protected childrenCreated(): void {
		super.childrenCreated();
	}
}