import { Context, ContextManager, Observable } from "@zcomponent/core";

interface ConstructionProps {

}

/** @zcontext */
export class targetContext extends Context<ConstructionProps> {

	public easterEggActive = new Observable<boolean>(false);

	public updateEasterEgg = (state)=>
	{
		this.easterEggActive.value = state;
	}

	constructor(contextManager: ContextManager, constructorProps: ConstructionProps) {
		super(contextManager, constructorProps);
	}

}

