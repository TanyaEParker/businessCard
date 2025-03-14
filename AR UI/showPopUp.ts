import { Component, Behavior, BehaviorConstructorProps, ContextManager, registerBehaviorRunAtDesignTime } from "@zcomponent/core";
import { Button as Button } from "@zcomponent/html/lib/button";
import { UIManager } from "../contexts/UIManager";
import { default as Buttons} from "./Buttons.zcomp";

interface ConstructionProps {
	// Add any constructor props you'd like for your behavior here
}

/**
 * @zbehavior 
 * @zparents html/element/button
 **/
export class showPopUp extends Behavior<Button> {

	protected zcomponent = this.getZComponentInstance(Buttons);
	
	private ARUI : UIManager;

	constructor(contextManager: ContextManager, instance: Button, protected constructorProps: ConstructionProps) {
		super(contextManager, instance);

		this.ARUI = contextManager.get(UIManager);
		this.register(instance.onClick,this.showPopUp)

	}

	private showPopUp=()=>
	{
		console.log('hiding AR UI')
		this.ARUI.setARUI(true);
		this.ARUI.togglePopUp(true);
	}

	dispose() {
		// Clean up any resources
		// ...
		return super.dispose();
	}
}

// Uncomment below to run this behavior at design time
// registerBehaviorRunAtDesignTime(showPopUp);
