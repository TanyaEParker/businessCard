import { Component, Behavior, BehaviorConstructorProps, ContextManager, registerBehaviorRunAtDesignTime } from "@zcomponent/core";
import { Button as Button } from "@zcomponent/html/lib/button";
import { UIManager } from "../contexts/UIManager";
import { default as UI} from "./UI.zcomp";

interface ConstructionProps {
	// Add any constructor props you'd like for your behavior here
}

/**
 * @zbehavior 
 * @zparents html/element/button
 **/
export class hidePopUp extends Behavior<Button> {

	protected zcomponent = this.getZComponentInstance(UI);
		
	private ARUI : UIManager;

	constructor(contextManager: ContextManager, instance: Button, protected constructorProps: ConstructionProps) {
		super(contextManager, instance);

		this.ARUI = contextManager.get(UIManager);
		this.register(instance.onClick,this.hideUI);

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

	private hideUI =()=>
	{
		console.log('merp')
		this.ARUI.togglePopUp(false);
		this.ARUI.setARUI(false);

	}


	dispose() {
		// Clean up any resources
		// ...
		return super.dispose();
	}
}

// Uncomment below to run this behavior at design time
// registerBehaviorRunAtDesignTime(hidePopUp);
