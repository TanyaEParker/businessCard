import { Component, Behavior, BehaviorConstructorProps, ContextManager, registerBehaviorRunAtDesignTime } from "@zcomponent/core";
import { InstantWorldTracker as InstantWorldTracker } from "@zcomponent/zappar-three/lib/components/trackers/InstantWorldTracker";
import { InstantTrackingManager } from "../contexts/InstantTrackingManager";
import { default as main} from "./main.zcomp";

interface ConstructionProps {
	// Add any constructor props you'd like for your behavior here
}

/**
 * @zbehavior 
 * @zparents three/Object3D/Group/Zappar/InstantTracker

 * @zparents three/Object3D/Group/Zappar/Anchor
 **/
export class togglePlacement extends Behavior<InstantWorldTracker> {

	protected zcomponent = this.getZComponentInstance(main);
		
	private IWTContext : InstantTrackingManager;
	constructor(contextManager: ContextManager, instance: InstantWorldTracker, protected constructorProps: ConstructionProps) {
		super(contextManager, instance);

		this.IWTContext = contextManager.get(InstantTrackingManager);

		this.register(this.IWTContext.isPlaced,this.togglePlacement);

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

	private togglePlacement=(state:boolean)=>
	{
		this.instance.placementMode.value = state;
	}


	dispose() {
		// Clean up any resources
		// ...
		return super.dispose();
	}
}

// Uncomment below to run this behavior at design time
// registerBehaviorRunAtDesignTime(togglePlacement);
