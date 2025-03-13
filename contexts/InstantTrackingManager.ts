import { Context, ContextManager, Observable } from "@zcomponent/core";

interface ConstructionProps {

}

/** @zcontext */
export class InstantTrackingManager extends Context<ConstructionProps> {

	public isPlaced = new Observable<boolean>(true);
	public updateTrackingState = (placement)=>{this.isPlaced.value = placement; console.log(`content ${this.isPlaced.value ? 'placed' : 'floating'}`)};

	constructor(contextManager: ContextManager, constructorProps: ConstructionProps) {
		super(contextManager, constructorProps);
	}

}
