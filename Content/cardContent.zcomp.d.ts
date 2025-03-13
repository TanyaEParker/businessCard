import { ZComponent, ContextManager, Observable, Animation, Layer, LayerClip, Event } from "@zcomponent/core";

import { DirectionalLight as DirectionalLight_0 } from "@zcomponent/three/lib/components/lights/DirectionalLight";
import { GLTF as GLTF_1 } from "@zcomponent/three/lib/components/models/GLTF";
import { Animation as Animation_2 } from "@zcomponent/three/lib/behaviors/Animation";
import { MeshStandardMaterial as MeshStandardMaterial_3 } from "@zcomponent/three/lib/components/materials/MeshStandardMaterial";
import { ImageTexture as ImageTexture_4 } from "@zcomponent/three/lib/components/textures/ImageTexture";

interface ConstructorProps {

}

/**
* @zcomponent
* @zicon zcomponent
*/
declare class Comp extends ZComponent {

	constructor(contextManager: ContextManager, constructorProps: ConstructorProps);

	nodes: {
		DirectionalLight_2: DirectionalLight_0 & {
			behaviors: {

			}
		},
		digitalTanya_glb: GLTF_1 & {
			behaviors: {
				0: Animation_2,
				Animation: Animation_2,
			}
		},
		hair_mod: MeshStandardMaterial_3 & {
			behaviors: {

			}
		},
		hair_normals: ImageTexture_4 & {
			behaviors: {

			}
		},
		shadows: DirectionalLight_0 & {
			behaviors: {

			}
		},
	};

	animation: Animation & { layers: {

	}};

	/**
	 * The position, in 3D space, of this node relative to its parent. The three elements of the array correspond to the `x`, `y`, and `z` components of position.
	 * 
	 * @zprop
	 * @zdefault [0,0,0]
	 * @zgroup Transform
	 * @zgrouppriority 10
	 */
	public position: Observable<[x: number, y: number, z: number]>;

	/**
	 * The rotation, in three dimensions, of this node relative to its parent. The three elements of the array correspond to Euler angles - yaw, pitch and roll.
	 * 
	 * @zprop
	 * @zdefault [0,0,0]
	 * @zgroup Transform
	 * @zgrouppriority 10
	 */
	public rotation: Observable<[x: number, y: number, z: number]>;

	/**
	 * The scale, in three dimensions, of this node relative to its parent. The three elements of the array correspond to scales in the the `x`, `y`, and `z` axis.
	 * 
	 * @zprop
	 * @zdefault [1,1,1]
	 * @zgroup Transform
	 * @zgrouppriority 10
	 */
	public scale: Observable<[x: number, y: number, z: number]>;

	/**
	 * Determines if this object and its children are rendered to the screen.
	 * 
	 * @zprop
	 * @zdefault true
	 * @zgroup Appearance
	 * @zgrouppriority 11
	 */
	public visible: Observable<boolean>;
}

export default Comp;
