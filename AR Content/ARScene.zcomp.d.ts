import { ZComponent, ContextManager, Observable, Animation, Layer, LayerClip, Event } from "@zcomponent/core";

import { Box as Box_0 } from "@zcomponent/three/lib/components/meshes/Box";
import { ShadowPlane as ShadowPlane_1 } from "@zcomponent/three/lib/components/meshes/ShadowPlane";
import { DirectionalLight as DirectionalLight_2 } from "@zcomponent/three/lib/components/lights/DirectionalLight";
import { Group as Group_3 } from "@zcomponent/three/lib/components/Group";
import { Plane as Plane_4 } from "@zcomponent/three/lib/components/meshes/Plane";
import { MeshStandardMaterial as MeshStandardMaterial_5 } from "@zcomponent/three/lib/components/materials/MeshStandardMaterial";

interface ConstructorProps {

}

/**
* @zcomponent
* @zicon zcomponent
*/
declare class Comp extends ZComponent {

	constructor(contextManager: ContextManager, constructorProps: ConstructorProps);

	nodes: {
		Box: Box_0 & {
			behaviors: {

			}
		},
		ShadowPlane: ShadowPlane_1 & {
			behaviors: {

			}
		},
		DirectionalLight: DirectionalLight_2 & {
			behaviors: {

			}
		},
		Main: Group_3 & {
			behaviors: {

			}
		},
		easterEgg: Group_3 & {
			behaviors: {

			}
		},
		cover: Plane_4 & {
			behaviors: {

			}
		},
		Box_2: Box_0 & {
			behaviors: {

			}
		},
		MeshStandardMaterial: MeshStandardMaterial_5 & {
			behaviors: {

			}
		},
		Box0: Box_0 & {
			behaviors: {

			}
		},
		ShadowPlane_2: ShadowPlane_1 & {
			behaviors: {

			}
		},
		MeshStandardMaterial_2: MeshStandardMaterial_5 & {
			behaviors: {

			}
		},
	};

	animation: Animation & { layers: {

	}};

	/**
	 * Determines if this object and its children are rendered to the screen.
	 * 
	 * @zprop
	 * @zdefault true
	 * @zgroup Appearance
	 * @zgrouppriority 11
	 */
	public visible: Observable<boolean>;

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
}

export default Comp;
