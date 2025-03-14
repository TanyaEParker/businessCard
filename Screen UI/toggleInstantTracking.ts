import { Component, Behavior, BehaviorConstructorProps, ContextManager, registerBehaviorRunAtDesignTime, Observable, LayerClip, ZComponent, started } from "@zcomponent/core";
import { Button as Button } from "@zcomponent/html/lib/button";
import { InstantTrackingManager } from "../contexts/InstantTrackingManager";
import { default as UI} from "./UI.zcomp";

interface ConstructionProps {
	// Add any constructor props you'd like for your behavior here
}

/**
 * @zbehavior 
 * @zparents html/element/button
 **/
export class toggleInstantTracking extends Behavior<Button> {
	/**
	 * @zui
	 * @zgroup Tracking
	 */
	public trackingState = new Observable<boolean>(false);

	/**
	 * @zui
	 * @zvalues layerclipids
	 * @zgroup Tracking
	 */

	public LayerClipID : string;

	private layerclip : LayerClip|undefined;

	protected zcomponent = this.getZComponentInstance(UI);
		
	private IWTContext : InstantTrackingManager

	constructor(contextManager: ContextManager, instance: Button, protected constructorProps: ConstructionProps) {
		super(contextManager, instance);

		this.IWTContext = contextManager.get(InstantTrackingManager);
		started(contextManager).then(()=>
		{
			this.layerclip = this.zcomponent.animation.layerClipByID.get(this.LayerClipID);
		})

		this.register(instance.onClick,this.updateTrackingState)

	}

	private updateTrackingState = ()=>
	{
		if(this.IWTContext)
		{
			this.IWTContext.updateTrackingState(this.trackingState.value);
			if(this.layerclip)
			{
				this.layerclip.play();
			}
		}
	};

	dispose() {
		// Clean up any resources
		// ...
		return super.dispose();
	}
}

// Uncomment below to run this behavior at design time
// registerBehaviorRunAtDesignTime(toggleInstantTracking);
