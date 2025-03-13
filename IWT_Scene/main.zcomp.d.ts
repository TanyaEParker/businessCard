import { ZComponent, ContextManager, Observable, Animation, Layer, LayerClip, Event } from "@zcomponent/core";

import { DefaultEnvironment as DefaultEnvironment_0 } from "@zcomponent/three/lib/components/environments/DefaultEnvironment";
import { DefaultLoader as DefaultLoader_1 } from "@zcomponent/core/lib/components/DefaultLoader";
import { Group as Group_2 } from "@zcomponent/three/lib/components/Group";
import { InstantWorldTracker as InstantWorldTracker_3 } from "@zcomponent/zappar-three/lib/components/trackers/InstantWorldTracker";
import { ShadowPlane as ShadowPlane_4 } from "@zcomponent/three/lib/components/meshes/ShadowPlane";
import { default as UI_zcomp_5 } from "../Screen UI/UI.zcomp";
import { ZapparCamera as ZapparCamera_6 } from "@zcomponent/zappar-three/lib/components/cameras/Camera";
import { default as cardContent_zcomp_7 } from "../Content/cardContent.zcomp";

interface ConstructorProps {

}

/**
* @zcomponent
* @zicon zcomponent
*/
declare class Comp extends ZComponent {

	constructor(contextManager: ContextManager, constructorProps: ConstructorProps);

	nodes: {
		DefaultEnvironment: DefaultEnvironment_0 & {
			behaviors: {

			}
		},
		DefaultLoader: DefaultLoader_1 & {
			behaviors: {

			}
		},
		Defaults: Group_2 & {
			behaviors: {

			}
		},
		InstantWorldTracker: InstantWorldTracker_3 & {
			behaviors: {

			}
		},
		ShadowPlane: ShadowPlane_4 & {
			behaviors: {

			}
		},
		UI: UI_zcomp_5 & {
			behaviors: {

			}
		},
		ZapparCamera: ZapparCamera_6 & {
			behaviors: {

			}
		},
		cardContent: cardContent_zcomp_7 & {
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
