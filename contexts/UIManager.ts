import { Context, ContextManager, Observable } from "@zcomponent/core";

interface ConstructionProps {

}

/** @zcontext */
export class UIManager extends Context<ConstructionProps> {

	public ARUIState = new Observable<boolean>(false);
	public setARUI(state:boolean)
	{
		//need to flip this as is based on the Placement state so feels back to front
		this.ARUIState.value = state;
	}

	public PopUp = new Observable<boolean>(false);
	public togglePopUp(state:boolean)
	{
		console.log('bleh')
		this.PopUp.value = state;
	}

	constructor(contextManager: ContextManager, constructorProps: ConstructionProps) {
		super(contextManager, constructorProps);
	}

}
