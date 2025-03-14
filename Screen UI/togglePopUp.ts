import { Component, Behavior, BehaviorConstructorProps, ContextManager, registerBehaviorRunAtDesignTime, LayerClip, ZComponent, started } from "@zcomponent/core";
import { Group as Group } from "@zcomponent/three/lib/components/Group";
import { default as UI} from "./UI.zcomp";
import { UIManager } from "../contexts/UIManager";


interface ConstructionProps {
	// Add any constructor props you'd like for your behavior here
}

/**
 * @zbehavior 
 * @zparents three/Object3D/Group/Group
 **/
export class showPopup extends Behavior<Group> {

	protected zcomponent = this.getZComponentInstance(UI);
		
	private ARUI : UIManager;
	/**
	 * @zui
	 * @zvalues layerclipids
	 * @zgroup UI
	 */

	public PopUpShownLayer : string;
	private PopUpUIShown : LayerClip|undefined
		/**
	 * @zui
	 * @zvalues layerclipids
	 * @zgroup UI
	 */

	public PopUpHiddenLayer : string;
	private PopUpUIHidden : LayerClip|undefined

	constructor(contextManager: ContextManager, instance: Group, protected constructorProps: ConstructionProps) {
		super(contextManager, instance);

		started(contextManager).then(()=>
		{
			this.PopUpUIHidden = this.zcomponent.animation.layerClipByID.get(this.PopUpHiddenLayer)
			this.PopUpUIShown = this.zcomponent.animation.layerClipByID.get(this.PopUpShownLayer)
		});

		this.ARUI = contextManager.get(UIManager);
		this.register(this.ARUI.PopUp,this.togglePopUp);

		/*
		// You can register handlers for events on the node that this behavior
		// is attached to like this:

		this.register(this.instance.onPointerDown, evt => {
			// Code to handle event
		});

		// Or against other nodes in your zcomp file
		this.register(this.zcomponent.nodes.MyNode.onPointerDown, evt => {

		});
		
		*/
	}
	private togglePopUp = (state)=>
	{
		console.log('ah')
		if(this.PopUpUIHidden && this.PopUpUIShown)
		{
			console.log('eh')
			state ? this.PopUpUIShown.play() : this.PopUpUIHidden.play();
		}
	}
	dispose() {
		// Clean up any resources
		// ...
		return super.dispose();
	}
}

// Uncomment below to run this behavior at design time
// registerBehaviorRunAtDesignTime(showPopup);
