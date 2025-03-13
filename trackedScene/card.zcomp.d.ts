import { ZComponent, ContextManager, Observable, Animation, Layer, LayerClip, Event } from "@zcomponent/core";

import { DefaultEnvironment as DefaultEnvironment_0 } from "@zcomponent/three/lib/components/environments/DefaultEnvironment";
import { DefaultLoader as DefaultLoader_1 } from "@zcomponent/core/lib/components/DefaultLoader";
import { Group as Group_2 } from "@zcomponent/three/lib/components/Group";
import { ShadowPlane as ShadowPlane_3 } from "@zcomponent/three/lib/components/meshes/ShadowPlane";
import { default as UI_zcomp_4 } from "../AR UI/UI.zcomp";
import { ZapparCamera as ZapparCamera_5 } from "@zcomponent/zappar-three/lib/components/cameras/Camera";
import { ImageTracker as ImageTracker_6 } from "@zcomponent/zappar-three/lib/components/trackers/ImageTracker";
import { PlayLayerClip as PlayLayerClip_7 } from "@zcomponent/core/lib/behaviors/PlayLayerClip";
import { OverrideOpacity as OverrideOpacity_8 } from "@zcomponent/three/lib/behaviors/OverrideOpacity";
import { cardEasterEgg as cardEasterEgg_9 } from "./cardEasterEgg";
import { PlaySound as PlaySound_10 } from "@zcomponent/core/lib/behaviors/PlaySound";
import { default as cardContent_zcomp_11 } from "../cardContent.zcomp";

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
		ShadowPlane: ShadowPlane_3 & {
			behaviors: {

			}
		},
		UI: UI_zcomp_4 & {
			behaviors: {

			}
		},
		ZapparCamera: ZapparCamera_5 & {
			behaviors: {

			}
		},
		business_cardback_pngzpt: ImageTracker_6 & {
			behaviors: {
				0: PlayLayerClip_7,
				PlayLayerClip: PlayLayerClip_7,
				1: PlayLayerClip_7,
				PlayLayerClip0: PlayLayerClip_7,
				2: OverrideOpacity_8,
				OverrideOpacity: OverrideOpacity_8,
			}
		},
		business_cardfront_jpgzpt: ImageTracker_6 & {
			behaviors: {
				0: cardEasterEgg_9,
				cardEasterEgg: cardEasterEgg_9,
				1: PlaySound_10,
				PlaySound: PlaySound_10,
			}
		},
		cardContent: cardContent_zcomp_11 & {
			behaviors: {

			}
		},
	};

	animation: Animation & { layers: {
		AnchorVisibility: Layer & { clips: {
			Hidden0: LayerClip;
			Visible0: LayerClip;
		}};
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
