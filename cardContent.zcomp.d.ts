import { ZComponent, ContextManager, Observable, Animation, Layer, LayerClip, Event } from "@zcomponent/core";

import { ImageTexture as ImageTexture_0 } from "@zcomponent/three/lib/components/textures/ImageTexture";
import { MeshStandardMaterial as MeshStandardMaterial_1 } from "@zcomponent/three/lib/components/materials/MeshStandardMaterial";
import { GLTF as GLTF_2 } from "@zcomponent/three/lib/components/models/GLTF";
import { DirectionalLight as DirectionalLight_3 } from "@zcomponent/three/lib/components/lights/DirectionalLight";

interface ConstructorProps {

}

/**
* @zcomponent
* @zicon zcomponent
*/
declare class Comp extends ZComponent {

	constructor(contextManager: ContextManager, constructorProps: ConstructorProps);

	nodes: {
		ImageTexture: ImageTexture_0 & {
			behaviors: {

			}
		},
		MeshStandardMaterial: MeshStandardMaterial_1 & {
			behaviors: {

			}
		},
		digitalTanya_glb: GLTF_2 & {
			behaviors: {

			}
		},
		DirectionalLight_2: DirectionalLight_3 & {
			behaviors: {

			}
		},
		shadows: DirectionalLight_3 & {
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
