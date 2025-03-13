import { Component, Behavior, BehaviorConstructorProps, ContextManager, registerBehaviorRunAtDesignTime, started, isEditTime } from "@zcomponent/core";
import { Group as Group } from "@zcomponent/three/lib/components/Group";
import { default as main} from "./card.zcomp";

interface ConstructionProps {
	// Add any constructor props you'd like for your behavior here
}

/**
 * @zbehavior 
 * @zparents three/Object3D/Group/Group
 **/
export class rotationOverride extends Behavior<Group> {

	protected zcomponent = this.getZComponentInstance(main);
		

	constructor(contextManager: ContextManager, instance: Group, protected constructorProps: ConstructionProps) {
		super(contextManager, instance);

		started(contextManager).then(()=>
		{
			if(isEditTime(contextManager))instance.rotation.value = [-90 * Math.PI/180,0,0]
		});

	}

	dispose() {

		return super.dispose();
	}
}


registerBehaviorRunAtDesignTime(rotationOverride);
