import { ZComponent, ContextManager, Observable, Animation, Layer, LayerClip, Event } from "@zcomponent/core";

import { InstantWorldTracker as InstantWorldTracker_0 } from "@zcomponent/zappar-three/lib/components/trackers/InstantWorldTracker";
import { default as cardContent_zcomp_1 } from "../Content/cardContent.zcomp";
import { Group as Group_2 } from "@zcomponent/three/lib/components/Group";
import { ZapparCamera as ZapparCamera_3 } from "@zcomponent/zappar-three/lib/components/cameras/Camera";
import { DefaultEnvironment as DefaultEnvironment_4 } from "@zcomponent/three/lib/components/environments/DefaultEnvironment";
import { default as UI_zcomp_5 } from "../AR UI/UI.zcomp";
import { ShadowPlane as ShadowPlane_6 } from "@zcomponent/three/lib/components/meshes/ShadowPlane";
import { DefaultLoader as DefaultLoader_7 } from "@zcomponent/core/lib/components/DefaultLoader";

interface ConstructorProps {

}

/**
* @zcomponent
* @zicon zcomponent
*/
declare class Comp extends ZComponent {

	constructor(contextManager: ContextManager, constructorProps: ConstructorProps);

	nodes: {
		InstantWorldTracker: InstantWorldTracker_0 & {
			behaviors: {

			}
		},
		cardContent: cardContent_zcomp_1 & {
			behaviors: {

			}
		},
		Defaults: Group_2 & {
			behaviors: {

			}
		},
		ZapparCamera: ZapparCamera_3 & {
			behaviors: {

			}
		},
		DefaultEnvironment: DefaultEnvironment_4 & {
			behaviors: {

			}
		},
		UI: UI_zcomp_5 & {
			behaviors: {

			}
		},
		ShadowPlane: ShadowPlane_6 & {
			behaviors: {

			}
		},
		DefaultLoader: DefaultLoader_7 & {
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
