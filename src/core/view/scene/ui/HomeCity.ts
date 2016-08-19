/**
 * 主城
 */
/**
 * 
 */

module game {

    export class HomeCity extends eui.Component {

        public constructor() {
            super();
            this.skinName = "HomeCitySkin";
            this.addEventListener(eui.UIEvent.COMPLETE,this.createCompleteEvent,this);
        }

        public createCompleteEvent(event: eui.UIEvent): void {
            this.removeEventListener(eui.UIEvent.COMPLETE,this.createCompleteEvent,this);
            // game.AppFacade.getInstance().registerMediator( new RoleMediator(this) );
            
            GameLayerManager.gameLayer().sceneLayer.addChild(this);            
        }

        public partAdded(partName: string,instance: any): void {
            super.partAdded(partName,instance);
        }
    }
}