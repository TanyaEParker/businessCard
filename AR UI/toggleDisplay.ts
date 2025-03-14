import { Component, Behavior, BehaviorConstructorProps, ContextManager, registerBehaviorRunAtDesignTime } from "@zcomponent/core";
import { Div as Div } from "@zcomponent/html/lib/div";
import { UIManager } from "../contexts/UIManager";
import { default as Buttons} from "./Buttons.zcomp";

interface ConstructionProps {
	// Add any constructor props you'd like for your behavior here
}

/**
 * @zbehavior 
 * @zparents html/element/div
 **/
export class toggleDisplay extends Behavior<Div> {

	protected zcomponent = this.getZComponentInstance(Buttons);
	private UI_On = this.zcomponent.animation.layers.UIDisplay.clips.shown0;
	private UI_Off = this.zcomponent.animation.layers.UIDisplay.clips.hidden0;

	private UIManager : UIManager
	constructor(contextManager: ContextManager, instance: Div, protected constructorProps: ConstructionProps) {
		super(contextManager, instance);

		this.UIManager = contextManager.get(UIManager);

		this.register(this.UIManager.ARUIState,this.toggleUI);

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

	private toggleUI = (state)=>
	{
		state ? this.UI_Off.play() : this.UI_On.play();
	};

	dispose() {
		// Clean up any resources
		// ...
		return super.dispose();
	}
}

// Uncomment below to run this behavior at design time
// registerBehaviorRunAtDesignTime(toggleDisplay);
