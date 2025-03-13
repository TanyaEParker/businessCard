import { Component, Behavior, BehaviorConstructorProps, ContextManager, registerBehaviorRunAtDesignTime, started } from "@zcomponent/core";
import { Mesh, MeshStandardMaterial } from "@zcomponent/three";
import { GLTF as GLTF } from "@zcomponent/three/lib/components/models/GLTF";
import { Color } from "three";

import { default as cardContent} from "./cardContent.zcomp";

interface ConstructionProps {
	// Add any constructor props you'd like for your behavior here
}

/**
 * @zbehavior 
 * @zparents three/Object3D/GLTF

 * @zparents three/Object3D/AttachmentSource/GLTF

 * @zparents three/MaterialHost/GLTF
 **/
export class mutateHairColour extends Behavior<GLTF> {

	protected zcomponent = this.getZComponentInstance(cardContent);
		

	constructor(contextManager: ContextManager, instance: GLTF, protected constructorProps: ConstructionProps) {
		super(contextManager, instance);

		started(contextManager).then(this.mutateHairMat);
	}

	private mutateHairMat = () =>
	{
		this.instance.loaded.then(()=>
		{
			const Hair = this.instance.materials.value.get('Wolf3D_Hair')
			if(!!Hair)
			{
				const iterator = Hair.entries();
				const thing = iterator.next();
				const mats = thing.value as MeshStandardMaterial[];
				for(let index of mats)
				{
					console.log ('eh')
					index.color.value = [128,128,128];
					index.metalness.value = 1;
				}
			}
		})
	}
	dispose() {
		// Clean up any resources
		// ...
		return super.dispose();
	}
}

// Run at design time
registerBehaviorRunAtDesignTime(mutateHairColour);
