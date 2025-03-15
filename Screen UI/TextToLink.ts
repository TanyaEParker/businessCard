import { Component, Behavior, BehaviorConstructorProps, ContextManager, registerBehaviorRunAtDesignTime, started } from "@zcomponent/core";
import { Span as Span } from "@zcomponent/html/lib/span";
import { default as UI} from "./UI.zcomp";

interface ConstructionProps {
	// Add any constructor props you'd like for your behavior here
}
enum linkOptions {external,email,tel}
/**
 * @zbehavior 
 * @zparents html/element/span
 **/
export class TextToLink extends Behavior<Span> {

	protected zcomponent = this.getZComponentInstance(UI);
	/**@zui */
	public LinkOption : linkOptions = linkOptions.external;

	constructor(contextManager: ContextManager, instance: Span, protected constructorProps: ConstructionProps) {
		super(contextManager, instance);

		started(contextManager).then(this.start)
		
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
	private start =()=>
	{
		const text = this.instance.innerText.value;
		this.instance.innerText.value = undefined;
		let payload = ''
		console.log(this.LinkOption)
		switch(this.LinkOption)
		{
			case linkOptions.external:
			console.log('external link out')
				payload = `https://www.${text}`;
			break;

			case linkOptions.email:
			console.log('email out')
			payload = `mailto:${text}`;
			break;

			case linkOptions.tel:
			console.log('telephone out')
			payload = `tel:${text}`;
			break;

		}
		this.instance.element.innerHTML = `<a style = "font-style: italic; margin-bottom:1vmin;"href=${payload} target="_blank">${text}</a>`
	}
	dispose() {
		// Clean up any resources
		// ...
		return super.dispose();
	}
}

// Run at design time
registerBehaviorRunAtDesignTime(TextToLink);
