import { Component, Behavior, BehaviorConstructorProps, ContextManager, registerBehaviorRunAtDesignTime } from "@zcomponent/core";
import { ImageTracker as ImageTracker } from "@zcomponent/zappar-three/lib/components/trackers/ImageTracker";
import { targetContext } from "../contexts/targetContext";
import { default as card} from "./card.zcomp";

interface ConstructionProps {
	// Add any constructor props you'd like for your behavior here
}

/**
 * @zbehavior 
 * @zparents three/Object3D/Group/Zappar/ImageTracker
 **/
export class cardEasterEgg extends Behavior<ImageTracker> {

	protected zcomponent = this.getZComponentInstance(card);
		
	private targetContext : targetContext;

	constructor(contextManager: ContextManager, instance: ImageTracker, protected constructorProps: ConstructionProps) {
		super(contextManager, instance);
		this.targetContext = contextManager.get(targetContext);
		this.register(instance.onAnchorNew,this.activateEasterEgg);
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

	private activateEasterEgg = (e)=>
	{
		this.targetContext.updateEasterEgg(true);
		navigator.vibrate([100,50,100,50,100,50,200]);
	}

	dispose() {
		// Clean up any resources
		// ...
		return super.dispose();
	}
}

// Uncomment below to run this behavior at design time
// registerBehaviorRunAtDesignTime(cardEasterEgg);
